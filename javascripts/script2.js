const character = document.querySelector(".character");
const maze = document.getElementById("container")
const btnStart = document.getElementById("start-game");
const timer = document.getElementById("timer");

let mazeWidth
let mazeHeight 
let charWidth 
let charHeight 
let charLeft = 0;
let charTop = 0;


// const characterWidth = document.getElementById("character").style.width.replace('px', '') // STRING with "px"
// const characterHeight = document.getElementById("character").style.height.replace('px', '') // STRING with "px"
// const mazeWidth = document.getElementById("container").style.width.replace('px', '') // STRING with "px"
// const mazeHeight = document.getElementById("container").style.height.replace('px', '') // STRING with "px"

function createMaze(inputWidth, inputHeight) {
    mazeWidth = inputWidth
    mazeHeight = inputHeight
    document.getElementById("container").style.width = mazeWidth + "px";
    document.getElementById("container").style.height = mazeHeight + "px";
    buildWalls()
    return mazeWidth, mazeHeight
}

function createCharacter(inputLeft, inputTop, inputSize) {
    charWidth = inputSize
    charHeight = inputSize;
    charTop = inputTop;
    charLeft = inputLeft
    document.querySelector(".character").style.width = charWidth + "%";
    document.querySelector(".character").style.height = charWidth*2 + "%";
    document.querySelector(".character").style.top = charTop + "%";
    document.querySelector(".character").style.left = charLeft + "%";
}

// CREATE WALLS

const wallSize = 1

function createWallsH(left, top, length) {
    const wall = document.createElement("div");
    wall.className= 'wall';
    maze.appendChild(wall);
    wall.style.top = `${top}%`;
    wall.style.left = `${left}%`;
    wall.style.width = `${length}%`;
    wall.style.height = `${wallSize}%`;
}

function createWallsV(left, top, length) {
    const wall = document.createElement("div");
    wall.className= 'wall';
    maze.appendChild(wall);
    wall.style.top = `${top}%`;
    wall.style.left = `${left}%`;
    wall.style.width = `${wallSize/2}%`;
    wall.style.height = `${length}%`
}


function buildWalls() {
createWallsH(0, 0, 45);
createWallsH(50, 0, 50);
createWallsH(20, 10, 10);
createWallsH(45, 10, 5);
createWallsH(70, 10, 10);
createWallsH(85, 10, 10);
createWallsH(0, 20, 10);
createWallsH(20, 20, 5);
createWallsH(50, 20, 15);
createWallsH(80, 20, 20);
createWallsH(25, 30, 5);
createWallsH(35, 30, 5);
createWallsH(45, 30, 10);
createWallsH(60, 30, 10);
createWallsH(75, 30, 5);
createWallsH(90, 30, 5);
createWallsH(5, 40, 20);
createWallsH(30, 40, 5);
createWallsH(40, 40, 10);
createWallsH(65, 40, 10);
createWallsH(90, 40, 10);
createWallsH(90, 40, 10);
createWallsH(5, 50, 10)
createWallsH(25, 50, 5)
createWallsH(35, 50, 5)
createWallsH(45, 50, 20)
createWallsH(75, 50, 5)
createWallsH(85, 50, 10)
createWallsH(10, 60, 15)
createWallsH(30, 60, 25)
createWallsH(65, 60, 5)
createWallsH(80, 60, 15)
createWallsH(5, 70, 5)
createWallsH(15, 70, 5)
createWallsH(30, 70, 10)
createWallsH(50, 70, 10)
createWallsH(70, 70, 15)
createWallsH(5, 80, 5)
createWallsH(20, 80, 5)
createWallsH(40, 80, 20)
createWallsH(65, 80, 15)
createWallsH(10, 90, 25)
createWallsH(10, 90, 25)
createWallsH(45, 90, 10)
createWallsH(60, 90, 15)
createWallsH(80, 90, 5)
createWallsH(0, 100, 50)
createWallsH(55, 100, 45)

createWallsV(0, 0, 100)
createWallsV(5, 0, 10)
createWallsV(5, 30, 10)
createWallsV(5, 50, 30)
createWallsV(5, 90, 10)
createWallsV(10, 10, 30)
createWallsV(10, 80, 10)
createWallsV(15, 0, 30)
createWallsV(15, 60, 20)
createWallsV(20, 20, 40)
createWallsV(25, 60, 30)
createWallsV(30, 10, 40)
createWallsV(30, 70, 10)
createWallsV(35, 10, 30)
createWallsV(35, 50, 10)
createWallsV(35, 80, 10)
createWallsV(40, 0, 30)
createWallsV(40, 40, 10)
createWallsV(40, 70, 30)
createWallsV(45, 10, 20)
createWallsV(45, 60, 20)
createWallsV(55, 10, 40)
createWallsV(55, 90, 10)
createWallsV(60, 0, 10)
createWallsV(60, 30, 10)
createWallsV(60, 50, 20)
createWallsV(60, 80, 10)
createWallsV(65, 0, 20)
createWallsV(65, 60, 20)
createWallsV(70, 20, 40)
createWallsV(75, 10, 20)
createWallsV(75, 50, 20)
createWallsV(75, 80, 10)
createWallsV(80, 30, 30)
createWallsV(80, 90, 10)
createWallsV(85, 0, 10)
createWallsV(85, 20, 30)
createWallsV(85, 70, 20)
createWallsV(90, 30, 10)
createWallsV(90, 70, 30)
createWallsV(95, 60, 30)
createWallsV(100, 0, 100)





// createWallsV(0, 0, mazeHeight);
// createWallsH(0, mazeHeight-wallwidth, 300);
// createWallsH(300, 0, mazeWidth-300);
// createWallsV(mazeHeight-wallwidth, 0, mazeHeight);
// createWallsH(mazeWidth-250, mazeHeight-wallwidth, 250);
// createWallsH(240, 50, 300);
// createWallsH(50, 50, 100);
// createWallsH(50, 300, 200);
// createWallsH(350, 300, 150);
// createWallsV(300, 100, 250);
// createWallsV(450, 50, 200)
}

