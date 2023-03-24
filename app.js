// select element
// addEventListener()
// what event, what to do

// const btn = document.querySelector('.btn')
// const heading = document.querySelector(`h2`)

// //easiest way of accesing with anonymous arrow function and
// //with variable declaration outside of the function
// // btn.addEventListener('click', () => {
// //     heading.classList.add("red")
// // })

// // callback function outside of eventlistener with logic
// function changeColors () {
//     let hasClass = heading.classList.contains("red")
//     if (hasClass) {
//         heading.classList.remove("red")
//     } else {
//         heading.classList.add("red")
//     }
// };
// //do NOT invoke "()" the function :)
// btn.addEventListener("click", changeColors);


// mouse events
// click - fires after full action occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved into an element
// mouseleave - moved out of an element

const btn = document.querySelector('.btn')
const heading = document.querySelector(`h2`)

btn.addEventListener("click", () => {
    console.log("you clicked me");
});

btn.addEventListener("mousedown", () => {
    console.log("down");
});

btn.addEventListener("mouseup", () => {
    console.log("up");
});

heading.addEventListener("mouseenter", () => {
    heading.classList.add("blue");
});

heading.addEventListener("mouseleave", () => {
    heading.classList.remove("blue");
});
