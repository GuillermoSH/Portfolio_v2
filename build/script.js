const login = document.getElementById("login");
const desktop = document.getElementById("desktop-wrapper");
const loginForm = document.getElementById("form");
const loginSpinner = document.getElementById("login-spinner");
const optionsDropdown = document.getElementById("options-dropdown");
const optionsDropdownBtn = document.getElementById("options-dropdown-btn");

updateDateTime();
setInterval(updateDateTime, 30000);

document.addEventListener("DOMContentLoaded", function () {
    function toggleOptionsMenu() {
        optionsDropdown.classList.toggle("active");
    }

    function closeOptionsMenu(event) {
        if(!optionsDropdownBtn.contains(event.target) && !optionsDropdown.contains(event.target)) {
            optionsDropdown.classList.remove("active");
        }
    }

    optionsDropdownBtn.addEventListener("click", toggleOptionsMenu);
    document.addEventListener("click", closeOptionsMenu);
})

function toggleLogin(timeout) {
    loginForm.classList.toggle("pointer-events-none");
    loginForm.classList.toggle("opacity-100");
    loginForm.classList.toggle("opacity-0");
    loginSpinner.classList.toggle("opacity-100");

    if (timeout) {
        setTimeout(() => {
            login.classList.toggle("hiddenplus");
            desktop.classList.toggle("hiddenplus")
        }, 3000)
    } else {
        login.classList.toggle("hiddenplus");
        desktop.classList.toggle("hiddenplus");
    }
    
    closeOptionsMenu();
}

function updateDateTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById("clock").textContent = formattedTime;
    document.getElementById("date").textContent = formattedDate;
}