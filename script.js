window.addEventListener('load', () => {

    const preloader = document.querySelector('.preloader');

    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.pointerEvents = 'none';

        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1000);

    }, 2500);
});

// MOBILE MENU
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// SCROLL ANIMATIONS
function revealSections() {

    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealSections);
revealSections();

// NAVBAR BACKGROUND
window.addEventListener('scroll', () => {

    const header = document.querySelector('header');

    if (window.scrollY > 100) {
        header.style.background = 'rgba(0,0,0,0.85)';
    } else {
        header.style.background = 'rgba(0,0,0,0.4)';
    }
});

// CONTACT FORM
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    alert('Richiesta inviata con successo!');

    form.reset();
});