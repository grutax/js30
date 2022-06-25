const canvas = document.getElementById('draw');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = "#BADA55";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let increasing = true;

function draw(event) {
    if(!isDrawing) return;

    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();

    lastX = event.offsetX;
    lastY = event.offsetY;

    hue++;

    if(context.lineWidth >= 100 || context.lineWidth <= 20) {
        increasing = !increasing;
    }

    if(increasing) {
        context.lineWidth++;
    } else {
        context.lineWidth--;
    }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    lastX = event.offsetX;
    lastY = event.offsetY;
});
