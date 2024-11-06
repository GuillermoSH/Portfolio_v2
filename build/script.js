const login = document.getElementById("login");
const desktop = document.getElementById("desktop");
const loginForm = document.getElementById("form");
const loginSpinner = document.getElementById("login-spinner");
const desktopWrapper = document.getElementById("desktop-wrapper");

const optionsDropdownBtn = document.getElementById("options-dropdown-btn");
const languageBtn = document.getElementById("language-btn");
const optionsDropdown = document.getElementById("options-dropdown");
const languageOptions = document.getElementById("language-options");

const explorerTemplate = document.getElementById("explorer-template");

const projectsFolder = document.getElementById("projects-folder");
const experienceFolder = document.getElementById("experience-folder");
const toolsFolder = document.getElementById("tools-folder");
const biographyFile = document.getElementById("biography-file");

const projectsFolderBtn = document.getElementById("projects-folder-btn");
const toolsFolderBtn = document.getElementById("tools-folder-btn");
const experienceFolderBtn = document.getElementById("experience-folder-btn");
const biographyFileBtn = document.getElementById("biography-file-btn");

const closeProjectsBtn = document.getElementById("close-projects-btn");
const closeExperienceBtn = document.getElementById("close-experience-btn");
const closeBiographyBtn = document.getElementById("close-biography-btn");
const closeToolsBtn = document.getElementById("close-tools-btn");

const maxProjectsBtn = document.getElementById("max-projects-btn");
const maxExperienceBtn = document.getElementById("max-experience-btn");
const maxBiographyBtn = document.getElementById("max-biography-btn");
const maxToolsBtn = document.getElementById("max-tools-btn");

const minProjectsBtn = document.getElementById("min-projects-btn");
console.log(minProjectsBtn);
console.log(maxProjectsBtn);
const minExperienceBtn = document.getElementById("min-experience-btn");
const minBiographyBtn = document.getElementById("min-biography-btn");
const minToolsBtn = document.getElementById("min-tools-btn");

updateDateTime();
setInterval(updateDateTime, 30000);

document.addEventListener("DOMContentLoaded", function () {
    function toggleOptionsMenu() {
        optionsDropdown.classList.toggle("active");
    }

    function closeOptionsMenu(event) {
        if (!optionsDropdownBtn.contains(event.target) && !optionsDropdown.contains(event.target)) {
            optionsDropdown.classList.remove("active");
        }
    }

    function toggleLanguageOptions() {
        setTimeout(() => {
            languageOptions.classList.toggle("hiddenplus");
        }, 100);
    }

    function closeLanguageOptions(event) {
        if (!languageBtn.contains(event.target)) {
            languageOptions.classList.add("hiddenplus");
        }
    }

    function actionOnFolderOrFile(element, action) {
        console.log(`Ejecutando ${action} en`, element);
        switch (action) {
            case 'open':
                element.classList.remove('closed', 'maximized', 'minimized');
                break;
            case 'close':
                element.classList.add('closed');
                element.classList.remove('maximized', 'minimized');
                break;
            case 'maximized':
                element.classList.toggle('maximized');
                element.classList.remove('minimized');
                break;
            case 'minimized':
                element.classList.add('minimized');
                element.classList.remove('maximized');
                break;
            default:
                console.warn(`Acción no reconocida: ${action}`);
        }        
    }

    optionsDropdownBtn.addEventListener("click", toggleOptionsMenu);
    languageBtn.addEventListener("click", toggleLanguageOptions);

    projectsFolderBtn.addEventListener("click", () => actionOnFolderOrFile(projectsFolder, "open"));
    toolsFolderBtn.addEventListener("click", () => actionOnFolderOrFile(toolsFolder, "open"));
    experienceFolderBtn.addEventListener("click", () => actionOnFolderOrFile(experienceFolder, "open"));
    biographyFileBtn.addEventListener("click", () => actionOnFolderOrFile(biographyFile, "open"));

    closeProjectsBtn.addEventListener("click", () => actionOnFolderOrFile(projectsFolder, "close"));
    // closeToolsBtn.addEventListener("click", () => actionOnFolderOrFile(toolsFolder, "close"));
    // closeExperienceBtn.addEventListener("click", () => actionOnFolderOrFile(experienceFolder, "close"));
    // closeBiographyBtn.addEventListener("click", () => actionOnFolderOrFile(biographyFile, "close"));

    maxProjectsBtn.addEventListener("click", () => actionOnFolderOrFile(projectsFolder, "maximized"));
    // maxExperienceBtn.addEventListener("click", () => actionOnFolderOrFile(experienceFolder, "maximized"));
    // maxBiographyBtn.addEventListener("click", () => actionOnFolderOrFile(biographyFile, "maximized"));
    // maxToolsBtn.addEventListener("click", () => actionOnFolderOrFile(toolsFolder, "maximized"));

    minProjectsBtn.addEventListener("click", () => actionOnFolderOrFile(projectsFolder, "minimized"));
    // minExperienceBtn.addEventListener("click", () => actionOnFolderOrFile(experienceFolder, "minimized"));
    // minBiographyBtn.addEventListener("click", () => actionOnFolderOrFile(biographyFile, "minimized"));
    // minToolsBtn.addEventListener("click", () => actionOnFolderOrFile(toolsFolder, "minimized"));


    document.addEventListener("click", closeOptionsMenu);
    document.addEventListener("click", closeLanguageOptions);
})

function toggleLogin(timeout) {
    loginForm.classList.toggle("pointer-events-none");
    loginForm.classList.toggle("opacity-100");
    loginForm.classList.toggle("opacity-0");
    loginSpinner.classList.toggle("opacity-100");

    if (timeout) {
        setTimeout(() => {
            login.classList.toggle("hiddenplus");
            desktopWrapper.classList.toggle("hiddenplus")
        }, 3000)
    } else {
        login.classList.toggle("hiddenplus");
        desktopWrapper.classList.toggle("hiddenplus");
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