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



// it is for active and de-active button pages
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
   
})();


// blocking inspect options
function showBootstrapAlert(message) {
    var alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-danger alert-dismissible fade show top-alert";  // Added 'top-alert' class here
    alertDiv.role = "alert";
    alertDiv.innerHTML = message +
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

    // Append the alert to the body (or any other container)
    document.body.appendChild(alertDiv);

    // Auto-dismiss the alert after 5 seconds
    setTimeout(function () {
        alertDiv.classList.remove('show');
    }, 5000);
}
// Disable right-click (context menu)
document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // Prevent right-click menu
    showBootstrapAlert("Oops, something went wrong!");
});
// Disable common keyboard shortcuts
document.addEventListener('keydown', function (e) {
    // Disable right-click related shortcuts (like Ctrl+U, Ctrl+S, etc.)
    if (e.key === "F12" || e.ctrlKey && (e.key === "U" || e.key === "S" || e.key === "C" || e.key === "I" || e.key === "J")) {
        e.preventDefault(); // Disable the shortcut
        showBootstrapAlert("Oops, something went wrong!");
    }
});
// Disable F12 (Developer Tools) from opening
document.addEventListener('keydown', function (e) {
    if (e.key === "F12") {
        e.preventDefault(); // Disable F12 key (dev tools)
        showBootstrapAlert("Oops, something went wrong!");
    }
});
// Disable right-click (mouse)
document.addEventListener('mousedown', function (e) {
    if (e.button === 2) {  // Right mouse button
        e.preventDefault(); // Disable right-click
    }
});



//  it is for skill percentage 
function animateProgressBar(entry, speed) {
    const span = entry.target.querySelector("span");
    const percentage = parseInt(span.getAttribute("data-percent"));
    const progText = entry.target.querySelector(".prog-text");

    let currentPercentage = 0;
    const increment = () => {
        if (currentPercentage < percentage) {
            currentPercentage += speed; // Increment by the speed value
            if (currentPercentage > percentage) currentPercentage = percentage; // Ensure it doesn't overshoot
            span.style.width = `${currentPercentage}%`;
            progText.textContent = `${currentPercentage}%`;
            setTimeout(increment, 26); // Control frame rate (16ms for ~60fps)
        }
    };
    increment();
}
// Set up Intersection Observer for individual progress bars
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const speed = 2; // Adjust speed (higher values are faster)
                animateProgressBar(entry, speed);
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, {
        threshold: 0.5, // Trigger when 50% of the progress bar is visible
    });

    progressBars.forEach(bar => observer.observe(bar));
});




