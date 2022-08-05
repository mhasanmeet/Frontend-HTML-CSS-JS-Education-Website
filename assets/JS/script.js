'use strict';

//Get Navbar classes
const navbarNav = document.querySelector(".navbar-nav");
const navtoggleBtn = document.querySelector(".nav-toggle-btn");

//Nav Toggle Functionality
navtoggleBtn.addEventListener("click", function() {

    navbarNav.classList.toggle('active');
    this.classList.toggle('active');
})

