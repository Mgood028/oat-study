/* ============================================================
   OAT Prep — shared engine
   Drives: dashboard, review, practice (untimed), test (timed)
   Content lives in /data/*.js on window.OAT_CONTENT
   ============================================================ */

(function () {
  'use strict';

  var C = window.OAT_CONTENT || {};
  var SECTION_ORDER = ['biology', 'genchem', 'ochem', 'physics', 'reading', 'quant'];

  // Timed-test definitions. Timers are representative, not an exact replica of
  // the real OAT clock, because these banks are smaller than the full exam.
  var TESTS = [
    { id: 'ns',      name: 'Survey of Natural Sciences', sections: ['biology', 'genchem', 'ochem'], minutes: 55, note: 'Biology, General Chemistry & Organic Chemistry combined — mirrors the real first section.' },
    { id: 'physics', name: 'Physics',                    sections: ['physics'], minutes: 20, note: 'Its own scored section on the real exam.' },
    { id: 'quant',   name: 'Quantitative Reasoning',     sections: ['quant'],   minutes: 20, note: 'The real section is 40 questions in 45 minutes.' },
    { id: 'reading', name: 'Reading Comprehension',      sections: ['reading'], minutes: 25, note: 'Passage-based. Every answer is supported by the text.' },
    { id: 'full',    name: 'Full-Length Mock',           sections: ['biology', 'genchem', 'ochem', 'reading', 'physics', 'quant'], minutes: 120, note: 'All sections in exam order. Best for a dress rehearsal.' }
  ];

  /* ---------- storage (localStorage w/ in-memory fallback) ---------- */
  var Store = {
    _mem: {},
    get: function (k, d) {
      try { var v = localStorage.getItem('oat_' + k); return v ? JSON.parse(v) : d; }
      catch (e) { return (k in this._mem) ? this._mem[k] : d; }
    },
    set: function (k, v) {
      try { localStorage.setItem('oat_' + k, JSON.stringify(v)); }
      catch (e) { this._mem[k] = v; }
    }
  };

  /* ---------- small helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function letter(i) { return String.fromCharCode(65 + i); }
  function param(name) { return new URLSearchParams(location.search).get(name); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function totalQuestions(secId) { return (C[secId] && C[secId].questions.length) || 0; }
  function fmtTime(s) { var m = Math.floor(s / 60), r = s % 60; return m + ':' + (r < 10 ? '0' : '') + r; }

  /* ---------- molecule structures (rendered from SMILES) ---------- */
  var _molDrawers = {};
  function molDrawer(w, h) {
    var k = w + 'x' + h;
    if (!_molDrawers[k] && window.SmilesDrawer) {
      _molDrawers[k] = new window.SmilesDrawer.SvgDrawer({ width: w, height: h, padding: 6, bondThickness: 1.1, compactDrawing: false, terminalCarbons: true });
    }
    return _molDrawers[k];
  }
  // Draw every [data-smiles] element inside root that hasn't been drawn yet.
  function renderMolecules(root) {
    if (!window.SmilesDrawer || !root) return;
    $$('[data-smiles]:not([data-mol-done])', root).forEach(function (elm) {
      elm.setAttribute('data-mol-done', '1');
      var smi = elm.getAttribute('data-smiles');
      var w = parseInt(elm.getAttribute('data-w') || '0', 10) || 220;
      var h = parseInt(elm.getAttribute('data-h') || '0', 10) || 160;
      var drawer = molDrawer(w, h);
      if (!drawer) return;
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      elm.insertBefore(svg, elm.firstChild);
      try {
        window.SmilesDrawer.parse(smi, function (tree) {
          try { drawer.draw(tree, svg, 'light'); }
          catch (e) { svg.remove(); }
        }, function () { svg.remove(); });
      } catch (e) { svg.remove(); }
    });
  }
  // stem molecule markup (optional, when a question has q.smiles)
  function stemMolHTML(q) {
    if (!q.smiles) return '';
    var w = q.smilesW || 280, h = q.smilesH || 200;
    return '<div class="q-mol-wrap"><div class="mol q-mol" data-smiles="' + q.smiles + '" data-w="' + w + '" data-h="' + h + '"></div></div>';
  }
  // inner markup for one answer option (text or molecule)
  function optionInnerHTML(q, oi) {
    if (q.optionSmiles) {
      return '<span class="letter">' + letter(oi) + '</span><div class="mol" data-smiles="' + q.optionSmiles[oi] + '" data-w="150" data-h="115"></div>';
    }
    return '<span class="letter">' + letter(oi) + '</span><span>' + q.options[oi] + '</span>';
  }

  /* ---------- rough scaled-score estimate (200–400) ---------- */
  // The real OAT uses equated scaling we can't reproduce. This is a transparent,
  // linear approximation for motivation only, always shown with a disclaimer.
  function estScaled(pct) { return Math.round(200 + pct * 2); }
  function band(pct) {
    if (pct >= 85) return 'Excellent — competitive for most programs.';
    if (pct >= 70) return 'Solid. Tighten the sections below to push higher.';
    if (pct >= 55) return 'On your way — focus review on weak topics.';
    return 'Early days. Work content review, then retest.';
  }

  /* ---------- nav (mobile toggle + active link) ---------- */
  function initNav() {
    var toggle = $('.nav-toggle');
    if (toggle) toggle.addEventListener('click', function () { $('.nav').classList.toggle('open'); });
    var here = location.pathname.split('/').pop() || 'index.html';
    $$('.nav a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href === here) a.classList.add('active');
    });
  }

  /* ---------- score gauge (SVG semicircle, 200–400) ---------- */
  function gaugeSVG(scaled, pct) {
    var min = 200, max = 400;
    var frac = Math.max(0, Math.min(1, (scaled - min) / (max - min)));
    var angle = Math.PI * (1 - frac);              // 180° → 0°
    var cx = 110, cy = 115, r = 90;
    function pt(a, rad) { return [cx + rad * Math.cos(a), cy - rad * Math.sin(a)]; }
    var start = pt(Math.PI, r), end = pt(0, r);
    var track = 'M ' + start[0] + ' ' + start[1] + ' A ' + r + ' ' + r + ' 0 0 1 ' + end[0] + ' ' + end[1];
    var fillEnd = pt(angle, r);
    var large = frac > 0.5 ? 0 : 0;                // semicircle sweep, never > 180°
    var fill = 'M ' + start[0] + ' ' + start[1] + ' A ' + r + ' ' + r + ' 0 ' + large + ' 1 ' + fillEnd[0] + ' ' + fillEnd[1];
    var needle = pt(angle, r - 12);
    return '' +
      '<svg class="gauge" viewBox="0 0 220 130" role="img" aria-label="Score gauge">' +
        '<path d="' + track + '" fill="none" stroke="var(--surface-2)" stroke-width="14" stroke-linecap="round"/>' +
        '<path d="' + fill + '" fill="none" stroke="var(--primary)" stroke-width="14" stroke-linecap="round"/>' +
        '<line x1="' + cx + '" y1="' + cy + '" x2="' + needle[0] + '" y2="' + needle[1] + '" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/>' +
        '<circle cx="' + cx + '" cy="' + cy + '" r="5" fill="var(--ink)"/>' +
        '<text x="20" y="128" font-size="10" fill="var(--muted)">200</text>' +
        '<text x="185" y="128" font-size="10" fill="var(--muted)">400</text>' +
      '</svg>';
  }

  /* ==========================================================
     DASHBOARD
     ========================================================== */
  function initDashboard() {
    var list = $('#section-list');
    if (list) {
      SECTION_ORDER.forEach(function (id) {
        var s = C[id]; if (!s) return;
        var row = el('div', 'sec-row');
        row.innerHTML =
          '<div>' +
            '<div class="sec-name">' + s.icon + ' ' + s.name + '</div>' +
            '<div class="sec-meta">' + s.review.length + ' review topics · ' + s.questions.length + ' practice questions</div>' +
          '</div>' +
          '<div class="sec-actions">' +
            '<a class="btn btn-sm" href="review.html?section=' + id + '">Review</a>' +
            '<a class="btn btn-sm btn-primary" href="practice.html?section=' + id + '">Practice</a>' +
          '</div>';
        list.appendChild(row);
      });
    }
    // best mock score
    var best = Store.get('best_full', null);
    var bestEl = $('#best-score');
    if (bestEl) {
      if (best) bestEl.innerHTML = 'Your best full mock: <strong>≈' + best.scaled + '</strong> (' + best.pct + '% correct, ' + best.date + ')';
      else bestEl.textContent = 'No full mock taken yet — take one to see an estimated score.';
    }
    var totalQ = SECTION_ORDER.reduce(function (n, id) { return n + totalQuestions(id); }, 0);
    var tq = $('#total-q'); if (tq) tq.textContent = totalQ;
  }

  /* ==========================================================
     REVIEW
     ========================================================== */
  function initReview() {
    var secId = param('section') || 'biology';
    if (!C[secId]) secId = 'biology';
    var s = C[secId];

    // section switcher
    var switcher = $('#section-switcher');
    if (switcher) {
      SECTION_ORDER.forEach(function (id) {
        var a = el('a', id === secId ? 'active' : '', C[id].icon + ' ' + C[id].short);
        a.href = 'review.html?section=' + id;
        switcher.appendChild(a);
      });
    }

    $('#review-title').textContent = s.name;
    $('#review-blurb').textContent = s.blurb;

    var nav = $('#topic-nav'), body = $('#review-body');
    s.review.forEach(function (t, i) {
      var a = el('a', i === 0 ? 'active' : '', t.title);
      a.href = '#' + t.id;
      nav.appendChild(a);

      var block = el('section', 'topic-block');
      block.id = t.id;
      block.innerHTML = '<h2>' + t.title + '</h2>' + t.html;
      body.appendChild(block);
    });

    renderMolecules(body);

    // practice CTA
    var cta = $('#review-cta');
    if (cta) cta.href = 'practice.html?section=' + secId;

    // scroll-spy for topic nav
    var links = $$('#topic-nav a');
    var blocks = s.review.map(function (t) { return document.getElementById(t.id); });
    window.addEventListener('scroll', function () {
      var pos = window.scrollY + 100, active = 0;
      blocks.forEach(function (b, i) { if (b && b.offsetTop <= pos) active = i; });
      links.forEach(function (l, i) { l.classList.toggle('active', i === active); });
    }, { passive: true });
  }

  /* ==========================================================
     PRACTICE (untimed, instant explanations)
     ========================================================== */
  var practiceState = { secId: null, order: [], answered: {}, correct: 0, done: 0 };

  function initPractice() {
    var secId = param('section') || 'biology';
    if (!C[secId]) secId = 'biology';
    practiceState.secId = secId;

    // build section picker
    var picker = $('#practice-picker');
    SECTION_ORDER.forEach(function (id) {
      var opt = el('option'); opt.value = id; opt.textContent = C[id].name;
      if (id === secId) opt.selected = true;
      picker.appendChild(opt);
    });
    picker.addEventListener('change', function () { location.href = 'practice.html?section=' + picker.value; });

    $('#shuffle-btn').addEventListener('click', function () { renderPractice(true); });
    $('#reset-btn').addEventListener('click', function () { renderPractice(false); });

    renderPractice(false);
  }

  function renderPractice(doShuffle) {
    var s = C[practiceState.secId];
    var ids = s.questions.map(function (q, i) { return i; });
    practiceState.order = doShuffle ? shuffle(ids) : ids;
    practiceState.answered = {};
    practiceState.correct = 0;
    practiceState.done = 0;

    $('#practice-heading').textContent = s.name;
    updatePracticeScore();

    var wrap = $('#practice-questions');
    wrap.innerHTML = '';

    // reading: show passages up top so questions have context
    if (s.passages) {
      s.passages.forEach(function (p) {
        var panel = el('div', 'passage');
        panel.innerHTML = '<h3>' + p.title + '</h3>' + p.html;
        wrap.appendChild(panel);
      });
    }

    practiceState.order.forEach(function (qi, displayIdx) {
      wrap.appendChild(buildPracticeCard(s.questions[qi], displayIdx + 1));
    });
    renderMolecules(wrap);
  }

  function buildPracticeCard(q, num) {
    var card = el('div', 'question');
    var meta = '<div class="q-meta"><span class="q-num">Q' + num + '</span><span class="q-topic">' + q.topic + '</span></div>';
    var stem = '<div class="q-stem">' + q.stem + '</div>' + stemMolHTML(q);
    card.innerHTML = meta + stem;

    var opts = el('div', 'options');
    q.options.forEach(function (text, i) {
      var b = el('button', q.optionSmiles ? 'option opt-mol-btn' : 'option');
      b.innerHTML = optionInnerHTML(q, i);
      b.addEventListener('click', function () { answerPractice(card, opts, exp, q, i); });
      opts.appendChild(b);
    });
    card.appendChild(opts);

    var exp = el('div', 'explanation');
    card.appendChild(exp);
    return card;
  }

  function answerPractice(card, opts, exp, q, chosen) {
    if (card.dataset.answered) return;
    card.dataset.answered = '1';
    var buttons = $$('.option', opts);
    buttons.forEach(function (b, i) {
      b.disabled = true;
      if (i === q.answer) b.classList.add('correct');
      if (i === chosen && i !== q.answer) b.classList.add('wrong');
    });
    var right = chosen === q.answer;
    exp.innerHTML =
      '<span class="verdict ' + (right ? 'ok' : 'no') + '">' + (right ? 'Correct.' : 'Not quite — the answer is ' + letter(q.answer) + '.') + '</span> ' +
      q.explanation;
    exp.classList.add('show');

    practiceState.done++;
    if (right) practiceState.correct++;
    updatePracticeScore();
  }

  function updatePracticeScore() {
    var s = C[practiceState.secId];
    var pill = $('#practice-score');
    if (!pill) return;
    var pct = practiceState.done ? Math.round(practiceState.correct / practiceState.done * 100) : 0;
    pill.innerHTML =
      '<span class="ok">' + practiceState.correct + '</span> / ' + practiceState.done +
      ' correct · <span class="muted">' + practiceState.done + ' of ' + s.questions.length + ' done</span>' +
      (practiceState.done ? ' · ' + pct + '%' : '');
  }

  /* ==========================================================
     TEST (timed)
     ========================================================== */
  var testState = null;
  var testTimer = null;

  function initTest() {
    var chooser = $('#test-chooser');
    if (chooser) {
      TESTS.forEach(function (t) {
        var qCount = t.sections.reduce(function (n, sid) { return n + totalQuestions(sid); }, 0);
        var card = el('a', 'card card-link');
        card.href = '#';
        card.innerHTML =
          '<span class="section-tag">' + t.minutes + ' min · ' + qCount + ' Q</span>' +
          '<h3 style="font-family:var(--font-display);font-size:1.25rem;margin:.7rem 0 .3rem;">' + t.name + '</h3>' +
          '<p class="muted" style="font-size:.88rem;">' + t.note + '</p>';
        card.addEventListener('click', function (e) { e.preventDefault(); startTest(t); });
        chooser.appendChild(card);
      });
    }
  }

  function startTest(test) {
    // assemble questions in section order
    var qs = [];
    test.sections.forEach(function (sid) {
      C[sid].questions.forEach(function (q) {
        qs.push({ q: q, section: sid });
      });
    });

    testState = {
      test: test,
      items: qs,
      answers: new Array(qs.length).fill(null),
      flags: new Array(qs.length).fill(false),
      current: 0,
      remaining: test.minutes * 60,
      submitted: false
    };

    $('#test-chooser-wrap').classList.add('hidden');
    $('#test-runner').classList.remove('hidden');
    var bar = $('#test-bar-wrap'); if (bar) bar.classList.remove('hidden');
    $('#test-name').textContent = test.name;

    renderPalette();
    renderTestQuestion();
    startTimer();
    window.scrollTo(0, 0);
  }

  function startTimer() {
    clearInterval(testTimer);
    updateTimerDisplay();
    testTimer = setInterval(function () {
      testState.remaining--;
      updateTimerDisplay();
      if (testState.remaining <= 0) { clearInterval(testTimer); submitTest(true); }
    }, 1000);
  }

  function updateTimerDisplay() {
    var t = $('#test-timer');
    t.textContent = fmtTime(testState.remaining);
    t.classList.toggle('warn', testState.remaining <= 300 && testState.remaining > 60);
    t.classList.toggle('danger', testState.remaining <= 60);
  }

  function renderPalette() {
    var pal = $('#test-palette');
    pal.innerHTML = '';
    testState.items.forEach(function (item, i) {
      var b = el('button', '');
      b.textContent = i + 1;
      if (testState.answers[i] != null) b.classList.add('answered');
      if (testState.flags[i]) b.classList.add('flagged');
      if (i === testState.current) b.classList.add('current');
      b.addEventListener('click', function () { testState.current = i; renderTestQuestion(); renderPalette(); });
      pal.appendChild(b);
    });
  }

  function renderTestQuestion() {
    var i = testState.current;
    var item = testState.items[i];
    var q = item.q;
    var host = $('#test-question');
    host.innerHTML = '';

    // passage context for reading
    if (q.passageId && C.reading) {
      var p = C.reading.passages.filter(function (pp) { return pp.id === q.passageId; })[0];
      if (p) {
        var panel = el('div', 'passage');
        panel.innerHTML = '<h3>' + p.title + '</h3>' + p.html;
        host.appendChild(panel);
      }
    }

    var card = el('div', 'question');
    card.innerHTML =
      '<div class="q-meta"><span class="q-num">Question ' + (i + 1) + ' of ' + testState.items.length + '</span>' +
      '<span class="q-topic">' + C[item.section].short + ' · ' + q.topic + '</span></div>' +
      '<div class="q-stem">' + q.stem + '</div>' + stemMolHTML(q);

    var opts = el('div', 'options');
    q.options.forEach(function (text, oi) {
      var b = el('button', q.optionSmiles ? 'option opt-mol-btn' : 'option');
      if (testState.answers[i] === oi) b.classList.add('chosen-flag');
      b.innerHTML = optionInnerHTML(q, oi);
      b.addEventListener('click', function () {
        testState.answers[i] = oi;
        renderTestQuestion();
        renderPalette();
      });
      opts.appendChild(b);
    });
    card.appendChild(opts);
    host.appendChild(card);
    renderMolecules(host);

    $('#flag-btn').textContent = testState.flags[i] ? '⚑ Unflag' : '⚐ Flag for review';
    $('#test-progress').textContent =
      testState.answers.filter(function (a) { return a != null; }).length + ' of ' + testState.items.length + ' answered';

    $('#prev-btn').disabled = (i === 0);
    $('#next-btn').disabled = (i === testState.items.length - 1);
  }

  function bindTestControls() {
    var prev = $('#prev-btn'), next = $('#next-btn'), flag = $('#flag-btn'), submit = $('#submit-btn');
    if (!prev) return;
    prev.addEventListener('click', function () { if (testState.current > 0) { testState.current--; renderTestQuestion(); renderPalette(); window.scrollTo(0, 0); } });
    next.addEventListener('click', function () { if (testState.current < testState.items.length - 1) { testState.current++; renderTestQuestion(); renderPalette(); window.scrollTo(0, 0); } });
    flag.addEventListener('click', function () { testState.flags[testState.current] = !testState.flags[testState.current]; renderTestQuestion(); renderPalette(); });
    submit.addEventListener('click', function () {
      var unanswered = testState.answers.filter(function (a) { return a == null; }).length;
      var msg = unanswered > 0
        ? 'You have ' + unanswered + ' unanswered question' + (unanswered > 1 ? 's' : '') + '. Submit anyway? There is no penalty for guessing, so consider answering them first.'
        : 'Submit your test and see your results?';
      if (confirm(msg)) submitTest(false);
    });
  }

  function submitTest(timedOut) {
    if (testState.submitted) return;
    testState.submitted = true;
    clearInterval(testTimer);

    var total = testState.items.length, correct = 0;
    var bySection = {};
    testState.test.sections.forEach(function (sid) { bySection[sid] = { correct: 0, total: 0 }; });

    testState.items.forEach(function (item, i) {
      bySection[item.section].total++;
      if (testState.answers[i] === item.q.answer) { correct++; bySection[item.section].correct++; }
    });

    var pct = Math.round(correct / total * 100);
    var scaled = estScaled(pct);

    // persist best full mock
    if (testState.test.id === 'full') {
      var prev = Store.get('best_full', null);
      if (!prev || pct > prev.pct) {
        Store.set('best_full', { pct: pct, scaled: scaled, date: new Date().toLocaleDateString() });
      }
    }

    renderResults(correct, total, pct, scaled, bySection, timedOut);
  }

  function renderResults(correct, total, pct, scaled, bySection, timedOut) {
    $('#test-runner').classList.add('hidden');
    var bar = $('#test-bar-wrap'); if (bar) bar.classList.add('hidden');
    var host = $('#test-results');
    host.classList.remove('hidden');

    var breakdown = testState.test.sections.map(function (sid) {
      var b = bySection[sid];
      var sp = b.total ? Math.round(b.correct / b.total * 100) : 0;
      return '<div class="breakdown-row">' +
        '<div class="bd-name">' + C[sid].short + '</div>' +
        '<div class="bd-track"><div class="bd-fill" style="width:' + sp + '%"></div></div>' +
        '<div class="bd-val">' + b.correct + '/' + b.total + ' · ' + sp + '%</div>' +
      '</div>';
    }).join('');

    host.innerHTML =
      '<div class="result-hero">' +
        (timedOut ? '<div class="section-tag" style="margin-bottom:1rem;">⏱ Time expired — scored what you completed</div>' : '') +
        gaugeSVG(scaled, pct) +
        '<div class="gauge-num">≈' + scaled + '</div>' +
        '<div class="gauge-label">estimated scaled score · ' + correct + '/' + total + ' correct (' + pct + '%)</div>' +
        '<p class="result-sub">' + band(pct) + '</p>' +
        '<p class="muted" style="font-size:.78rem;margin-top:.6rem;max-width:46ch;margin-left:auto;margin-right:auto;">' +
          'The 200–400 figure is a rough linear estimate for motivation only. The real OAT uses an equated scale this tool can\'t reproduce — treat your % correct as the honest metric.' +
        '</p>' +
        '<div class="flex center gap" style="justify-content:center;margin-top:1.2rem;flex-wrap:wrap;">' +
          '<button class="btn btn-primary" id="review-answers-btn">Review answers</button>' +
          '<a class="btn" href="test.html">Back to tests</a>' +
        '</div>' +
      '</div>' +
      '<div class="card"><h3 style="font-family:var(--font-display);font-size:1.2rem;margin-bottom:.8rem;">Section breakdown</h3>' + breakdown + '</div>' +
      '<div id="answer-review" class="mt-3 hidden"></div>';

    $('#review-answers-btn').addEventListener('click', function () {
      var ar = $('#answer-review');
      ar.classList.toggle('hidden');
      if (!ar.dataset.built) { buildAnswerReview(ar); ar.dataset.built = '1'; }
      if (!ar.classList.contains('hidden') && ar.scrollIntoView) ar.scrollIntoView({ behavior: 'smooth' });
    });

    window.scrollTo(0, 0);
  }

  function buildAnswerReview(host) {
    host.innerHTML = '<h3 style="font-family:var(--font-display);font-size:1.3rem;margin-bottom:1rem;">Answer review</h3>';
    testState.items.forEach(function (item, i) {
      var q = item.q, chosen = testState.answers[i], right = chosen === q.answer;
      var card = el('div', 'question');
      card.innerHTML =
        '<div class="q-meta"><span class="q-num">Q' + (i + 1) + '</span>' +
        '<span class="q-topic">' + C[item.section].short + ' · ' + q.topic + '</span></div>' +
        (q.passageTitle ? '<div class="q-stem"><span class="passage-ref">(' + q.passageTitle + ')</span><br>' + q.stem + '</div>' : '<div class="q-stem">' + q.stem + '</div>') + stemMolHTML(q);
      var opts = el('div', 'options');
      q.options.forEach(function (text, oi) {
        var b = el('button', q.optionSmiles ? 'option opt-mol-btn' : 'option'); b.disabled = true;
        b.innerHTML = optionInnerHTML(q, oi);
        if (oi === q.answer) b.classList.add('correct');
        if (oi === chosen && !right) b.classList.add('wrong');
        opts.appendChild(b);
      });
      card.appendChild(opts);
      var exp = el('div', 'explanation show');
      exp.innerHTML =
        '<span class="verdict ' + (right ? 'ok' : 'no') + '">' +
        (chosen == null ? 'Left blank.' : (right ? 'Correct.' : 'You chose ' + letter(chosen) + '.')) +
        ' Answer: ' + letter(q.answer) + '.</span> ' + q.explanation;
      card.appendChild(exp);
      host.appendChild(card);
    });
    renderMolecules(host);
  }

  /* ==========================================================
     BOOT
     ========================================================== */
  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    var page = document.body.dataset.page;
    if (page === 'dashboard') initDashboard();
    else if (page === 'review') initReview();
    else if (page === 'practice') initPractice();
    else if (page === 'test') { initTest(); bindTestControls(); }
  });
})();
