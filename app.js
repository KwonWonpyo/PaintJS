const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const brush = document.getElementById("jsBrush");
const fill = document.getElementById("jsFill");
const erase = document.getElementById("jsErase");
const savePng = document.getElementById("jsSavePNG");
const saveJpg = document.getElementById("jsSaveJPG");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

// 모드 설정 - 첫 로딩 시 brush
const MODE_BUTTON = [brush, fill, erase];
let mode = brush;
let painting = false;

function startPainting() {
    painting = true;
}
function stopPainting() {
    painting = false;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(mode === brush){
        if(!painting) {
            ctx.beginPath();
            ctx.moveTo(x, y);
        }
        else {
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    }
}

function handleModeChange(event) {
    mode = event.target;
    
    for(i = 0 ; i < 3 ; i++){
        var button = MODE_BUTTON[i];
        console.log(button);
        if(button === mode){
            button.style.backgroundColor = "#3e98ff";
        }
        else {
            button.style.backgroundColor = "white";
        }
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}


function handleCanvasClick() {
    if (mode === MODE_BUTTON[1]) {
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

function handleCM(event) {
    event.preventDefault();
}

function handleSaveClick(event) {
    var image;
    if(event.target === savePng){
        image = canvas.toDataURL();
    }
    else if(event.target === saveJpg){
        image = canvas.toDataURL("image/jpeg");
    }
    const link = document.createElement("a");
    link.href = image;
    link.download = "MyPaint";
    link.click();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM); //우클릭
}

Array.from(colors).forEach(color =>
    color.addEventListener("click", handleColorClick)
);

MODE_BUTTON.forEach(mode => mode.addEventListener("click", handleModeChange));

range.addEventListener("input", handleRangeChange);
savePng.addEventListener("click", handleSaveClick);
saveJpg.addEventListener("click", handleSaveClick);