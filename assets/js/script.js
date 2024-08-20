// This is script file for owl carousel

$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        },
    }
})

// header
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0);
}   );

const headerMenu = document.querySelector('.header__menu');
const menuBtn = document.querySelector('.menu-btn');
const headerMenuItems = headerMenu.querySelectorAll('li a');

menuBtn.addEventListener('click', () => {
    headerMenu.classList.toggle('show');
});

headerMenuItems.forEach(item => {
    item.addEventListener('click', () => {
        headerMenu.classList.remove('show');
    });
});