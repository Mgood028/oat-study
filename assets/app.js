/* ============================================================
   OAT Prep — shared engine
   Drives: dashboard, review, practice (untimed), test (timed)
   Content lives in /data/*.js on window.OAT_CONTENT
   ============================================================ */

(function () {
  'use strict';

  var C = window.OAT_CONTENT || {};
  var SECTION_ORDER = ['biology', 'genchem', 'ochem', 'physics', 'reading', 'quant'];
  var SECTION_ICON_KEY = { biology: 'dna', genchem: 'flask_conical', ochem: 'link_2', physics: 'zap', quant: 'ruler', reading: 'book_open' };
  function sectionIconHTML(id) { return OAT_ICON(SECTION_ICON_KEY[id] || 'book'); }

  // Timed-test definitions, matched to the real OAT blueprint: question counts
  // per section and per-section timing. Each attempt draws a fresh random
  // sample of that many questions from the bank (see startTest), so no two
  // attempts are identical — same as walking into a real testing center.
  var REAL_COUNTS = { biology: 40, genchem: 30, ochem: 30, physics: 40, quant: 40, reading: 50 };
  var TESTS = [
    { id: 'ns',      name: 'Survey of Natural Sciences', sections: ['biology', 'genchem', 'ochem'], minutes: 90, note: 'Biology, General Chemistry & Organic Chemistry combined — 100 questions in 90 minutes, mirroring the real first section.' },
    { id: 'biology', name: 'Biology',                    sections: ['biology'], minutes: 36, note: 'Biology on its own, pulled out of the combined Natural Sciences section — 40 questions in 36 minutes, matching that section\'s per-question pacing.' },
    { id: 'genchem', name: 'General Chemistry',          sections: ['genchem'], minutes: 27, note: 'General Chemistry on its own, pulled out of the combined Natural Sciences section — 30 questions in 27 minutes, matching that section\'s per-question pacing.' },
    { id: 'ochem',   name: 'Organic Chemistry',          sections: ['ochem'],   minutes: 27, note: 'Organic Chemistry on its own, pulled out of the combined Natural Sciences section — 30 questions in 27 minutes, matching that section\'s per-question pacing.' },
    { id: 'physics', name: 'Physics',                    sections: ['physics'], minutes: 50, note: 'Its own scored section on the real exam — 40 questions in 50 minutes.' },
    { id: 'quant',   name: 'Quantitative Reasoning',     sections: ['quant'],   minutes: 45, note: '40 questions in 45 minutes, matching the real exam exactly.' },
    { id: 'reading', name: 'Reading Comprehension',      sections: ['reading'], minutes: 60, note: 'Passage-based. Every answer is supported by the text. (Bank is still growing toward the full 50-question length.)' },
    { id: 'full',    name: 'Full-Length Mock',           sections: ['biology', 'genchem', 'ochem', 'reading', 'physics', 'quant'], minutes: 265, note: 'All sections, in exam order, at real exam length and timing — the full dress rehearsal (about 4h25m of testing time, just like test day).' }
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
      if (window.OAT_SYNC) window.OAT_SYNC.markDirty(k);
    }
  };

  /* ---------- per-topic accuracy tracking (persists across practice + tests) ---------- */
  // Shape: { [sectionId]: { [topic]: { correct: n, total: n } } }
  function recordAnswer(secId, topic, correct) {
    if (!secId || !topic) return;
    var stats = Store.get('topic_stats', {});
    if (!stats[secId]) stats[secId] = {};
    if (!stats[secId][topic]) stats[secId][topic] = { correct: 0, total: 0 };
    stats[secId][topic].total++;
    if (correct) stats[secId][topic].correct++;
    Store.set('topic_stats', stats);
  }

  /* ---------- test attempt history (every timed test submission, newest first) ---------- */
  function logTestHistory(entry) {
    var hist = Store.get('test_history', []);
    hist.unshift(entry);
    if (hist.length > 50) hist = hist.slice(0, 50);
    Store.set('test_history', hist);
  }

  /* ---------- small helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function letter(i) { return String.fromCharCode(65 + i); }
  function param(name) { return new URLSearchParams(location.search).get(name); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function totalQuestions(secId) { return (C[secId] && C[secId].questions.length) || 0; }

  // Explanations are authored as a single HTML string; multi-step ones use
  // "<strong>Step N:</strong> ...<br>" between steps. For those, render each
  // step hidden behind a "show next step" button so a worked math/physics
  // solution gets solved one move at a time instead of dumping the full
  // answer at once — prose explanations (no <br>) render unchanged.
  function explanationBodyHTML(raw) {
    if (raw.indexOf('<br>') === -1) return '<div class="exp-body">' + raw + '</div>';
    var rows = raw.split('<br>').map(function (s) { return s.trim(); }).filter(Boolean);
    if (rows.length <= 1) return '<div class="exp-body">' + raw.replace(/<br>/g, '') + '</div>';

    // Authored explanations use two styles: "<strong>Step N:</strong> text"
    // or the whole clause bolded, "<strong>Step N — does the thing.</strong>
    // rest". Both start with "Step N" right after the opening tag, so just
    // strip that lead-in (through an optional colon/dash) and use the
    // matched number for the badge — whatever HTML follows (mid-tag or not)
    // still renders fine; a stray </strong> with no opener is harmless.
    var stepsHTML = rows.map(function (part, i) {
      var m = part.match(/^<strong>\s*Step\s+(\d+)\s*[:—-]?\s*/i);
      var cls = 'exp-step exp-step-hidden' + (m ? '' : ' exp-step-note');
      var body = m ? ('<span class="exp-step-tag">Step ' + m[1] + '</span><span class="exp-step-text">' + part.slice(m[0].length) + '</span>') : part;
      return '<div class="' + cls + '" data-step="' + i + '">' + body + '</div>';
    }).join('');
    var btn = '<button type="button" class="exp-reveal-btn" data-total="' + rows.length + '" data-shown="0">Show step 1 of ' + rows.length + ' &rarr;</button>';
    return '<div class="exp-body exp-steps">' + stepsHTML + '</div>' + btn;
  }

  // Wires the "show next step" button for one explanation panel — call once
  // right after setting exp.innerHTML via explanationBodyHTML().
  function wireExpReveal(exp) {
    var btn = exp.querySelector('.exp-reveal-btn');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var shown = parseInt(btn.dataset.shown, 10) + 1;
      var total = parseInt(btn.dataset.total, 10);
      var next = exp.querySelector('.exp-step[data-step="' + (shown - 1) + '"]');
      if (next) { next.classList.remove('exp-step-hidden'); }
      btn.dataset.shown = shown;
      if (shown >= total) { btn.remove(); }
      else { btn.textContent = 'Show step ' + (shown + 1) + ' of ' + total + ' →'; }
      if (next && next.scrollIntoView) next.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  /* ---------- practice vs. exam pools ----------
     Practice drills the `questions` bank with instant explanations, so by the
     time you sit a timed test those items are memorized and the score is
     meaningless. Timed tests therefore pull from a separate `examQuestions`
     bank the learner has never been shown. Sections that don't define one yet
     fall back to the practice bank so nothing breaks. */
  // Split a section into the unseen exam items and the practice items not
  // duplicated there. A timed test fills from `exam` first and only tops up
  // from `rest` if the exam bank is still too small to reach real exam length
  // — so a partially-built exam bank improves a test without shortening it.
  function testPool(secId) {
    var s = C[secId];
    if (!s) return { exam: [], rest: [] };
    var exam = (s.examQuestions || []).slice();
    var seen = {};
    exam.forEach(function (q) { seen[q.id] = 1; });
    var rest = (s.questions || []).filter(function (q) { return !seen[q.id]; });
    return { exam: exam, rest: rest };
  }
  function examBank(secId) {
    var p = testPool(secId);
    return p.exam.concat(p.rest);
  }
  function examCount(secId) { return examBank(secId).length; }
  function hasOwnExamBank(secId) {
    var s = C[secId];
    return !!(s && s.examQuestions && s.examQuestions.length);
  }
  // Look up a question by id within a section — used to reconstruct a saved
  // test attempt's full review from the compact { section, qid } pairs stored
  // in history (see logTestHistory/submitTest), against whatever the live
  // bank currently contains.
  // Saved attempts can reference either bank, so search both.
  function findQuestion(secId, qid) {
    var s = C[secId];
    if (!s) return null;
    var banks = [s.questions, s.examQuestions];
    for (var b = 0; b < banks.length; b++) {
      var qs = banks[b];
      if (!qs) continue;
      for (var i = 0; i < qs.length; i++) { if (qs[i].id === qid) return qs[i]; }
    }
    return null;
  }
  // How many questions a timed test draws from a section: the real exam's
  // count, capped by however many are actually in the exam bank right now.
  function testCount(secId) { return Math.min(REAL_COUNTS[secId] || examCount(secId), examCount(secId)); }
  function fmtTime(s) { var m = Math.floor(s / 60), r = s % 60; return m + ':' + (r < 10 ? '0' : '') + r; }

  /* ---------- Quantitative Comparison normalization ----------
     QR spec 1.4 items always carry the same four answer choices, in the same
     order. Defining them here rather than repeating them in every data row
     keeps the wording identical across the bank and makes it impossible for a
     stray typo to change what option C means. A data row only supplies
     `compare` (the two quantities) and `answer` (0-3). */
  var QC_CHOICES = [
    'Quantity A is greater',
    'Quantity B is greater',
    'The two quantities are equal',
    'The relationship cannot be determined from the information given'
  ];
  function normalizeCompareItems() {
    SECTION_ORDER.forEach(function (sid) {
      var s = C[sid];
      if (!s) return;
      [s.questions, s.examQuestions].forEach(function (bank) {
        if (!bank) return;
        bank.forEach(function (q) {
          if (q.compare && !q.options) q.options = QC_CHOICES.slice();
        });
      });
    });
  }

  /* ---------- toast (brief non-blocking notification, e.g. timer warnings) ---------- */
  function showToast(msg, kind) {
    var t = $('#toast');
    if (!t) { t = el('div', 'toast'); t.id = 'toast'; document.body.appendChild(t); }
    clearTimeout(t._hideTimer);
    t.textContent = msg;
    t.className = 'toast show' + (kind ? ' ' + kind : '');
    t._hideTimer = setTimeout(function () { t.classList.remove('show'); }, 4000);
  }

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
          try {
            drawer.draw(tree, svg, 'light');
            // SmilesDrawer sets width/height to the molecule's raw computed
            // extent (can be far larger than the requested canvas for big
            // structures), so force it back to the box we actually asked
            // for — the viewBox it just set keeps the drawing centered and
            // proportional as it scales down.
            svg.setAttribute('width', w);
            svg.setAttribute('height', h);
          }
          catch (e) { svg.remove(); }
        }, function () { svg.remove(); });
      } catch (e) { svg.remove(); }
    });
  }
  // Stem artwork. A question may carry either:
  //   q.smiles   — a structure rendered from SMILES, or
  //   q.stemSvg  — hand-authored SVG, used for curved-arrow mechanism items and
  //                reaction-coordinate diagrams that SMILES cannot express.
  // The June 2026 OAT organic spec makes curved-arrow items a core format:
  // predict the product from starting material + arrows, and predict the
  // arrows from starting material + product. Both need real arrow artwork.
  function stemExtrasHTML(q) {
    var out = '';
    if (q.stemSvg) {
      out += '<figure class="q-svg mech-diagram">' + q.stemSvg +
             (q.stemCaption ? '<figcaption class="mech-cap">' + q.stemCaption + '</figcaption>' : '') +
             '</figure>';
    }
    if (q.smiles) {
      var w = q.smilesW || 280, h = q.smilesH || 200;
      out += '<div class="q-mol-wrap"><div class="mol q-mol" data-smiles="' + q.smiles + '" data-w="' + w + '" data-h="' + h + '"></div></div>';
    }
    // Quantitative Comparison (Quantitative Reasoning spec 1.4): two quantities
    // shown side by side, optionally above shared given information. The answer
    // choices are always the same four, supplied by normalizeCompareItems().
    if (q.compare) {
      out += '<div class="qc-box">' +
        (q.compare.info ? '<div class="qc-info">' + q.compare.info + '</div>' : '') +
        '<div class="qc-cols">' +
          '<div class="qc-col"><div class="qc-label">Quantity A</div><div class="qc-val">' + q.compare.a + '</div></div>' +
          '<div class="qc-div" aria-hidden="true"></div>' +
          '<div class="qc-col"><div class="qc-label">Quantity B</div><div class="qc-val">' + q.compare.b + '</div></div>' +
        '</div></div>';
    }
    return out;
  }
  // Inner markup for one answer option: plain text, a SMILES structure, or
  // hand-authored SVG (used when the choices are themselves curved-arrow sets).
  function optionInnerHTML(q, oi) {
    var tag = '<span class="letter">' + letter(oi) + '</span>';
    if (q.optionSvg) {
      return tag + '<div class="opt-svg">' + q.optionSvg[oi] +
             (q.options && q.options[oi] ? '<span class="opt-svg-cap">' + q.options[oi] + '</span>' : '') + '</div>';
    }
    if (q.optionSmiles) {
      return tag + '<div class="mol" data-smiles="' + q.optionSmiles[oi] + '" data-w="150" data-h="115"></div>';
    }
    return tag + '<span>' + q.options[oi] + '</span>';
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

  /* ---------- theme (light/dark) ---------- */
  // A tiny inline script in <head> already applies data-theme before paint
  // (see the anti-flash snippet at the top of every page) if the user has
  // an explicit saved preference. This just keeps the toggle button in sync
  // and handles clicks; the CSS prefers-color-scheme media query covers
  // everyone who's never touched the toggle.
  function currentTheme() {
    var explicit = document.documentElement.getAttribute('data-theme');
    if (explicit === 'dark' || explicit === 'light') return explicit;
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    Store.set('theme', theme);
    var btn = $('#theme-toggle');
    if (btn) btn.innerHTML = OAT_ICON(theme === 'dark' ? 'sun' : 'moon');
  }
  function initTheme() {
    var btn = $('#theme-toggle');
    if (!btn) return;
    btn.innerHTML = OAT_ICON(currentTheme() === 'dark' ? 'sun' : 'moon');
    btn.addEventListener('click', function () {
      applyTheme(currentTheme() === 'dark' ? 'light' : 'dark');
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
     STUDY TOOLS — calculator, periodic table, notes.
     Mounted into #study-tools on the Practice and Timed Test
     pages (see initPractice()/initTest() below).
     ========================================================== */
  function initStudyTools() {
    var mount = $('#study-tools');
    if (!mount || mount.dataset.built) return;
    mount.dataset.built = '1';

    mount.innerHTML =
      '<div class="tools-bar">' +
        '<button class="tools-btn" data-tool="calc" type="button">' + OAT_ICON('calculator') + ' Calculator</button>' +
        '<button class="tools-btn" data-tool="ptable" type="button">' + OAT_ICON('atom') + ' Periodic Table</button>' +
        '<button class="tools-btn" data-tool="notes" type="button">' + OAT_ICON('square_pen') + ' Notes</button>' +
      '</div>' +
      '<div class="tool-panel" id="tool-panel-calc" hidden></div>' +
      '<div class="tool-panel" id="tool-panel-ptable" hidden></div>' +
      '<div class="tool-panel" id="tool-panel-notes" hidden></div>';

    buildCalcPanel($('#tool-panel-calc'));
    buildPtablePanel($('#tool-panel-ptable'));
    buildNotesPanel($('#tool-panel-notes'));

    $$('.tools-btn', mount).forEach(function (btn) {
      btn.addEventListener('click', function () { toggleTool(mount, btn.getAttribute('data-tool')); });
    });
    $$('.tool-close', mount).forEach(function (btn) {
      btn.addEventListener('click', function () { closeAllTools(mount); });
    });
  }

  function toggleTool(mount, tool) {
    var panel = $('#tool-panel-' + tool, mount);
    var btn = $('.tools-btn[data-tool="' + tool + '"]', mount);
    if (btn && btn.hidden) return;
    var opening = panel.hidden;
    closeAllTools(mount);
    if (opening) { panel.hidden = false; btn.classList.add('active'); }
  }
  function closeAllTools(mount) {
    $$('.tool-panel', mount).forEach(function (p) { p.hidden = true; });
    $$('.tools-btn', mount).forEach(function (b) { b.classList.remove('active'); });
  }

  // On the real OAT, the on-screen calculator only appears during Quantitative
  // Reasoning and the periodic table only during the Survey of Natural
  // Sciences (Biology/Gen Chem/Organic Chem) — neither is available during
  // Physics or Reading. Timed tests should match that exactly per question,
  // since a test can mix sections (e.g. the Full-Length Mock).
  var TOOL_SECTIONS = {
    calc: ['quant'],
    ptable: ['biology', 'genchem', 'ochem']
  };
  function updateToolAvailability(secId) {
    var mount = $('#study-tools');
    if (!mount || mount.hidden) return;
    Object.keys(TOOL_SECTIONS).forEach(function (tool) {
      var allowed = TOOL_SECTIONS[tool].indexOf(secId) !== -1;
      var btn = $('.tools-btn[data-tool="' + tool + '"]', mount);
      if (!btn) return;
      btn.hidden = !allowed;
      if (!allowed) {
        var panel = $('#tool-panel-' + tool, mount);
        if (panel && !panel.hidden) { panel.hidden = true; btn.classList.remove('active'); }
      }
    });
  }

  /* ---------- calculator (basic 4-function, matches the real OAT's on-screen calc) ---------- */
  function calcFmt(n) {
    if (!isFinite(n)) return 'Error';
    if (Math.abs(n) < 1e-12) n = 0;
    var s = n.toPrecision(12);
    if (s.indexOf('e') !== -1) return String(Number(s));
    if (s.indexOf('.') !== -1) s = s.replace(/0+$/, '').replace(/\.$/, '');
    return s;
  }
  function buildCalcPanel(panel) {
    var st = { display: '0', stored: null, op: null, memory: 0, overwrite: true };
    var KEYS = [
      ['MC', 'MR', 'M+', 'M-'],
      ['C', 'CE', 'DEL', '÷'],
      ['7', '8', '9', '×'],
      ['4', '5', '6', '−'],
      ['1', '2', '3', '+'],
      ['√', '±', '0', '.']
    ];
    panel.innerHTML =
      '<div class="tool-panel-head"><span>Calculator</span><button class="tool-close" type="button">&times;</button></div>' +
      '<div class="calc-display" id="calc-display">0</div>' +
      '<div class="calc-grid">' +
        KEYS.map(function (row) {
          return row.map(function (k) { return '<button class="calc-key" data-key="' + k + '" type="button">' + k + '</button>'; }).join('');
        }).join('') +
        '<button class="calc-key calc-eq" data-key="=" type="button">=</button>' +
      '</div>';

    function render() { $('#calc-display', panel).textContent = st.display; }

    function compute(a, b, op) {
      if (op === '+') return a + b;
      if (op === '−') return a - b;
      if (op === '×') return a * b;
      if (op === '÷') return b === 0 ? NaN : a / b;
      return b;
    }
    function pressDigit(d) {
      if (st.display === 'Error') { st.display = '0'; st.overwrite = true; }
      if (st.overwrite) { st.display = (d === '.') ? '0.' : d; st.overwrite = false; }
      else if (d === '.') { if (st.display.indexOf('.') === -1) st.display += '.'; }
      else { st.display = (st.display === '0') ? d : st.display + d; }
    }
    function pressOp(op) {
      if (st.display === 'Error') return;
      if (st.op && !st.overwrite) st.stored = compute(st.stored, parseFloat(st.display), st.op);
      else st.stored = parseFloat(st.display);
      st.op = op;
      st.display = calcFmt(st.stored);
      st.overwrite = true;
    }
    function pressEquals() {
      if (st.op == null || st.display === 'Error') return;
      var result = compute(st.stored, parseFloat(st.display), st.op);
      st.display = calcFmt(result);
      st.stored = null;
      st.op = null;
      st.overwrite = true;
    }
    function pressKey(k) {
      if (/^[0-9.]$/.test(k)) { pressDigit(k); }
      else if (k === '+' || k === '−' || k === '×' || k === '÷') { pressOp(k); }
      else if (k === '=') { pressEquals(); }
      else if (k === 'C') { st = { display: '0', stored: null, op: null, memory: st.memory, overwrite: true }; }
      else if (k === 'CE') { st.display = '0'; st.overwrite = true; }
      else if (k === 'DEL') {
        if (!st.overwrite && st.display.length > 1) st.display = st.display.slice(0, -1);
        else st.display = '0';
        if (st.display === '-') st.display = '0';
      }
      else if (k === '±') { if (st.display !== '0') st.display = st.display.charAt(0) === '-' ? st.display.slice(1) : '-' + st.display; }
      else if (k === '√') {
        var v = parseFloat(st.display);
        st.display = v < 0 ? 'Error' : calcFmt(Math.sqrt(v));
        st.overwrite = true;
      }
      else if (k === 'M+') { st.memory += parseFloat(st.display) || 0; st.overwrite = true; }
      else if (k === 'M-') { st.memory -= parseFloat(st.display) || 0; st.overwrite = true; }
      else if (k === 'MR') { st.display = calcFmt(st.memory); st.overwrite = true; }
      else if (k === 'MC') { st.memory = 0; }
      render();
    }
    panel.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.calc-key');
      if (btn) pressKey(btn.getAttribute('data-key'));
    });
  }

  /* ---------- periodic table (reference only — data/periodic-table.js) ---------- */
  function buildPtablePanel(panel) {
    var els = window.OAT_ELEMENTS || [];
    var main = els.filter(function (e) { return e.pos; });
    var lan = els.filter(function (e) { return e.cat === 'lanthanide'; });
    var act = els.filter(function (e) { return e.cat === 'actinide'; });

    function cellHTML(e, withPos) {
      var style = withPos ? ' style="grid-row:' + e.pos[0] + ';grid-column:' + e.pos[1] + ';"' : '';
      return '<button class="pt-cell cat-' + e.cat + '" data-num="' + e.num + '"' + style + '>' +
        '<span class="pt-num">' + e.num + '</span><span class="pt-sym">' + e.sym + '</span></button>';
    }

    panel.innerHTML =
      '<div class="tool-panel-head"><span>Periodic Table</span><button class="tool-close" type="button">&times;</button></div>' +
      '<div class="pt-detail" id="pt-detail">Click an element for its name, number, and atomic mass.</div>' +
      '<div class="pt-scroll">' +
        '<div class="pt-grid">' + main.map(function (e) { return cellHTML(e, true); }).join('') + '</div>' +
        '<div class="pt-fblock">' + lan.map(function (e) { return cellHTML(e, false); }).join('') + '</div>' +
        '<div class="pt-fblock">' + act.map(function (e) { return cellHTML(e, false); }).join('') + '</div>' +
      '</div>';

    panel.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.pt-cell');
      if (!btn) return;
      var num = parseInt(btn.getAttribute('data-num'), 10);
      var elm = els.filter(function (x) { return x.num === num; })[0];
      if (!elm) return;
      $('#pt-detail', panel).innerHTML = '<strong>' + elm.num + ' &middot; ' + elm.sym + '</strong> — ' + elm.name + ' &middot; ' + elm.mass + ' amu';
    });
  }

  /* ---------- notes (persisted scratchpad, shared across practice + tests) ---------- */
  function buildNotesPanel(panel) {
    panel.innerHTML =
      '<div class="tool-panel-head"><span>Notes</span><button class="tool-close" type="button">&times;</button></div>' +
      '<div class="notes-body"></div>' +
      '<div class="notes-foot"><span class="muted" style="font-size:.75rem;">Saved automatically in this browser</span><button class="btn btn-sm btn-ghost" id="notes-clear" type="button">Clear</button></div>';

    var ta = el('textarea', 'notes-area');
    ta.placeholder = 'Scratch space — work through problems, jot notes, eliminate answers.';
    ta.value = Store.get('scratch_notes', '');
    ta.addEventListener('input', function () { Store.set('scratch_notes', ta.value); });
    $('.notes-body', panel).appendChild(ta);

    $('#notes-clear', panel).addEventListener('click', function () {
      if (confirm('Clear your notes? This can\'t be undone.')) { ta.value = ''; Store.set('scratch_notes', ''); }
    });
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
            '<div class="sec-name">' + sectionIconHTML(id) + ' ' + s.name + '</div>' +
            '<div class="sec-meta">' + s.review.length + ' review topics · ' + s.questions.length + ' practice questions' +
              (hasOwnExamBank(id) ? ' · ' + s.examQuestions.length + ' exam-only' : '') + '</div>' +
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
        var a = el('a', id === secId ? 'active' : '', sectionIconHTML(id) + ' ' + C[id].short);
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
  var practiceState = { secId: null, setIdx: 0, order: [], answered: {}, correct: 0, done: 0, missed: [] };
  var PRACTICE_SET_SIZE = 10;

  function initPractice() {
    initStudyTools();
    var secId = param('section') || 'biology';
    if (!C[secId]) secId = 'biology';
    practiceState.secId = secId;
    var setParam = parseInt(param('set'), 10);
    practiceState.setIdx = (setParam >= 1) ? setParam - 1 : 0;

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
    var totalSets = Math.max(1, Math.ceil(s.questions.length / PRACTICE_SET_SIZE));
    if (practiceState.setIdx >= totalSets) practiceState.setIdx = totalSets - 1;
    if (practiceState.setIdx < 0) practiceState.setIdx = 0;

    // Sets are fixed, stable chunks of the bank in bank order — Shuffle only
    // reorders questions within the current set, it never changes which
    // questions belong to which set.
    var allIds = s.questions.map(function (q, i) { return i; });
    var start = practiceState.setIdx * PRACTICE_SET_SIZE;
    var chunkIds = allIds.slice(start, start + PRACTICE_SET_SIZE);
    practiceState.order = doShuffle ? shuffle(chunkIds) : chunkIds;
    practiceState.answered = {};
    practiceState.correct = 0;
    practiceState.done = 0;
    practiceState.missed = [];

    $('#practice-heading').textContent = s.name + (totalSets > 1 ? ' — Set ' + (practiceState.setIdx + 1) + ' of ' + totalSets : '');
    renderSetPicker(practiceState.secId, totalSets);
    updatePracticeScore();

    var recap = $('#practice-recap');
    if (recap) { recap.classList.add('hidden'); recap.innerHTML = ''; }

    var wrap = $('#practice-questions');
    wrap.innerHTML = '';

    // reading: show only the passage(s) this set's questions actually reference
    if (s.passages) {
      var neededPassages = {};
      practiceState.order.forEach(function (qi) {
        var q = s.questions[qi];
        if (q.passageId) neededPassages[q.passageId] = true;
      });
      s.passages.filter(function (p) { return neededPassages[p.id]; }).forEach(function (p) {
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

  function renderSetPicker(secId, totalSets) {
    var host = $('#set-picker');
    if (!host) return;
    host.innerHTML = '';
    if (totalSets <= 1) { host.classList.add('hidden'); return; }
    host.classList.remove('hidden');
    for (var i = 0; i < totalSets; i++) {
      var a = el('a', i === practiceState.setIdx ? 'active' : '', 'Set ' + (i + 1));
      a.href = 'practice.html?section=' + secId + '&set=' + (i + 1);
      host.appendChild(a);
    }
  }

  function buildPracticeCard(q, num) {
    var card = el('div', 'question');
    card.id = 'q' + num;
    card.dataset.num = num;
    var meta = '<div class="q-meta"><span class="q-num">Q' + num + '</span><span class="q-topic">' + q.topic + '</span></div>';
    var stem = '<div class="q-stem">' + q.stem + '</div>' + stemExtrasHTML(q);
    card.innerHTML = meta + stem;

    var opts = el('div', 'options');
    q.options.forEach(function (text, i) {
      var b = el('button', (q.optionSmiles || q.optionSvg) ? 'option opt-mol-btn' : 'option');
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
      '<div class="verdict-line"><span class="verdict ' + (right ? 'ok' : 'no') + '">' + (right ? 'Correct.' : 'Not quite — the answer is ' + letter(q.answer) + '.') + '</span></div>' +
      explanationBodyHTML(q.explanation);
    exp.classList.add('show');
    wireExpReveal(exp);

    practiceState.done++;
    if (right) { practiceState.correct++; } else { practiceState.missed.push(card.dataset.num); }
    recordAnswer(practiceState.secId, q.topic, right);
    updatePracticeScore();
    if (practiceState.done === practiceState.order.length) showSetRecap();
  }

  function showSetRecap() {
    var host = $('#practice-recap');
    if (!host) return;
    var totalSets = Math.max(1, Math.ceil(C[practiceState.secId].questions.length / PRACTICE_SET_SIZE));
    var hasNext = practiceState.setIdx + 1 < totalSets;
    var pct = Math.round(practiceState.correct / practiceState.order.length * 100);
    var missedLinks = practiceState.missed.map(function (n) {
      return '<a class="sr-jump" href="#q' + n + '">' + n + '</a>';
    }).join('');
    host.innerHTML =
      '<div class="set-recap">' +
        '<div class="sr-score">' + practiceState.correct + '/' + practiceState.order.length + ' <span class="sr-pct">(' + pct + '%)</span></div>' +
        '<div class="sr-label">Set complete — ' + (practiceState.missed.length ? 'review the ones you missed below' : 'clean sweep, nice work') + '</div>' +
        (practiceState.missed.length ? '<div class="sr-missed"><span class="sr-missed-label">Missed</span>' + missedLinks + '</div>' : '') +
        '<div class="sr-actions">' +
          (hasNext ? '<a class="btn btn-primary" href="practice.html?section=' + practiceState.secId + '&set=' + (practiceState.setIdx + 2) + '">Next set &rarr;</a>' : '') +
          '<button class="btn" id="sr-retry">Retry this set</button>' +
        '</div>' +
      '</div>';
    host.classList.remove('hidden');
    $('#sr-retry').addEventListener('click', function () { renderPractice(false); });
    host.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function updatePracticeScore() {
    var pill = $('#practice-score');
    if (!pill) return;
    var pct = practiceState.done ? Math.round(practiceState.correct / practiceState.done * 100) : 0;
    pill.innerHTML =
      '<span class="ok">' + practiceState.correct + '</span> / ' + practiceState.done +
      ' correct · <span class="muted">' + practiceState.done + ' of ' + practiceState.order.length + ' done</span>' +
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
        var qCount = t.sections.reduce(function (n, sid) { return n + testCount(sid); }, 0);
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
    // Assemble questions in section order, but draw a fresh random sample of
    // real-exam-length size from each section's bank — never the same set
    // or order twice, just like an actual testing session.
    var qs = [];
    test.sections.forEach(function (sid) {
      var pool = testPool(sid);
      var n = testCount(sid);
      // Unseen exam items first; top up from the practice bank only if that
      // bank alone cannot fill a real-length section.
      var picked = shuffle(pool.exam).slice(0, n);
      if (picked.length < n) {
        picked = picked.concat(shuffle(pool.rest).slice(0, n - picked.length));
      }
      picked.forEach(function (q) {
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

    var tools = $('#study-tools');
    if (tools) { tools.hidden = false; initStudyTools(); }

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
      if (testState.remaining === 900) showToast('⏱ 15 minutes remaining', 'warn');
      if (testState.remaining === 300) showToast('⏱ 5 minutes remaining', 'danger');
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
    updateToolAvailability(item.section);

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
      '<div class="q-stem">' + q.stem + '</div>' + stemExtrasHTML(q);

    var opts = el('div', 'options');
    q.options.forEach(function (text, oi) {
      var b = el('button', (q.optionSmiles || q.optionSvg) ? 'option opt-mol-btn' : 'option');
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

    $('#flag-btn').innerHTML = testState.flags[i] ? OAT_ICON('flag_off') + ' Unflag' : OAT_ICON('flag') + ' Flag for review';
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
      var right = testState.answers[i] === item.q.answer;
      if (right) { correct++; bySection[item.section].correct++; }
      if (testState.answers[i] != null) recordAnswer(item.section, item.q.topic, right);
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

    // log every attempt (any test type) to history for the Progress page —
    // items store just the section + question id + given answer, so a past
    // attempt can be fully reconstructed and reviewed later against the
    // live question bank (see findQuestion/buildHistoryReview) without
    // duplicating whole question objects into localStorage.
    logTestHistory({
      id: Date.now() + '-' + Math.random().toString(36).slice(2),
      testId: testState.test.id,
      testName: testState.test.name,
      date: new Date().toISOString(),
      correct: correct,
      total: total,
      pct: pct,
      scaled: scaled,
      bySection: bySection,
      timedOut: !!timedOut,
      items: testState.items.map(function (item, i) {
        return { section: item.section, qid: item.q.id, chosen: testState.answers[i], flagged: testState.flags[i] };
      })
    });

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

  // One question's review card: stem, options colored correct/wrong, verdict
  // line, full explanation. Shared by the just-finished results screen
  // (buildAnswerReview, live testState) and a reopened past attempt
  // (buildHistoryReview, reconstructed from saved history).
  function buildQuestionReviewCard(i, sectionId, q, chosen) {
    var right = chosen === q.answer;
    var card = el('div', 'question');
    card.innerHTML =
      '<div class="q-meta"><span class="q-num">Q' + (i + 1) + '</span>' +
      '<span class="q-topic">' + C[sectionId].short + ' · ' + q.topic + '</span></div>' +
      (q.passageTitle ? '<div class="q-stem"><span class="passage-ref">(' + q.passageTitle + ')</span><br>' + q.stem + '</div>' : '<div class="q-stem">' + q.stem + '</div>') + stemExtrasHTML(q);
    var opts = el('div', 'options');
    q.options.forEach(function (text, oi) {
      var b = el('button', (q.optionSmiles || q.optionSvg) ? 'option opt-mol-btn' : 'option'); b.disabled = true;
      b.innerHTML = optionInnerHTML(q, oi);
      if (oi === q.answer) b.classList.add('correct');
      if (oi === chosen && !right) b.classList.add('wrong');
      opts.appendChild(b);
    });
    card.appendChild(opts);
    var exp = el('div', 'explanation show');
    exp.innerHTML =
      '<div class="verdict-line"><span class="verdict ' + (right ? 'ok' : 'no') + '">' +
      (chosen == null ? 'Left blank.' : (right ? 'Correct.' : 'You chose ' + letter(chosen) + '.')) +
      ' Answer: ' + letter(q.answer) + '.</span></div>' +
      explanationBodyHTML(q.explanation);
    wireExpReveal(exp);
    card.appendChild(exp);
    return card;
  }

  function buildAnswerReview(host) {
    host.innerHTML = '<h3 style="font-family:var(--font-display);font-size:1.3rem;margin-bottom:1rem;">Answer review</h3>';
    testState.items.forEach(function (item, i) {
      host.appendChild(buildQuestionReviewCard(i, item.section, item.q, testState.answers[i]));
    });
    renderMolecules(host);
  }

  // Reopen a saved test attempt (from Progress → Test history) and rebuild
  // its full answer review against the live question bank.
  function buildHistoryReview(host, attempt) {
    host.innerHTML = '';
    (attempt.items || []).forEach(function (item, i) {
      var q = findQuestion(item.section, item.qid);
      if (!q) {
        var missing = el('p', 'muted', 'Question ' + (i + 1) + ' is no longer in the question bank.');
        missing.style.fontSize = '.85rem';
        host.appendChild(missing);
        return;
      }
      host.appendChild(buildQuestionReviewCard(i, item.section, q, item.chosen));
    });
    renderMolecules(host);
  }

  /* ==========================================================
     PROGRESS (per-topic accuracy, persisted across practice + tests)
     ========================================================== */
  function initProgress() {
    var secId = param('section') || 'biology';
    if (!C[secId]) secId = 'biology';

    var switcher = $('#progress-switcher');
    if (switcher) {
      switcher.innerHTML = '';
      SECTION_ORDER.forEach(function (id) {
        var a = el('a', id === secId ? 'active' : '', sectionIconHTML(id) + ' ' + C[id].short);
        a.href = 'progress.html?section=' + id;
        switcher.appendChild(a);
      });
    }

    $('#progress-title').textContent = C[secId].name + ' — topic-by-topic accuracy';
    var cta = $('#progress-cta');
    if (cta) cta.href = 'practice.html?section=' + secId;

    var stats = Store.get('topic_stats', {});
    var secStats = stats[secId] || {};

    // Unique topics for this section, in first-appearance order in the bank.
    var topics = [];
    C[secId].questions.forEach(function (q) {
      if (topics.indexOf(q.topic) === -1) topics.push(q.topic);
    });

    var rows = topics.map(function (t) {
      var s = secStats[t];
      var total = s ? s.total : 0;
      var correct = s ? s.correct : 0;
      return { topic: t, total: total, correct: correct, pct: total ? Math.round(correct / total * 100) : null };
    });

    var attempted = rows.filter(function (r) { return r.total > 0; }).sort(function (a, b) { return a.pct - b.pct; });
    var untried = rows.filter(function (r) { return r.total === 0; }).sort(function (a, b) { return a.topic.localeCompare(b.topic); });
    var ordered = attempted.concat(untried);

    var totalAnswered = attempted.reduce(function (n, r) { return n + r.total; }, 0);
    var totalCorrect = attempted.reduce(function (n, r) { return n + r.correct; }, 0);
    var summary = $('#progress-summary');
    if (summary) {
      summary.textContent = totalAnswered
        ? totalCorrect + '/' + totalAnswered + ' correct overall (' + Math.round(totalCorrect / totalAnswered * 100) + '%) · ' + attempted.length + ' of ' + topics.length + ' topics attempted'
        : 'No questions answered yet in ' + C[secId].name + ' — head to Practice or a Timed Test to start filling this in.';
    }

    var body = $('#progress-body');
    body.innerHTML = '';
    ordered.forEach(function (r) {
      var row = el('div', 'breakdown-row' + (r.total === 0 ? ' untried' : ''));
      var tier = r.total === 0 ? 'bd-untried' : (r.pct >= 75 ? 'bd-strong' : (r.pct >= 50 ? 'bd-mid' : 'bd-weak'));
      var valText = r.total === 0 ? 'Not attempted yet' : (r.correct + '/' + r.total + ' · ' + r.pct + '%');
      row.innerHTML =
        '<div class="bd-name">' + r.topic + '</div>' +
        '<div class="bd-track"><div class="bd-fill ' + tier + '" style="width:' + (r.total ? r.pct : 0) + '%"></div></div>' +
        '<div class="bd-val">' + valText + '</div>';
      body.appendChild(row);
    });

    renderHistory();

    var resetBtn = $('#progress-reset');
    if (resetBtn) {
      resetBtn.onclick = function () {
        if (confirm('Clear all saved progress — topic accuracy and test history — for every section? This can\'t be undone.')) {
          Store.set('topic_stats', {});
          Store.set('test_history', []);
          initProgress();
        }
      };
    }
  }

  // Every logged timed-test attempt, newest first — independent of the section switcher above.
  function renderHistory() {
    var host = $('#history-body');
    if (!host) return;
    var hist = Store.get('test_history', []);

    var summary = $('#history-summary');
    if (summary) {
      summary.textContent = hist.length
        ? hist.length + ' test' + (hist.length === 1 ? '' : 's') + ' logged'
        : 'No tests taken yet — every Timed Test you submit will show up here.';
    }

    host.innerHTML = '';
    if (!hist.length) {
      host.innerHTML = '<p class="muted" style="font-size:.9rem;">Take a Timed Test to start building a score history.</p>';
      return;
    }
    hist.forEach(function (h) {
      var item = el('div', 'history-item');
      var row = el('div', 'history-row');
      var d = new Date(h.date);
      var dateStr = isNaN(d.getTime()) ? '' :
        d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) + ' · ' +
        d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
      row.innerHTML =
        '<div class="hist-main">' +
          '<div class="hist-name">' + h.testName + (h.timedOut ? ' <span class="section-tag" style="margin-left:.4rem;">time expired</span>' : '') + '</div>' +
          '<div class="hist-date muted">' + dateStr + '</div>' +
        '</div>' +
        '<div class="hist-score">' + h.correct + '/' + h.total + ' · ' + h.pct + '% · ≈' + h.scaled + '</div>';
      item.appendChild(row);

      // Older entries logged before per-question saving existed won't have
      // `items` — just show the summary row for those, same as before.
      if (h.items && h.items.length) {
        var actions = el('div', 'history-actions');
        var btn = el('button', 'btn btn-sm btn-ghost', 'Review answers');
        actions.appendChild(btn);
        item.appendChild(actions);

        var panel = el('div', 'hidden');
        item.appendChild(panel);

        btn.addEventListener('click', function () {
          var opening = panel.classList.contains('hidden');
          panel.classList.toggle('hidden');
          btn.textContent = opening ? 'Hide review' : 'Review answers';
          if (opening && !panel.dataset.built) { buildHistoryReview(panel, h); panel.dataset.built = '1'; }
        });
      }

      host.appendChild(item);
    });
  }

  /* ==========================================================
     BOOT
     ========================================================== */
  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initTheme();
    normalizeCompareItems();
    var page = document.body.dataset.page;
    if (page === 'dashboard') initDashboard();
    else if (page === 'review') initReview();
    else if (page === 'practice') initPractice();
    else if (page === 'test') { initTest(); bindTestControls(); }
    else if (page === 'progress') initProgress();
  });
})();
