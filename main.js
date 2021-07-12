// get DOM elements
let ul = document.querySelector('ul');
let hamMenu = document.querySelector('.ham-menu');
let hamMenuLayers = document.querySelectorAll('.ham-layer');
let hamMenuCircles = document.querySelectorAll('.ham-circle');
let nav = document.querySelector('.nav');
let links = document.querySelectorAll('.nav-links');

// event listeners
hamMenu.addEventListener('click', menuToggler);
links.forEach( link => {
    link.addEventListener('click', menuToggler);
})

// menu toggler
function menuToggler(){
    hamMenuLayers.forEach(elem => {
        elem.classList.toggle('active');
    });
    hamMenuCircles.forEach(elem => {
        elem.classList.toggle('active');
    });
    nav.classList.toggle('nav-active')
    ul.classList.toggle('active');
}

