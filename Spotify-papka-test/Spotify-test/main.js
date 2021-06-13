let burger = document.querySelector(".header-burger");
let nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
    nav.classList.toggle('active')
});