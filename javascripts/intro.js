// GAME AREA

/*
fillRect(x, y, width, height); //Draws a filled rectangle
strokeRect(x, y, width, height); //Draws a rectangular outline
clearRect(x, y, width, height); //Clears the specified rectangular area, making it fully transparent
*/

/*
beginPath(); --> initialize canvas
closePath();
stroke();
fill();
*/ 

// 2 components


function startGame() {
    // CLEAR game area
    // select new area
    // DRAW new area
    // set the SPRITE'S POSITION
    // start TIMER
}



const btnStart = document.getElementById("start-game");
const timer = document.getElementById("timer")


btnStart.addEventListener('click', () => {
    // GAME STOPPED
    if (btnStart.classList.contains("stop")) {

        btnStart.classList.remove('stop');
        btnStart.classList.add("start");
        btnStart.textContent = "START";
        console.log("btnStart " + btnStart.classList);

    }
    
    // GAME ONGOING
    else if (btnStart.classList.contains("start")) {

        btnStart.classList.remove("start");
        btnStart.classList.add("stop");
        btnStart.textContent = "STOP"

        const player = new Player (150, 550, 50, 50, "orange");
        player.draw();
        console.log("btnStart " + btnStart.classList);

        startTimer();
    }
})

const walls1 = [
    {x: 0, y: 0, w: 100, h: 800, bg: "blue"},
    {x: 300, y: 300, w: 300, h: 100, bg: "blue"},
    {x: 0, y: 600, w: 300, h: 300, bg: "blue"},
    {x: 600, y: 100, w: 200, h: 100, bg: "blue"},
    {x: 750, y: 0, w: 50, h: 800, bg: "blue"},
    {x: 0, y: 750, w: 800, h: 50, bg: "blue"},
];

// const player = [{x: 150, y: 550, w: 50, h: 50, bg: "orange"}]

function draw(components) {
    const ctx = document.getElementById("canvas").getContext('2d')
    for(let i = 0; i < components.length; i++) {
        let component = components[i];
        ctx.fillStyle = component.bg;
        ctx.fillRect(component.x, component.y, component.w, component.h);
    }
}

draw(walls1)


class Element {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}


class Wall extends Element {
}


class Player extends Element {
    constructor(x, y, w, h, bgc) {
        super(x, y, w, h);
        this.bgc = bgc;
    }

    draw() {
        const ctx = document.getElementById("canvas").getContext('2d')
        ctx.fillStyle = this.bgc;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    moveLeft() {
        this.x += 50
    }
}


document.onkeydown = function(e) {
    if (e.key === "ArrowRight") {
      player.x += 10;
      console.log("right ", player)
    }
    if (e.key === "ArrowLeft") {
      player.x -= 10;
      console.log("left ", player)
    }
};



// TIMER



function startTimer() {
    const intervalId = setInterval(startTimer, () => {
        let counter = 60;
        counter -= 1;
        timer.textContent = counter;
        console.log(timer);
    }, 1000)

    // if (counter === 0) {
    //     clearInterval(intervalId);
    //     clearTimer();
    // }
    // if (btnStart.classList.contains("stop")) {
    //     clearInterval(intervalId);
    //     counter = 60
    //     timer.textContent = counter
    // }
}


 



// document.addEventListener("keydown", function (event) {
//     switch (event.key) {
//         case "ArrowDown": 
//         player.y += 100
//         console.log("player " + this.y)
//         break;
//         case "ArrowUp": 
//         player.y -= 100;
//         console.log("player " + this.y)
//         break;
//         case "ArrowLeft": 
//         player.x += 100;
//         console.log("player " + this.x)
//         break;
//         case "ArrowRight":
//         player.x -= 100;
//         console.log("player " + this.x)
//         break;
//     }
// });


// document.onkeydown = () => {
// if (e.keyCode === '38') { // UP
//     player.y -= 10;
//     console.log("arrow up works")
// }
// else if (e.keyCode === '40') { // DOWN
//     player.y += 10
// }
// else if (e.keyCode === '37') { // RIGHT
//     player.x += 10
// }
// else if (e.keyCode === '39') { // LEFT
//     player.x -= 10
// }
// }


// const collision = function(r1, r2) {
//     if (r1.x + r1.w > r2.x && // r1 is colliding on the LEFT
//         r1.x < r2.x + r2.w && // r1 is on the left of r2
//         r2.y + r2.h > r1.y && // r2 is colliding on the TOP
//         r2.y < r1.y + r1.h) { // r2 is on top
//             return true;
//         }
//     else {
//         return false
//     }
// }


// const placeFree = function (xNew, yNew) {
//     const temp = {
//         x: xNew,
//         y: yNew;
//         w: 50;
//         h: 50;
//     }

//     if (r1.x + r1.w > r2.x && // r1 is colliding on the LEFT
//         r1.x < r2.x + r2.w && // r1 is on the left of r2
//         r2.y + r2.h > r1.y && // r2 is colliding on the TOP
//         r2.y < r1.y + r1.h) { // r2 is on top
//             return true;
//         }
//     else {
//         return false
//     }

// }






// function draw(x, y) {
//     const theCanvas = document.getElementById('example');
//     const ctx = theCanvas.getContext('2d');
//     ctx.drawImage(spriteImg, spriteX, spriteY, 50, 50)
// }











