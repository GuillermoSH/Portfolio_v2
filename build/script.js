const login = document.getElementById("login");
const desktop = document.getElementById("desktop");
const loginForm = document.getElementById("form");
const loginSpinner = document.getElementById("login-spinner");
const desktopWrapper = document.getElementById("desktop-wrapper");

const optionsDropdownBtn = document.getElementById("options-dropdown-btn");
const languageBtn = document.getElementById("language-btn");
const optionsDropdown = document.getElementById("options-dropdown");
const languageOptions = document.getElementById("language-options");
const folderOptions = document.getElementById("folder-options");

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
const minExperienceBtn = document.getElementById("min-experience-btn");
const minBiographyBtn = document.getElementById("min-biography-btn");
const minToolsBtn = document.getElementById("min-tools-btn");

const natProjects = document.getElementById("nat-projects");
const natTools = document.getElementById("nat-tools");
const natExperience = document.getElementById("nat-experience");
const natBiography = document.getElementById("nat-biography");

updateDateTime();
setInterval(updateDateTime, 30000);

document.addEventListener("DOMContentLoaded", function () {
    function watchActiveTemplates() {
        let templates = document.getElementsByClassName("file-explorer-template");

        Array.from(templates).forEach((template) => {
            let nat = document.getElementById("nat-" + template.id.split("-")[0]);

            if (template.classList.contains("active")) {
                nat.classList.add("active");
            } else {
                nat.classList.remove("active");
            }
        })
    }

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

    function isTabActive(element) {
        let nat = document.getElementById("nat-" + element.id.split("-")[0]);

        if (element.classList.contains('minimized')) {
            nat.classList.remove("visible");
        } else {
            nat.classList.add("visible");
        }
    }

    function toggleNatMenu(event) {
        event.preventDefault();
        folderOptions.classList.toggle("active");
        closeLanguageOptions();
        closeNatMenu();
    }

    function closeNatMenu(event) {
        if (!natProjects.contains(event.target) && !folderOptions.contains(event.target)) {
            folderOptions.classList.remove("active");
        }
    }

    function changeMaximizeBtn(element) {
        element.getElementsByClassName("maximize-btn")[0].classList.toggle("fa-regular");
        element.getElementsByClassName("maximize-btn")[0].classList.toggle("fa-square");
        element.getElementsByClassName("maximize-btn")[0].classList.toggle("fa-solid");
        element.getElementsByClassName("maximize-btn")[0].classList.toggle("fa-minimize");
    }

    function actionOnFolderOrFile(element, action) {
        switch (action) {
            case 'open':
                element.classList.add('active');
                element.classList.remove('closed', 'maximized', 'minimized');
                isTabActive(element);
                break;
            case 'close':
                element.classList.add('closed');
                element.classList.remove('active', 'maximized', 'minimized');
                break;
            case 'maximized':
                element.classList.toggle('maximized');
                element.classList.remove('minimized');
                changeMaximizeBtn(element);
                break;
            case 'minimized':
                element.classList.add('minimized');
                isTabActive(element);
                break;
            case 'toggle':
                element.classList.toggle('minimized');
                isTabActive(element);
                break;
            default:
                console.warn(`Action not recognized: ${action}`);
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

    natProjects.addEventListener("click", () => actionOnFolderOrFile(projectsFolder, "toggle"));
    natProjects.addEventListener("contextmenu", toggleNatMenu);

    document.addEventListener("click", closeOptionsMenu);
    document.addEventListener("click", closeLanguageOptions);
    document.addEventListener("click", watchActiveTemplates);
});

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

function adjustVH() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}

window.addEventListener('resize', adjustVH);
window.addEventListener('load', adjustVH);