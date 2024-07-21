/**
 * Handle nav menu toggle & add active class
*/
const showMenu = (toggleClass, navClass) => {
   const toggle = document.querySelector(`.${toggleClass}`);
   const nav = document.querySelector(`.${navClass}`);

   toggle.addEventListener('click', () => {
      // add show-menu class to nav menu
      nav.classList.toggle('show-menu');

      // add icon to show & hide menu icon
      toggle.classList.toggle('show-menu-icon');
   })
};

showMenu('nav-menu-toggle-btn', 'nav');


/**
 * Add active class and remove menu onclick
*/
const navLinks = document.querySelectorAll('.nav-link');
const nav = document.querySelector('.nav');
const navMenuToggleBtn = document.querySelector('.nav-menu-toggle-btn')

function linkAction() {
   navLinks.forEach((link) => link.classList.remove('nav-link-active'));
   this.classList.add('nav-link-active');
   nav.classList.toggle('show-menu');
   navMenuToggleBtn.classList.toggle('show-menu-icon');
}

navLinks.forEach((link) => link.addEventListener('click', linkAction));



/**
 * Handle dropdown menu
*/
const dropDownLinks = document.querySelectorAll('.dropdown-link');
const dropDownMenus = document.querySelectorAll('.dropdown-menu');
const dropDownIcons = document.querySelectorAll('.dropdown-icon');

dropDownLinks.forEach((link, index) => {
   link.addEventListener('click', () => {
      dropDownMenus[index].classList.toggle('dropdown-menu-active');
      dropDownIcons[index].classList.toggle('dropdown-icon-active');
   });
});



/**
 * Dynamically add images after skeleton animations
*/
const imageWrappers = document.querySelectorAll('.hero-image-wrapper');

imageWrappers.forEach((wrapper) => {
   const img = wrapper.querySelector('img');
   const imagePath = `assets/images/${img.dataset.image}`; // assuming data-image attribute is set on the img tag
   const image = new Image();

   image.onload = () => {
      img.src = imagePath;
      img.classList.remove('skeleton');
      // container.style.backgroundImage = `url(${imagePath})`;
   };

   image.src = imagePath;
});


/**
 * Add fade-out class to an element
*/
function addFadeOutClass(element) {
   element.classList.add('fade-out');
}


/**
 * Show header and main elements after load
*/
function showHeaderAndMain() {
   header.style.opacity = '1';
   main.style.opacity = '1';
}


/**
 * Initialize
*/
const preloader = document.querySelector('.preloader');
const header = document.querySelector('header');
const main = document.querySelector('main');

window.addEventListener('load', () => {
   addFadeOutClass(preloader);
   showHeaderAndMain();
});



/**
 * Hero carousel
*/
// const heroImageContainer = document.querySelector('.hero-image-container');
// const heroImageInner = document.querySelector('.hero-image-inner');
// const heroImageWrapper = document.querySelectorAll('.hero-image-wrapper');
// const paginationItems = document.querySelectorAll('.hero-image-pagination-item');

// let currentSlide = 0;

// // Set the auto-play interval
// const autoPlayInterval = setInterval(() => {
//   currentSlide = (currentSlide + 1) % heroImageWrapper.length;
//   updateCarousel();
// }, 7000);

// // Update the carousel function
// function updateCarousel() {
//   // Update the carousel inner wrapper transform
//   heroImageInner.style.transform = `translateX(${currentSlide * -100}%)`;

//   // Update the pagination active state
//    paginationItems.forEach((item, index) => {
//       item.classList.toggle('hero-image-pagination-item-active', index === currentSlide);
//    });
// }

// // Initialize the carousel
// updateCarousel();