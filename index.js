// get hamburger menu btn
let ham = document.querySelector('.ham');
// get hamburger menu bars
let one = document.querySelector('#ham-bar-one');
let two = document.querySelector('#ham-bar-two');
let three = document.querySelector('#ham-bar-three');
// get navigation
let nav = document.querySelector('.nav-linkss');
//get navigation links
let link = document.querySelectorAll('.navigationLinks');
// get svg container
// let svgContainer = document.querySelector('svg');


// event listeners
ham.addEventListener('click', menuToggle);
link.forEach(li => {
    li.addEventListener('click', menuToggle);
});

// navigation toggle function
function menuToggle(){
    console.log('ham1 clicked!');
    nav.classList.toggle('active');
    one.classList.toggle('ham-bar-one-active');
    two.classList.toggle('ham-bar-two-active');
    three.classList.toggle('ham-bar-three-active');
}