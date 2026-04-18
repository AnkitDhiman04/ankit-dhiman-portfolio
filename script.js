// it is for dark and light mode button
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;
const icon = themeToggleBtn.querySelector('i');

function updateThemeColor(color) {
    const meta = document.getElementById("theme-color-meta");

    if (meta) {
        meta.setAttribute("content", color);
    }

    // 🔥 Chrome repaint trick (NO reload)
    window.scrollTo(0, 1);
    window.scrollTo(0, 0);
}

/* ---------- PAGE LOAD ---------- */
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        setMoonIcon(); // 👈 light mode → moon icon
        updateThemeColor("#13a14e");

    } else {
        body.classList.remove('light-mode');
        setSunIcon(); // 👈 dark mode → sun icon
        updateThemeColor("#ccad00");
    }
});

/* ---------- BUTTON CLICK ---------- */
themeToggleBtn.addEventListener('click', () => {
    const isLight = body.classList.toggle('light-mode');

    localStorage.setItem('theme', isLight ? 'light' : 'dark');

    // 👇 INVERTED ICON LOGIC
    if (isLight) {
        setMoonIcon();
        updateThemeColor("#13a14e"); // light theme color
    } else {
        setSunIcon();
        updateThemeColor("#ccad00"); // dark theme color
    }
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

// it is for active and de-active button pages
(function () {
    [...document.querySelectorAll(".mycontrol")].forEach(button => {
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


const meinBody = document.querySelector('.main-content');
const contextMenu = document.querySelector('.context-menu');

//  right-click my custom context-menu
document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // Prevent right-click menu
    contextMenu.style.display = 'block';
    contextMenu.style.visibility = "hidden";

    const menuRect = contextMenu.getBoundingClientRect();    

    const clickX = e.clientX;
    const clickY = e.clientY;

    let posX = clickX;
    let posY = clickY;

    if (clickX + menuRect.width > window.innerWidth) {
        posX = window.innerWidth - menuRect.width;
    }

    if (clickY + menuRect.height > window.innerHeight) {
        posY = window.innerHeight - menuRect.height;
    }

    contextMenu.style.top = `${posY}px`;
    contextMenu.style.left = `${posX}px`;

    contextMenu.style.visibility = "visible";

});

// for closing context menu when clicking on any of the options
document.addEventListener('click', function () {
    contextMenu.style.display = 'none'; // Hide context menu on any click
});



// Disable common keyboard shortcuts
document.addEventListener('keydown', function (e) {
    // Disable right-click related shortcuts (like Ctrl+U, Ctrl+S, etc.)
    if (e.key === "F12" || e.ctrlKey && (e.key === "U" || e.key === "S" || e.key === "C" || e.key === "I" || e.key === "J")) {
        e.preventDefault(); // Disable the shortcut
        showBootstrapAlert("You Are Trying To Do Something Wrong!");
    }
});
// Disable F12 (Developer Tools) from opening
document.addEventListener('keydown', function (e) {
    if (e.key === "F12") {
        e.preventDefault(); // Disable F12 key (dev tools)
        showBootstrapAlert("You Are Trying To Do Something Wrong!");
    }
});
// Disable right-click (mouse)
document.addEventListener('mousedown', function (e) {
    if (e.button === 2) {  // Right mouse button
        e.preventDefault(); // Disable right-click
    }
});







