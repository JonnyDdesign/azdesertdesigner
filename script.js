const hamburger = document.querySelector(".hamburger");
const navsub = document.querySelector(".nav");
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("change")
    navsub.classList.toggle("nav-change")
});