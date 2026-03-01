// it is for dark and light mode button
// const themeToggleBtn = document.getElementById('theme-toggle-btn');
// const body = document.body;

// themeToggleBtn.addEventListener('click', () => {
//     body.classList.toggle('light-mode');
//     // Change icon based on theme
//     const icon = themeToggleBtn.querySelector('i');
//     if (body.classList.contains('light-mode')) {
//         icon.classList.replace('bi-moon', 'bi-sun');
//     } else {
//         icon.classList.replace('bi-sun', 'bi-moon');
//     }
// });

const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;
const icon = themeToggleBtn.querySelector('.bi-moon');

// 1️⃣ Page load pe theme set karo
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    icon.classList.replace('bi-sun', 'bi-moon');
} else {
    body.classList.remove('light-mode');
    icon.classList.replace('bi-moon', 'bi-sun');
  }
});

// 2️⃣ Button click pe theme toggle karo
themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');

  const isLight = body.classList.contains('light-mode');

  localStorage.setItem('theme', isLight ? 'light' : 'dark');

  icon.classList.replace(
    isLight ? 'bi-moon' : 'bi-sun',
    isLight ? 'bi-sun' : 'bi-moon'
  );
});




// it is for active and de-active button
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();






