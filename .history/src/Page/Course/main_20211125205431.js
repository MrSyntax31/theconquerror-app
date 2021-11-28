let openBtn = document.querySelector(".openSideNav");
openBtn.addEventListener("click", () => {
showNav();
});
let closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", () => {
hideNav();
});
function showNav() {
document.querySelector(".sideNav").style.width = "300px";
document.querySelector('.main-content').style.marginLeft = "300px";
}
function hideNav() {
document.querySelector(".sideNav").style.width = "0";
document.querySelector('.main-content').style.marginLeft = "0px";
}
