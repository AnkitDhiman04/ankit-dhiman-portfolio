// it is for dark and light mode button
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    // Change icon based on theme
    const icon = themeToggleBtn.querySelector('i');
    if (body.classList.contains('light-mode')) {
        icon.classList.replace('bi-moon', 'bi-sun');
    } else {
        icon.classList.replace('bi-sun', 'bi-moon');
    }
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






