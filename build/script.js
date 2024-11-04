const login = document.getElementById("login");
const desktop = document.getElementById("desktop");
const loginForm = document.getElementById("form");
const loginSpinner = document.getElementById("login-spinner");

updateDateTime();
setInterval(updateDateTime, 60000);

function toggleLogin(timeout) {
    loginForm.classList.toggle("pointer-events-none");
    loginForm.classList.toggle("opacity-100");
    loginForm.classList.toggle("opacity-0");
    loginSpinner.classList.toggle("opacity-100");

    if (timeout) {
        setTimeout(() => {
            login.classList.toggle("hiddenplus");
            desktop.classList.toggle("hidden")
        }, 3000)
    } else {
        login.classList.toggle("hiddenplus");
        desktop.classList.toggle("hidden");
    }
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