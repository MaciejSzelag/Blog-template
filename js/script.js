const menuWrap = document.querySelector(".menu-lines");
const menuBox = document.querySelector(".ul-wrap");
const menuCross = document.querySelector(".lines-wrap");
const navBtns = document.querySelectorAll(".nav-btn");
let active = true;
// const socialMediaBtns = document.querySelectorAll(".nav-btn");

//showing menu and changing burger menu to arrow up 
menuWrap.addEventListener("click", () => {
    if (active) {
        menuBox.classList.add("ul-wrap-active");
        menuCross.classList.add("lines-wrap-active");
        active = !active;
    } else if (!active) {
        menuBox.classList.remove("ul-wrap-active");
        menuCross.classList.remove("lines-wrap-active");
        active = !active;
    }
})

// when it's active remove all active classes
if (active) {
    navBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            menuBox.classList.remove("ul-wrap-active");
            menuCross.classList.remove("lines-wrap-active");
            active = !active;
        })
    })
}