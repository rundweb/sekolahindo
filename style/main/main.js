var toggleBtn = document.querySelector('.toggle-menu');
var menuOpen = document.querySelector('.nav-list');

function openMenu() {
    document.querySelector(".nav-list").classList.toggle("active");
    document.querySelector(".home-img1").classList.toggle("hiddenimg");
}

function rightImg() {
    document.querySelector(".img1").classList.toggle("imgright");
}