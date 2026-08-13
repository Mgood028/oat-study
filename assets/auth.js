/* ============================================================
   OAT Prep — optional account + progress sync
   Loaded on every page except signin.html. Signing in is optional:
   guests can use the whole app and their progress still saves to
   localStorage on that device, it just never leaves it. Signing in
   renders the account chip in the nav and syncs the 4 progress-
   related localStorage keys with the `progress` row for that user
   in Supabase, so progress backs up and follows them across devices.
   ============================================================ */

(function () {
  'use strict';

  var sb = window.supabase.createClient(window.OAT_SUPABASE_URL, window.OAT_SUPABASE_ANON_KEY);
  window.OAT_SB = sb;

  var SYNC_KEYS = ['topic_stats', 'test_history', 'scratch_notes', 'best_full'];
  var currentUserId = null;
  var pushTimer = null;

  function localGet(k, d) {
    try { var v = localStorage.getItem('oat_' + k); return v ? JSON.parse(v) : d; }
    catch (e) { return d; }
  }
  function localSet(k, v) {
    try { localStorage.setItem('oat_' + k, JSON.stringify(v)); } catch (e) {}
  }

  function currentBlob() {
    return {
      topic_stats: localGet('topic_stats', {}),
      test_history: localGet('test_history', []),
      scratch_notes: localGet('scratch_notes', ''),
      best_full: localGet('best_full', null)
    };
  }

  function applyBlob(blob) {
    localSet('topic_stats', blob.topic_stats || {});
    localSet('test_history', blob.test_history || []);
    localSet('scratch_notes', blob.scratch_notes || '');
    if (blob.best_full) localSet('best_full', blob.best_full);
  }

  // Additive merge so signing in on a second device (or signing in after
  // some guest-mode use on this one) never silently drops progress from
  // either side — stats sum, history/notes/best-score take whichever side
  // has more.
  function mergeBlobs(remote, local) {
    var stats = {};
    var secs = {};
    Object.keys(remote.topic_stats || {}).concat(Object.keys(local.topic_stats || {})).forEach(function (s) { secs[s] = 1; });
    Object.keys(secs).forEach(function (sec) {
      stats[sec] = {};
      var topics = {};
      var r = (remote.topic_stats || {})[sec] || {};
      var l = (local.topic_stats || {})[sec] || {};
      Object.keys(r).concat(Object.keys(l)).forEach(function (t) { topics[t] = 1; });
      Object.keys(topics).forEach(function (t) {
        var rc = r[t] || { correct: 0, total: 0 };
        var lc = l[t] || { correct: 0, total: 0 };
        stats[sec][t] = { correct: rc.correct + lc.correct, total: rc.total + lc.total };
      });
    });

    var seen = {};
    var hist = [];
    (remote.test_history || []).concat(local.test_history || []).forEach(function (h) {
      var k = JSON.stringify(h);
      if (!seen[k]) { seen[k] = 1; hist.push(h); }
    });
    hist = hist.slice(0, 50);

    var notes = (remote.scratch_notes && remote.scratch_notes.trim()) ? remote.scratch_notes : local.scratch_notes;

    var best = remote.best_full;
    if (local.best_full && (!best || local.best_full.scaled > best.scaled)) best = local.best_full;

    return { topic_stats: stats, test_history: hist, scratch_notes: notes, best_full: best };
  }

  function pushNow(userId) {
    var blob = currentBlob();
    sb.from('progress').upsert({
      user_id: userId,
      topic_stats: blob.topic_stats,
      test_history: blob.test_history,
      scratch_notes: blob.scratch_notes,
      best_full: blob.best_full,
      updated_at: new Date().toISOString()
    }).then(function (res) {
      if (res.error) console.error('OAT progress sync (push) failed', res.error);
    });
  }

  window.OAT_SYNC = {
    markDirty: function (key) {
      if (SYNC_KEYS.indexOf(key) === -1 || !currentUserId) return;
      clearTimeout(pushTimer);
      pushTimer = setTimeout(function () { pushNow(currentUserId); }, 800);
    }
  };

  function initialSync(userId) {
    sb.from('progress').select('*').eq('user_id', userId).maybeSingle().then(function (res) {
      if (res.error) { console.error('OAT progress sync (pull) failed', res.error); return; }
      var local = currentBlob();
      if (res.data) {
        applyBlob(mergeBlobs(res.data, local));
      }
      pushNow(userId);
      document.dispatchEvent(new CustomEvent('oat-sync-ready'));
    });
  }

  function renderAccountUI(user) {
    document.querySelectorAll('.nav').forEach(function (nav) {
      var existing = nav.querySelector('.account-chip');
      if (existing) existing.remove();
      var chip = document.createElement('span');
      chip.className = 'account-chip';
      if (user) {
        var emailSpan = document.createElement('span');
        emailSpan.className = 'account-email';
        emailSpan.textContent = user.email || '';
        chip.appendChild(emailSpan);
        var out = document.createElement('button');
        out.type = 'button';
        out.className = 'btn btn-sm btn-ghost';
        out.textContent = 'Sign out';
        out.addEventListener('click', function () {
          sb.auth.signOut().then(function () { location.reload(); });
        });
        chip.appendChild(out);
      } else {
        var signIn = document.createElement('a');
        signIn.className = 'btn btn-sm btn-primary';
        signIn.href = 'signin.html?redirect=' + encodeURIComponent(location.pathname + location.search);
        signIn.textContent = 'Sign in to save progress';
        chip.appendChild(signIn);
      }
      nav.appendChild(chip);
    });
  }

  sb.auth.getSession().then(function (res) {
    var session = res.data && res.data.session;
    if (!session) { renderAccountUI(null); return; }
    currentUserId = session.user.id;
    renderAccountUI(session.user);
    initialSync(currentUserId);
  });

  // Only react to real sign-in/sign-out events here — the initial
  // getSession() call above already handles page load, and Supabase
  // fires other event types (e.g. INITIAL_SESSION, TOKEN_REFRESHED)
  // that shouldn't re-trigger a sync.
  sb.auth.onAuthStateChange(function (event, session) {
    if (event === 'SIGNED_IN' && session) {
      currentUserId = session.user.id;
      renderAccountUI(session.user);
      initialSync(currentUserId);
    } else if (event === 'SIGNED_OUT') {
      currentUserId = null;
      renderAccountUI(null);
    }
  });
})();
