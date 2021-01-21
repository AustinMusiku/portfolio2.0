// get DOM elements
let ham = document.querySelector('.ham');
let ul = document.querySelector('ul');
let one = document.querySelector('.ham-bar-one');
let two = document.querySelector('.ham-bar-two');
let nav = document.querySelector('.nav');
let links = document.querySelectorAll('.nav-links');

// event listeners
ham.addEventListener('click', menuToggler);
links.forEach( link => {
    link.addEventListener('click', menuToggler);
})

// menu toggler
function menuToggler(){
    ul.classList.toggle('active');
    one.classList.toggle('one');
    two.classList.toggle('two');
    nav.classList.toggle('nav-active')
}