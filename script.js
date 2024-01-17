// script.js

function showSection(sectionName) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const selectedSection = document.querySelector('.' + sectionName);
    selectedSection.style.display = 'block';
}

function hoverProject(element) {
    element.style.transform = 'scale(1.05)';
}

function unhoverProject(element) {
    element.style.transform = 'scale(1)';
}

function moon() {
    window.location.href = "https://github.com/AtharvaaPlayz/MoonGravityIndev";
}

function pav() {
    window.location.href = "https://github.com/AtharvaaPlayz/-Code-For-Calculating-P-A-V";
}