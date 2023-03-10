
let canvas = document.getElementById("gameCanvas");

let canvasWidth = document.getElementById("canvasWidth").valueAsNumber;
let canvasHeight = document.getElementById("canvasHeight").valueAsNumber;
let sqsize = 50;
canvas.width = canvasWidth * sqsize;
canvas.height = canvasHeight * sqsize;

let context = canvas.getContext("2d");

let heroX = 1;
let heroY = 2;
let img = new Image();
img.src = "MCUMysterio.webp";

let vilianX = Math.floor(Math.random() * canvasWidth);
let vilianY = Math.floor(Math.random() * canvasHeight);
console.log(vilianX + vilianY);
let itm = new Image();
itm.src = "spiderman.png";

function drawMapAndHero() {
    context.fillStyle = "#99FF66";
    context.fillRect(0, 0, canvasWidth * sqsize, canvasHeight * sqsize);
    context.drawImage(itm, heroX * sqsize, heroY * sqsize, sqsize, sqsize);
    context.drawImage(img, vilianX * sqsize, vilianY * sqsize, sqsize, sqsize);
    for (i = 0; i < canvasWidth * sqsize; i++) {
        for ( j = 0; j < canvasHeight * sqsize; j++) {
            context.strokeRect(i * sqsize, j * sqsize, sqsize, sqsize);
        }
    }
}
drawMapAndHero();

canvas.onclick = function(e) {
    let mousePosX = e.X - e.originalTarget.offsetLeft;
    let mousePosY = e.Y - e.originalTarget.offsetTop;
    heroX = Math.floor(mousePosX / sqsize);
    heroY = Math.floor(mousePosY / sqsize);
}

function moveUp() {
    heroY--
    if (heroX === vilianX && heroY === vilianY) {
        vilianX = -1;
        vilianY = -1;
    }
    drawMapAndHero();
}

function moveDown() {
    heroY++
    if (heroX === vilianX && heroY === vilianY) {
        vilianX = -1;
        vilianY = -1;
    }
    drawMapAndHero();a
}

function moveLeft() {
    heroX--
    if (heroX === vilianX && heroY === vilianY) {
        vilianX = -1;
        vilianY = -1;
    }
    drawMapAndHero();
}

function moveRight() {
    heroX++
    if (heroX === vilianX && heroY === vilianY) {
        vilianX = -1;
        vilianY = -1;
    }
    drawMapAndHero();
}


document.onkeypress = function(e) {
    let key = e.key;
    switch (key) {
        case "w":
			
            moveUp();
            break;
			
        case "s":
            moveDown();
            break;
			
        case "a":
            moveLeft();
            break;
			
        case "d":
            moveRight();
            break;
    }
}