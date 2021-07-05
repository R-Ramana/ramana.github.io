/*==================== MENU SHOW Y HIDDEN ====================*/
const nav_menu = document.getElementById('nav-menu');
const nav_toggle = document.getElementById('nav-toggle');
const nav_close = document.getElementById('nav-close');
const nav_link = document.querySelectorAll('.nav-link');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (nav_toggle) {
    nav_toggle.addEventListener('click', () => {
        nav_menu.classList.add('show-menu')
    });
}

/*===== MENU HIDDEN =====*/
function remove() {
    nav_menu.classList.remove('show-menu')
}

/* Validate if constant exists */
if (nav_close) {
    nav_close.addEventListener('click', remove);
}

nav_link.forEach(n => n.addEventListener('click', remove));

/*==================== TOGGLE DARK / LIGHT THEME ====================*/
var currentTheme = localStorage.getItem('selected-theme');
var checkbox = document.getElementById('dark-mode-toggle')

// Get User Preference
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode')
    checkbox.checked = true
} else {
    document.body.classList.remove('dark-mode')
    checkbox.checked = false
}

// Store User Preference in Local Storage
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        document.body.classList.add('dark-mode')
        localStorage.setItem('selected-theme', 'dark')
    } else {
        document.body.classList.remove('dark-mode')
        localStorage.setItem('selected-theme', 'light')
    }
});

/*==================== PORTFOLIO SWIPER  ====================*/
/*  Initialize Swiper */
let swiper = new Swiper('.project-container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    mousewheel: true,
    keyboard: true,
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 150;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header');
    const limit = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // When the scroll is greater than 20 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= limit - 50) checkbox.checked ? nav.classList.remove('scroll-header-dark') : nav.classList.remove('scroll-header');
    else if (this.scrollY >= 20) checkbox.checked ? nav.classList.add('scroll-header-dark') : nav.classList.add('scroll-header');
    else checkbox.checked ? nav.classList.remove('scroll-header-dark') : nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW BACK TO TOP ====================*/
function back_to_top() {
    const to_top = document.getElementById('to-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 300) to_top.classList.add('to-top-btn');
    else to_top.classList.remove('to-top-btn')
}
window.addEventListener('scroll', back_to_top);