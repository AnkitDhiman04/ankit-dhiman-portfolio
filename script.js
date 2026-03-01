// it is for dark and light mode button

const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;
const icon = themeToggleBtn.querySelector('i');

/* ---------- PAGE LOAD ---------- */
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    setMoonIcon(); // 👈 light mode → moon icon
  } else {
    body.classList.remove('light-mode');
    setSunIcon(); // 👈 dark mode → sun icon
  }
});

/* ---------- BUTTON CLICK ---------- */
themeToggleBtn.addEventListener('click', () => {
  const isLight = body.classList.toggle('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');

  // 👇 INVERTED ICON LOGIC
  isLight ? setMoonIcon() : setSunIcon();
});

/* ---------- ICON FUNCTIONS ---------- */
function setSunIcon() {
  icon.classList.remove('bi-moon');
  icon.classList.add('bi-sun');
}

function setMoonIcon() {
  icon.classList.remove('bi-sun');
  icon.classList.add('bi-moon');
}








