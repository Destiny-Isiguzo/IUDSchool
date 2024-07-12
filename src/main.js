/**
 * Handle nav menu toggle
*/
const navMenuToggleBtn = document.querySelector('.nav-menu-toggle-btn');
const navMenuToggleBtnIcon = document.querySelector('.nav-menu-toggle-btn-icon');
const navMenu = document.querySelector('.nav-menu');
const navMenuLink = document.querySelector('.nav-menu-link');
const navMenuOverlay = document.querySelector('.nav-menu-overlay');

navMenuToggleBtn.addEventListener('click', () => {
   navMenu.classList.toggle('show-nav-menu');

   if (navMenu.classList.contains('show-nav-menu')) {
      navMenuToggleBtnIcon.classList.add('fa-xmark');
      navMenuToggleBtnIcon.classList.remove('fa-bars');
      navMenuOverlay.classList.toggle('nav-menu-overlay-active');
   } else {
      navMenuToggleBtnIcon.classList.remove('fa-xmark');
      navMenuToggleBtnIcon.classList.add('fa-bars');
   }
})

navMenu.addEventListener('click', (e) => {
   if (e.target.classList.contains('nav-menu-link')) {
      navMenu.classList.remove('show-nav-menu');
      navMenuToggleBtnIcon.classList.remove('fa-xmark');
      navMenuToggleBtnIcon.classList.add('fa-bars');
      navMenuOverlay.classList.remove('nav-menu-overlay-active');
   }
});


const dropdownLinks = document.querySelectorAll('.dropdown-link');
const dropdownIcon = document.querySelector('.dropdown-icon');

// Add event listener to each dropdown link
dropdownLinks.forEach((link) => {
   link.addEventListener('click', (e) => {
      // Prevent default link behavior
      e.preventDefault();

      // Get the dropdown menu associated with the link
      const dropdownMenu = link.nextElementSibling;

      // Get the dropdown icon associated with the link
      const dropdownIcon = link.querySelector('.dropdown-icon');

      // Toggle the dropdown menu
      dropdownMenu.classList.toggle('dropdown-active');
      dropdownIcon.classList.toggle('dropdown-active');
   });
});


/**
 * Dynamically add images after skeleton animations
*/
const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach((container) => {
   const img = container.querySelector('img');
   const imagePath = `assets/images/${img.dataset.image}`; // assuming data-image attribute is set on the img tag
   const image = new Image();

   image.onload = () => {
      img.src = imagePath;
      img.classList.remove('skeleton');
      container.style.backgroundImage = `url(${imagePath})`;
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