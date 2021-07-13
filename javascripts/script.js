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
    buildWalls(wallsMaze1)
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

function buildWalls(arrayWalls) {

    arrayWalls.forEach(wall => {
        const newWall = document.createElement("div");
        newWall.className= 'wall';
        maze.appendChild(newWall);
        newWall.style.top = `${wall.y}%`;
        newWall.style.left = `${wall.x}%`;
        newWall.style.width = `${wall.w}%`;
        newWall.style.height = `${wall.h}%`;
    })
}

// const wallSize = 1

// function createWallsH(left, top, length) {
//     const wall = document.createElement("div");
//     wall.className= 'wall';
//     maze.appendChild(wall);
//     wall.style.top = `${top}%`;
//     wall.style.left = `${left}%`;
//     wall.style.width = `${length}%`;
//     wall.style.height = `${wallSize}%`;
// }

// function createWallsV(left, top, length) {
//     const wall = document.createElement("div");
//     wall.className= 'wall';
//     maze.appendChild(wall);
//     wall.style.top = `${top}%`;
//     wall.style.left = `${left}%`;
//     wall.style.width = `${wallSize/2}%`;
//     wall.style.height = `${length}%`
// }


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






