const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-menu");
const button = document.querySelector("#up");

/* evento para quitar o mostrar el menu  */
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible")
})



/* evento para hacer scroll al comienzo del documento  */
button.addEventListener("click", () => {
    if (window.scrollY) {
        window.scroll(0, 100);
      }
});


/* evento para mostrar el boton segun se haga scroll, si es mayor a 350 se aplica la clase, si no se remueve */

window.onscroll = function(){scrollFuntion()}
function scrollFuntion(){
    if (document.documentElement.scrollTop > 350) {
        button.classList.add('btn-show')
    }else {
        button.classList.remove('btn-show')
    }
}
