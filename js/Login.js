const principal = document.querySelector('.principal');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector(".btnLogin-popup");
const iconoCierre = document.querySelector(".icono-Cierre");

registerLink.addEventListener("click", ()=>{
    principal.classList.add("active");
});
loginLink.addEventListener("click", ()=>{
    principal.classList.remove("active");
});
btnPopup.addEventListener("click", ()=>{
    principal.classList.add("active-popup");
});
iconoCierre.addEventListener("click", ()=>{
    principal.classList.remove("active-popup");
});