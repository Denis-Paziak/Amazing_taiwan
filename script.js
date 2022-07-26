// slider
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.slider-but-next',
        prevEl: '.slider-but-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        modifierClass: 'gap-',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1300: {
            slidesPerView: 4,
        }
    }
});

// AOS 
AOS.init({
    duration: 1000
});

// menu
let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav");
let navEl = nav.querySelectorAll("a");
let scrollSection = document.querySelector(".scroled");

burger.addEventListener("click", () => {
    burger.classList.toggle("burger-active");
    nav.classList.toggle("nav-active");
});

navEl.forEach(element => {
    element.addEventListener("click", (e) => {
        e.preventDefault();

        const blockID = e.target.getAttribute('href');

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        burger.classList.toggle("burger-active");
        nav.classList.toggle("nav-active");
        activeNavEl(e.target);
    });
});