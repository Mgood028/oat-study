/* ============================================================
   OAT Prep — sign-in / create-account page logic
   ============================================================ */

(function () {
  'use strict';

  var sb = window.supabase.createClient(window.OAT_SUPABASE_URL, window.OAT_SUPABASE_ANON_KEY);
  var mode = 'signin';

  var form = document.getElementById('auth-form');
  var emailEl = document.getElementById('auth-email');
  var passEl = document.getElementById('auth-password');
  var errorEl = document.getElementById('auth-error');
  var submitBtn = document.getElementById('auth-submit');
  var toggleBtn = document.getElementById('auth-toggle');
  var titleEl = document.getElementById('auth-title');
  var subEl = document.getElementById('auth-sub');

  // Only ever follow a same-site relative path — never let the `redirect`
  // query param send someone off this site after signing in.
  function safeRedirect(p) {
    if (!p || p.indexOf('://') !== -1 || p.indexOf('//') === 0) return 'index.html';
    return p;
  }
  function redirectParam() {
    return new URLSearchParams(location.search).get('redirect');
  }

  function setMode(m) {
    mode = m;
    errorEl.textContent = '';
    errorEl.style.color = 'var(--wrong)';
    if (m === 'signup') {
      titleEl.textContent = 'Create your account';
      subEl.textContent = 'Track your OAT prep progress across every device.';
      submitBtn.textContent = 'Create account';
      toggleBtn.textContent = 'Already have an account? Sign in';
    } else {
      titleEl.textContent = 'Sign in';
      subEl.textContent = 'Sign in to pick up your progress right where you left off.';
      submitBtn.textContent = 'Sign in';
      toggleBtn.textContent = "Don't have an account? Create one";
    }
  }
  setMode('signin');

  toggleBtn.addEventListener('click', function (e) {
    e.preventDefault();
    setMode(mode === 'signin' ? 'signup' : 'signin');
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    errorEl.textContent = '';
    submitBtn.disabled = true;

    var email = emailEl.value.trim();
    var password = passEl.value;
    var action = mode === 'signup'
      ? sb.auth.signUp({ email: email, password: password })
      : sb.auth.signInWithPassword({ email: email, password: password });

    action.then(function (res) {
      submitBtn.disabled = false;
      if (res.error) { errorEl.textContent = res.error.message; return; }

      if (mode === 'signup' && res.data && res.data.user && !res.data.session) {
        errorEl.style.color = 'var(--correct)';
        errorEl.textContent = 'Check your email to confirm your account, then sign in.';
        setMode('signin');
        return;
      }

      location.href = safeRedirect(redirectParam());
    });
  });

  // Already signed in? Don't make them log in again.
  sb.auth.getSession().then(function (res) {
    if (res.data && res.data.session) location.replace(safeRedirect(redirectParam()));
  });
})();
