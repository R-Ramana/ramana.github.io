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

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]');
const tab_content = document.querySelectorAll('[data-content]');
const tab_indicator = document.getElementById('experience-indicator');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        console.log(tab.dataset.target)

        if (tab.dataset.target === '#education') {
            tab_indicator.classList.remove('indicator-active')
        } else if (tab.dataset.target === '#work') {
            tab_indicator.classList.add('indicator-active')
        }

        tab_content.forEach(tab_item => {
            tab_item.classList.remove('experience-active')
        })
        target.classList.add('experience-active')

        tabs.forEach(tab => {
            tab.classList.remove('experience-active')
        })
        tab.classList.add('experience-active')
    })
})

/*==================== ACCORDION SKILLS ====================*/
const skill_content = document.getElementsByClassName('skill-content');
const skill_header = document.querySelectorAll('.skill-header');

function toggle_skill() {
    var skill_set = this.parentNode.className;

    for (i = 0; i < skill_content.length; i++) {
        skill_content[i].className = 'skill-content list-close';
    }
    if (skill_set === 'skill-content list-close') {
        this.parentNode.className = 'skill-content list-open';
    }
}

skill_header.forEach((el) => {
    el.addEventListener('click', toggle_skill);
})

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

/*==================== ADD BORDER RADIUS & BOX SHADOW TO NAV ====================*/
function scrollHeader() {
    const nav = document.getElementById('header');
    const limit = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // When the scroll is greater than 20 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= limit - 50) nav.classList.remove('scroll-header');
    else if (this.scrollY >= 20) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
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

/*==================== TOGGLE DARK / LIGHT THEME ====================*/
const checkbox = document.getElementById('dark-mode-toggle');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode')
    localStorage.setItem('selected-theme', getCurrentTheme())
});