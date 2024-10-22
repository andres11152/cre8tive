/*===== Cambio de idioma =====*/
const changeLanguage = async language => {
    const texts = await fetch(`./languages/${language}.json`).then(res => res.json());
    textsToChange.forEach(textToChange => {
        const { section, value } = textToChange.dataset;
        textToChange.innerHTML = texts[section][value];
    });
};

flagsElement.addEventListener('click', e => changeLanguage(e.target.parentElement.dataset.language));
