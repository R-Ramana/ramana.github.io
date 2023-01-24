'use strict';

/*==================== TOGGLE DARK / LIGHT THEME ====================*/
var currentTheme = localStorage.getItem('selected-theme');
var checkbox = document.getElementById('dark-mode-toggle')
var quoteIcon = document.getElementById('quote-icon')

// Get User Preference
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode')
        // quoteIcon.setAttribute("src", "./assets/images/icon-quote.svg")
    checkbox.checked = false
    checkbox.setAttribute("aria-label", "Check to switch to light theme")
} else {
    document.body.classList.remove('dark-mode')
        // quoteIcon.setAttribute("src", "./assets/images/icon-quote-dark.PNG")
    checkbox.checked = true
    checkbox.setAttribute("aria-label", "Uncheck to switch to dark theme")

}

// Store User Preference in Local Storage
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        document.body.classList.remove('dark-mode')
            // quoteIcon.setAttribute("src", "./assets/images/icon-quote-dark.png")
        console.log(quoteIcon.src);
        localStorage.setItem('selected-theme', 'light')
        checkbox.setAttribute("aria-label", "Uncheck to switch to dark theme")
    } else {
        document.body.classList.add('dark-mode')
            // quoteIcon.setAttribute("src", "./assets/images/icon-quote.svg")
        localStorage.setItem('selected-theme', 'dark')
        checkbox.setAttribute("aria-label", "Check to switch to light theme")
    }
});




// element toggle function
const elementToggleFunc = function(elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function() { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const projectItem = document.querySelectorAll("[data-project-item]");
const modalContainerProject = document.querySelector("[data-modal-container-project]");
const modalCloseBtnProject = document.querySelector("[data-modal-close-btn-project]");
const overlayProject = document.querySelector("[data-overlay-project]");

// modal variable
const modalTitle = document.querySelector("[data-modal-title]");
const modalSubTitle = document.querySelector("[data-modal-subtitle]");
const modalText = document.querySelector("[data-modal-text]");
const modalDate = document.querySelector("[data-modal-date]");

const projectModalTitle = document.querySelector("[data-modal-project-title]");
const projectModalSubTitle = document.querySelector("[data-modal-project-category]");
const projectModalText = document.querySelector("[data-modal-project-text]");
const projectModalImg = document.querySelector("[data-modal-project-img]");

// modal toggle function
const modalFunc = function() {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");

    modalContainerProject.classList.toggle("active");
    overlayProject.classList.toggle("active");
}

for (let i = 0; i < testimonialsItem.length; i++) {

    testimonialsItem[i].addEventListener("click", function() {

        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalSubTitle.innerHTML = this.querySelector("[data-testimonials-subtitle]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
        modalDate.innerHTML = this.querySelector("[data-testimonials-date]").innerHTML;
        modalFunc();

    });

}

for (let i = 0; i < projectItem.length; i++) {

    projectItem[i].addEventListener("click", function() {

        projectModalTitle.innerHTML = this.querySelector("[data-project-title]").innerHTML;
        projectModalSubTitle.innerHTML = this.querySelector("[data-project-category]").innerHTML;
        projectModalText.innerHTML = this.querySelector("[data-project-text]").innerHTML;
        projectModalImg.src = this.querySelector("[data-project-img]").src;
        modalFunc();

    });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", modalFunc);
overlay.addEventListener("click", modalFunc);

modalCloseBtnProject.addEventListener("click", modalFunc);
overlayProject.addEventListener("click", modalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function() { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function() {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);

    });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function(selectedValue) {

    for (let i = 0; i < filterItems.length; i++) {

        if (selectedValue === "all") {
            filterItems[i].classList.add("active");
        } else if (filterItems[i].dataset.category.includes(selectedValue)) {
            filterItems[i].classList.add("active");
        } else {
            filterItems[i].classList.remove("active");
        }

    }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

    filterBtn[i].addEventListener("click", function() {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;

    });

}



// contact form variables
// const form = document.querySelector("[data-form]");
// const formInputs = document.querySelectorAll("[data-form-input]");
// const formBtn = document.querySelector("[data-form-btn]");

// // add event to all form input field
// for (let i = 0; i < formInputs.length; i++) {
//     formInputs[i].addEventListener("input", function() {

//         // check form validation
//         if (form.checkValidity()) {
//             formBtn.removeAttribute("disabled");
//         } else {
//             formBtn.setAttribute("disabled", "");
//         }

//     });
// }



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
var currentPage = localStorage.getItem('current-page');

if (currentPage != null) {
    for (let i = 0; i < pages.length; i++) {
        if (pages[i].dataset.page === pages[currentPage].dataset.page) {
            pages[i].classList.add("active");
            navigationLinks[i].classList.add("active");
            window.scrollTo(0, 0);
        } else {
            pages[i].classList.remove("active");
            navigationLinks[i].classList.remove("active");
        }
    }
}

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function() {

        for (let i = 0; i < pages.length; i++) {
            if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
                pages[i].classList.add("active");
                navigationLinks[i].classList.add("active");
                window.scrollTo(0, 0);
                var currentPageNumber = i.toString()
                localStorage.setItem("current-page", currentPageNumber)
            } else {
                pages[i].classList.remove("active");
                navigationLinks[i].classList.remove("active");
            }
        }
    })
}