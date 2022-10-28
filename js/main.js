const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible")
})


const button = document.querySelector("#up");
button.addEventListener("click", () => {
    if (window.scrollY) {
        window.scroll(0, 0);
      }
});


