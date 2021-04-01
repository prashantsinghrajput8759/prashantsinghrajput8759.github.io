//nav bar javascript
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});

function menutoggle(){

    var toggle=document.querySelector(".toggle");
    var menu=document.querySelector(".menu");
    toggle.classList.toggle("active");
    menu.classList.toggle("active");
}