const menuWrap = document.querySelector(".menu-lines");
const menuBox = document.querySelector(".ul-wrap");
const menuCross = document.querySelector(".lines-wrap")

menuWrap.addEventListener("click", () => {
    menuBox.classList.toggle("ul-wrap-active");
    menuCross.classList.toggle("lines-wrap-active")

})