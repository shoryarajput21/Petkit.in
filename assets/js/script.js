'use strict';

gsap.from(".header", {
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "power2.out"
});

// Animate the hero title, text, and button
gsap.from(".hero-title", {
  duration: 1.2,
  y: 50,
  opacity: 0,
  ease: "power2.out",
  delay: 0.5
});

gsap.from(".hero-text", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power2.out",
  delay: 0.8
});

gsap.from(".btn", {
  duration: 1,
  scale: 0.8,
  opacity: 0,
  ease: "back.out(1.7)",
  delay: 1
});

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);


const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);