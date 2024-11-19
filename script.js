console.log("Script loaded");


const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // toggle mobile menu visibility 
    document.body.classList.toggle("show-mobile-menu");
});


menuCloseButton.addEventListener("click", () => menuOpenButton.
click());

// initialise swiper

document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.slider-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });
});
