const browserLanguage = navigator.language || navigator.userLanguage;
const currentLanguage = localStorage.getItem('preferredLanguage') || (browserLanguage.includes('es') ? 'es' : 'en');

localStorage.setItem('preferredLanguage', currentLanguage);
initI18next(currentLanguage);

function loadTranslations(lang, callback) {
    fetch(`locales/${lang}.json`)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(err => console.error(`Error loading ${lang} translations: `, err));
}

function initI18next(lang) {
    loadTranslations(lang, (translations) => {
        i18next.init({
            lng: lang,
            resources: {
                [lang]: { translation: translations }
            }
        }, updateContent);
    });
}

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.innerText = i18next.t(key);
    });
}

function changeLanguage(lang) {
    initI18next(lang);
    localStorage.setItem('preferredLanguage', lang);
}