createMaze(1000, 500)

const walls = document.querySelectorAll(".wall");

// START POSITION



function move(e) {
    if (e.key === "ArrowRight") {
        charLeft += 1.5;
        character.style.left = charLeft + "%";
        if(charLeft >= mazeWidth - charWidth) {
            charLeft = mazeWidth - charWidth; // container WIDTH - char WIDTH
            character.style.left = charLeft + "%";
        }
        // console.log(isColliding(walls))
    }
    if (e.key === "ArrowLeft") {
        charLeft -= 1.5;
        character.style.left = charLeft + "%";
        if(charLeft <= 0) {
            charLeft = 0; 
            character.style.left = charLeft + "%";
        }
        // console.log(isColliding())
    }
    if (e.key === "ArrowDown") {
        charTop += 1.5;
        character.style.top = charTop + "%";
        if(charTop >= mazeHeight - charHeight) {
            charTop = mazeHeight - charHeight;
            character.style.top = charTop + "%"
        }
        // console.log(isColliding())
    }
    if (e.key === "ArrowUp") {
        charTop -= 1.5;
        character.style.top = charTop + "%";
        if(charTop <= 0) {
            charTop = 0;
            character.style.top = charTop + "%";
        }
        // console.log(isColliding())
    }
}

document.onkeydown = move



// document.onkeydown = move 
//  {
    
//     if (e.key === "ArrowLeft") {
//     //   player.x -= 10;
//       console.log("left ", player)
//     }
// };



btnStart.addEventListener('click', () => {
    // GAME STOPPED
    if (btnStart.classList.contains("stop")) {

        btnStart.classList.remove('stop');
        btnStart.classList.add("start");
        btnStart.textContent = "START";
        
        clearTimer()
    }
    
    // GAME ONGOING
    else if (btnStart.classList.contains("start")) {

        btnStart.classList.remove("start");
        btnStart.classList.add("stop");
        btnStart.textContent = "STOP"
        createCharacter(46, 0, 2)

        // const player = new Player (150, 550, 50, 50, "orange");
        // player.draw();

        startTimer();
    }
})

// class Element {
//     constructor(x, y, w, h) {
//         this.x = x;
//         this.y = y;
//         this.w = w;
//         this.h = h;
//     }
// }


// class Wall extends Element {
// }


// class Player extends Element {
//     constructor(x, y, w, h, bgc) {
//         super(x, y, w, h);
//         this.bgc = bgc;
//     }

//     draw() {
//         const ctx = document.getElementById("canvas").getContext('2d')
//         ctx.fillStyle = this.bgc;
//         ctx.fillRect(this.x, this.y, this.w, this.h);
//     }

//     moveLeft() {
//         this.x += 50
//     }
// }






// TIMER


function startTimer() {
    let counter = 60;
    intervalId = setInterval(function () {
        counter -= 1;
        timer.textContent = counter;

    if (counter === 0) {
        clearInterval(intervalId);
        clearTimer();
    }
    }, 1000)
}

function clearTimer()
{
        clearInterval(intervalId);
        counter = 60
        timer.textContent = counter
}


// function isColliding (walls) {

//     walls.forEach(wall => {

//     const wallTop = Number(wall.style.top.replace("px", ""));
//     const wallHeight = Number(wall.style.height.replace("px", ""));
//     const wallLeft = Number(wall.style.left.replace("px", ""));
//     const wallWidth = Number(wall.style.width.replace("px", ""));


//     if(((charTop + charHeight) < (wallTop)) && // the bottom of the character is 
//         (charTop > (wallTop + wallHeight)) &&
//         ((charLeft + charWidth) < wallLeft) &&
//         (charLeft > (wallLeft + wallWidth)))
//         console.log(true)
//     else console.log(false)
//     })
// }






