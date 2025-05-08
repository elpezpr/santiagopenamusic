// Scroll Navbar
let lastScrollY = window.scrollY;
const navbar = document.querySelector("nav");
let isHidden = false;
let delay = 150;

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    if (!isHidden) {
      navbar.style.transform = "translateY(-100%)";
      isHidden = true;
    }
  } else {
    if (isHidden) {
      setTimeout(() => {
        navbar.style.transform = "translateY(0)";
        isHidden = false;
      }, delay);
    }
  }
  lastScrollY = window.scrollY;
});

// Menu Toggle
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Gallery Lightbox (Photoswipe)
import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe@5/dist/photoswipe-lightbox.esm.min.js';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery',
  children: 'a',
  pswpModule: () => import('https://unpkg.com/photoswipe@5/dist/photoswipe.esm.min.js')
});
lightbox.init();
