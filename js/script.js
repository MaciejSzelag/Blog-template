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
// smoth scrolling

// document.addEventListener('DOMContentLoaded', function () {
//     let isScrolling = false;
//     let scrollSpeed = 0;

//     // Attach the wheel event listener to the body
//     document.body.addEventListener('wheel', handleWheel, { passive: false });

//     function handleWheel(event) {
//         // event.preventDefault(); // You can comment out this line to allow default wheel behavior

//         // Adjust the scrolling speed according to your preference
//         const sensitivity = 2; // Adjust this value to control the scrolling speed
//         const delta = event.deltaY || event.detail || -event.wheelDelta;
//         scrollSpeed = delta * sensitivity;

//         // Set a flag to avoid overlapping scroll events
//         if (!isScrolling) {
//             isScrolling = true;
//             requestAnimationFrame(decelerate);
//         }
//     }

//     function decelerate() {
//         // Gradually decrease the scroll speed (deceleration)
//         scrollSpeed *= 0.95;

//         // Calculate the new scroll position
//         const newScrollTop = window.scrollY + scrollSpeed;

//         // Smoothly scroll to the new position with an ease-out timing function
//         window.scrollTo({
//             top: newScrollTop,
//             behavior: 'smooth' // Use 'smooth' for ease-out timing function
//         });

//         // Continue decelerating if the scroll speed is significant
//         if (Math.abs(scrollSpeed) > 0.1) {
//             requestAnimationFrame(decelerate);
//         } else {
//             isScrolling = false;
//         }
//     }
// });