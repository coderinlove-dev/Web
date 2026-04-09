// ============================================================
//  PASSWORD CHECK
// ============================================================
function checkPassword() {
  const val = document.getElementById('passwordInput').value.trim();
  if (val === 'arekharachiloveyou') {
    window.location.href = 'home.html';
  } else {
    // List of random redirect links
    const links = [
      'https://www.google.com/',
      'https://www.google.com/imgres?q=sunny%20leoni&imgurl=https%3A%2F%2Fim.rediff.com%2Fmovies%2F2016%2Fjan%2F21sunny-leone1.jpg%3Fw%3D450%26h%3D450&imgrefurl=https%3A%2F%2Fm.rediff.com%2Fmovies%2Freport%2Fsunny-leone-cant-do-anything-about-how-i-look-or-being-sexy%2F20160127.htm&docid=CA0fyKdKSjb7uM&tbnid=pcMbTwySIMaT2M&vet=12ahUKEwj2v9GfpeGTAxUJiq8BHUkKGqQQnPAOegQILhAB..i&w=373&h=450&hcb=2&ved=2ahUKEwj2v9GfpeGTAxUJiq8BHUkKGqQQnPAOegQILhAB/',
      'https://www.google.com/imgres?q=lanarodes&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61ULX7FjoRL._AC_UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.ie%2FTINCHEW-Tapestry-Tapestries-Aesthetic-08x12inch%2Fdp%2FB0D3QNL5H7&docid=twvQ-K01yIkDTM&tbnid=oULMBhlG2_Gu8M&vet=12ahUKEwiX_fHypOGTAxV9lK8BHW5ZGLIQnPAOegQIFxAB..i&w=675&h=1000&hcb=2&ved=2ahUKEwiX_fHypOGTAxV9lK8BHW5ZGLIQnPAOegQIFxAB',
      'https://www.google.com/imgres?q=miakhalifa&imgurl=https%3A%2F%2Fs.yimg.com%2Fny%2Fapi%2Fres%2F1.2%2FTmZAyqTQYCf_1YDbL618EQ--%2FYXBwaWQ9aGlnaGxhbmRlcjt3PTE1MzY7aD0yMDQ4O2NmPXdlYnA-%2Fhttps%3A%2F%2Fmedia.zenfs.com%2Fen%2Fwhere_is_the_buzz_814%2F97f67efe728cb059ab0f897cac7ac140&imgrefurl=https%3A%2F%2Fwww.yahoo.com%2Fentertainment%2Farticles%2Fmia-khalifa-lauryn-hill-internet-071330994.html&docid=8xAZvfllj7udcM&tbnid=Y7nyc7EABsgnAM&vet=12ahUKEwjJuaPXpOGTAxV8evUHHVTGMuAQnPAOegQIHxAB..i&w=768&h=1024&hcb=2&ved=2ahUKEwjJuaPXpOGTAxV8evUHHVTGMuAQnPAOegQIHxAB',
      'https://www.google.com/imgres?q=hot%20bollywood%20actress&imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F75%2Fa5%2F4b%2F75a54b62c655b365069f5bdc76bf8bc6.jpg&imgrefurl=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fmodels--450500768993362955%2F&docid=bvz83CXkofsXPM&tbnid=NIUkRCDzx6f2lM&vet=12ahUKEwiMjragpuGTAxUwoa8BHZHpH-4QnPAOegQIEhAB..i&w=736&h=1124&hcb=2&ved=2ahUKEwiMjragpuGTAxUwoa8BHZHpH-4QnPAOegQIEhAB',
      'https://www.google.com/imgres?q=&imgurl=https%3A%2F%2Fi.pinimg.com%2F474x%2Fe5%2Fb4%2Fe3%2Fe5b4e328d8b5825ac84a42ce3811129f.jpg&imgrefurl=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fxcell--313844667804145254%2F&docid=-3-dox-gnZLl7M&tbnid=taV8H1RJsLwsTM&vet=12ahUKEwi9h5PHpuGTAxWJoK8BHf6UGzcQnPAOegQIDRAB..i&w=474&h=843&hcb=2&ved=2ahUKEwi9h5PHpuGTAxWJoK8BHf6UGzcQnPAOegQIDRAB#sv=CAMSXhoyKhBlLUxsa1lkdFBTUnR1aUpNMg5MbGtZZHRQU1J0dWlKTToOd0YwNW9wUUgzSnl3Wk0gBCokCg50YVY4SDFSSnNMd3NUTRIQZS1MbGtZZHRQU1J0dWlKTRgAMAEYByC_n78-SggQARgBIAEoAQ'
    ];
    // Pick a random link and redirect
    const randomLink = links[Math.floor(Math.random() * links.length)];
    window.location.href = randomLink;
  }
}

// ============================================================
//  HAMBURGER / MOBILE NAV
// ============================================================
function toggleNav() {
  const nav = document.getElementById('navLinks');
  const btn = document.getElementById('hamburger');
  if (!nav) return;
  nav.classList.toggle('open');
  btn.classList.toggle('open');
}
// Close nav when a link inside it is clicked
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('navLinks');
  if (nav) {
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        const btn = document.getElementById('hamburger');
        if (btn) btn.classList.remove('open');
      });
    });
  }


  // Allow Enter key on login
  const inp = document.getElementById('passwordInput');
  if (inp) inp.addEventListener('keydown', e => { if (e.key === 'Enter') checkPassword(); });

  // Apply saved theme
  applyTheme();
});

// ============================================================
//  DARK MODE TOGGLE
// ============================================================
function toggleDark() {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  const btn = document.getElementById('darkToggle');
  if (btn) btn.textContent = isLight ? '🌙' : '☀️';
}

function applyTheme() {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    const btn = document.getElementById('darkToggle');
    if (btn) btn.textContent = '🌙';
  }
}

// ============================================================
//  COPY CODE
// ============================================================
function copyCode(btn) {
  const code = btn.closest('.code-wrap').querySelector('code');
  const text = code.innerText || code.textContent;

  const finish = () => {
    const orig = btn.dataset.orig || 'Copy Code';
    btn.dataset.orig = orig;
    btn.textContent = '✓ Copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = orig; btn.classList.remove('copied'); }, 2000);
  };

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(finish).catch(() => fallbackCopy(text, finish));
  } else {
    fallbackCopy(text, finish);
  }
}

function fallbackCopy(text, cb) {
  const ta = document.createElement('textarea');
  ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  cb();
}

// ============================================================
//  SEARCH FILTER  (home.html)
// ============================================================
function filterPracticals() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  document.querySelectorAll('.prac-card').forEach(card => {
    const txt = card.textContent.toLowerCase();
    card.style.display = txt.includes(q) ? '' : 'none';
  });
  // Hide empty sections
  document.querySelectorAll('.section-wrap').forEach(sec => {
    const visible = sec.querySelectorAll('.prac-card:not([style*="none"])').length;
    sec.style.display = visible ? '' : 'none';
  });
}

// ============================================================
//  INSTRUCTIONS BOX TOGGLE
// ============================================================
function toggleInstr(btn) {
  const list = document.getElementById('instrList');
  if (!list) return;
  const collapsed = list.classList.toggle('collapsed');
  btn.textContent = collapsed ? '▼' : '▲';
  btn.title = collapsed ? 'Expand' : 'Collapse';
}
