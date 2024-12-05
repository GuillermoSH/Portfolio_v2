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
        let folderTemplates = Array.from(document.getElementsByClassName("file-explorer-template"));
        let fileTemplates = Array.from(document.getElementsByClassName("office-file-template"));
        let templates = folderTemplates.concat(fileTemplates);

        templates.forEach((template) => {
            let nat = document.getElementById("nat-" + template.id.split("-")[0]);

            if (template.classList.contains("active")) {
                nat.classList.add("active");
            } else {
                nat.classList.remove("active");
            }
        });
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
        const nat = document.getElementById("nat-" + element.id.split("-")[0]);

        if (element.classList.contains('minimized')) {
            nat.classList.remove("visible");
        } else {
            nat.classList.add("visible");
        }
    }

    function closeAllTabsBut(element) {
        let folderTemplates = Array.from(document.getElementsByClassName("file-explorer-template"));
        let fileTemplates = Array.from(document.getElementsByClassName("office-file-template"));
        let tabs = folderTemplates.concat(fileTemplates);

        tabs.forEach((tab) => {
            if (tab != element) {
                tab.classList.remove("active");
                tab.classList.add("closed");
            }
        })
    }

    function changeMaximizeBtn(element) {
        const maxBtn = element.getElementsByClassName("maximize-btn")[0];
        if (maxBtn.classList.contains("fa-square")) {
            maxBtn.classList.remove("fa-regular");
            maxBtn.classList.remove("fa-square");
            maxBtn.classList.add("fa-solid");
            maxBtn.classList.add("fa-minimize");
        } else {
            maxBtn.classList.add("fa-regular");
            maxBtn.classList.add("fa-square");
            maxBtn.classList.remove("fa-solid");
            maxBtn.classList.remove("fa-minimize");
        }
    }

    function actionOnFolderOrFile(element, action) {
        switch (action) {
            case 'open':
                element.classList.add('active');
                element.classList.remove('closed', 'maximized', 'minimized');
                closeAllTabsBut(element);
                isTabActive(element);
                break;
            case 'close':
                element.classList.add('closed');
                element.classList.remove('active', 'maximized', 'minimized');
                changeMaximizeBtn(element);
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
    closeBiographyBtn.addEventListener("click", () => actionOnFolderOrFile(biographyFile, "close"));

    maxProjectsBtn.addEventListener("click", () => actionOnFolderOrFile(projectsFolder, "maximized"));
    // maxExperienceBtn.addEventListener("click", () => actionOnFolderOrFile(experienceFolder, "maximized"));
    maxBiographyBtn.addEventListener("click", () => actionOnFolderOrFile(biographyFile, "maximized"));
    // maxToolsBtn.addEventListener("click", () => actionOnFolderOrFile(toolsFolder, "maximized"));

    minProjectsBtn.addEventListener("click", () => actionOnFolderOrFile(projectsFolder, "minimized"));
    // minExperienceBtn.addEventListener("click", () => actionOnFolderOrFile(experienceFolder, "minimized"));
    minBiographyBtn.addEventListener("click", () => actionOnFolderOrFile(biographyFile, "minimized"));
    // minToolsBtn.addEventListener("click", () => actionOnFolderOrFile(toolsFolder, "minimized"));

    natProjects.addEventListener("click", () => actionOnFolderOrFile(projectsFolder, "toggle"));
    natTools.addEventListener("click", () => actionOnFolderOrFile(toolsFolder, "toggle"));
    natExperience.addEventListener("click", () => actionOnFolderOrFile(experienceFolder, "toggle"));
    natBiography.addEventListener("click", () => actionOnFolderOrFile(biographyFile, "toggle"));

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