const $hamburgerIcon = document.querySelector(".hamburger-icon");
const $mobileMenu = document.querySelector(".mobile-nav");
const $overlay = document.querySelector(".overlay");
const $closeIcon = document.querySelector(".close-icon");

$hamburgerIcon.addEventListener("click", e => {
    if (e) {
        $mobileMenu.classList.remove("hide");
        $overlay.classList.remove("hide");
        $hamburgerIcon.classList.add("hide");
        $closeIcon.classList.remove("hide");
    }
})

$closeIcon.addEventListener("click", e => {
    if(e) {
        $mobileMenu.classList.add("hide");
        $overlay.classList.add("hide");
        $hamburgerIcon.classList.remove("hide");
        $closeIcon.classList.add("hide");       
    }
})