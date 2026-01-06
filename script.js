let display = document.getElementById("display")
let add = document.getElementById("add")
let minus = document.getElementById("minus")
let reset = document.getElementById("reset")

add.addEventListener ("click", () => {
    display.value = Number(display.value) + 1;
})

minus.addEventListener ("click", () => {
    if (Number(display.value) > 0) {
        display.value = Number(display.value) - 1;
    }
})

reset.addEventListener ("click", () => {
    display.value = 0;
})

// function updateDisplay(value) {
//     display.value = value;
// }

// add.addEventListener("click", () => {
//     updateDisplay(Number(display.value) + 1);
// });

// minus.addEventListener("click", () => {
//     updateDisplay(Number(display.value) - 1);
// });