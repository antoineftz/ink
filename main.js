
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Declare variables
const colorpicker = document.querySelector('input[type="color"]');
const clear = document.querySelector('.clear');
const sizepicker = document.querySelector('input[type="range"]');
const erasebutt = document.querySelector('.erase');

// Store mouse coordinates, and whether the button is pressed
let curX, curY;
let pressed = false;

// Update mouse pointer coordinates using MouseEvent
// Learned about and added offset to make sure that the coordinates are relative to the canvas not the document

document.addEventListener('mousemove', e => {
    curX = e.pageX - canvas.offsetLeft;
    curY = e.pageY - canvas.offsetTop;
});

canvas.addEventListener('mousedown', () => pressed = true);
canvas.addEventListener('mouseup', () => pressed = false);

// Animate using requestAnimationFrame
function draw() {
    if (pressed) {
        ctx.fillStyle = colorpicker.value;
        ctx.beginPath();
        ctx.arc(curX, curY, sizepicker.value, 0, 2 * Math.PI);
        ctx.fill();
    }
    requestAnimationFrame(draw);
}

draw();

// Clear the canvas for a new drawing session
clear.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

//Eraser function
function eraser() {
    colorpicker.value = "#FFFFFF";
}
erasebutt.addEventListener("click", eraser);
