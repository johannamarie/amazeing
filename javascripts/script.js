const btnStart = document.getElementById("start-game");
const btnRules = document.getElementById("rules");
const rulesText = document.getElementById("rules-section");
const btnEasy = document.getElementById("level-easy");
const btnMedium = document.getElementById("level-medium");
const btnHard = document.getElementById("level-hard");
const timerText = document.querySelector("timer-text");


btnRules.onclick = () => {
    btnRules.classList.add("hidden");

}

const characterDisplay = document.querySelector(".character");
const mazeArea = document.getElementById("container")
const timerDisplay = document.getElementById("timer");
const wallDisplay = document.querySelectorAll(".wall");



class Character {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y; 
        this.w = w;
        this.h = h
    }

    createCharacter() {
    characterDisplay.style.width = this.w + "%";
    characterDisplay.style.height = this.h + "%";
    characterDisplay.style.top = this.y + "%";
    characterDisplay.style.left = this.x + "%";
    }
}



class Maze {
    constructor(w, h) {
        this.w = w;
        this.h = h
    }

    createMaze() {
        mazeArea.style.width = this.w + "px";
        mazeArea.style.height = this.h + "px";
        buildWalls(walls)
    }
}


class Timer {
    constructor(counter, interval) { 
        this.counter = counter;
        this.interval = interval
    }

    displayTimer() {
        counter1 -= 1;
        timerDisplay.textContent = counter1;
        console.log(counter1)
    }

    startTimer() {
        let counter1 = this.counter;
        let intervalId = setInterval(function () {
            
    
        if (counter1 === 0) {
            clearInterval(intervalId);
            clearTimer();
        }
        }, this.interval)
    }
    
    clearTimer() {
        clearInterval(intervalId);
        counter1 = this.counter
        timerDisplay.textContent = counter
    }
}

const character = new Character(46, 0, 2, 4)
const maze = new Maze(1000, 500)
const timer = new Timer(60, 1000)




// CREATE WALLS

function buildWalls(arrayWalls) {

    arrayWalls.forEach(wall => {
        const newWall = document.createElement("div");
        newWall.className= 'wall';
        mazeArea.appendChild(newWall);
        newWall.style.top = `${wall.y}%`;
        newWall.style.left = `${wall.x}%`;
        newWall.style.width = `${wall.w}%`;
        newWall.style.height = `${wall.h}%`;
    })
}


btnStart.addEventListener('click', () => {
    // GAME STOPPED
    if (btnStart.classList.contains("stop")) {

        btnStart.classList.remove('stop');
        btnStart.classList.add("start");
        btnRules.classList.remove("hidden");
        btnRules.classList.toggle("hidden");
        btnEasy.classList.toggle("hidden");
        btnHard.classList.toggle("hidden");
        btnMedium.classList.toggle("hidden");
        btnStart.textContent = "START";
        
        timer.clearTimer()
    }
    
    // GAME ONGOING
    else if (btnStart.classList.contains("start")) {

        btnStart.classList.remove("start");
        btnStart.classList.add("stop");
        btnRules.classList.add("hidden");
        btnEasy.classList.add("hidden");
        btnMedium.classList.add("hidden");
        btnHard.classList.add("hidden");
        rulesText.classList.add("hidden");
        timerText.classList.remove("hidden");

        btnStart.textContent = "STOP";


        
        character.createCharacter()
        maze.createMaze()
        timer.startTimer();
    }
})



document.onkeydown = function move(e) {
    if (e.key === "ArrowRight") {
        character.x += 1.5;
        characterDisplay.style.left = character.x + "%";

        if(character.x >= 100 - character.w) {
            character.x = 100 - character.w; // container WIDTH - char WIDTH
            characterDisplay.style.left = character.x + "%";
        }

    }
    if (e.key === "ArrowLeft") {
        character.x -= 1.5;
        characterDisplay.style.left = character.x + "%";

        if(character.x <= 0) {
            character.x = 0; 
            characterDisplay.style.left = character.x + "%";
        }

    }
    if (e.key === "ArrowDown") {
        character.y += 1.5;
        characterDisplay.style.top = character.y + "%";

        if(character.y >= 100 - character.h) {
            character.y = 100 - character.h;
            characterDisplay.style.top = character.y + "%"
        }
    }
    
    if (e.key === "ArrowUp") {
        character.y -= 1.5;
        characterDisplay.style.top = character.y + "%";

        if(character.y <= 0) {
            character.y = 0;
            characterDisplay.style.top = character.y + "%";
        }

    }
}






// START POSITION



// function move(e) {
//     if (e.key === "ArrowRight") {
//         character.x += 1.5;
//         character.style.left = character.x + "%";
//         if(character.x >= maze - charWidth) {
//             charLeft = mazeWidth - charWidth; // container WIDTH - char WIDTH
//             character.style.left = charLeft + "%";
//         }
//         // console.log(isColliding(walls))
//     }
//     if (e.key === "ArrowLeft") {
//         charLeft -= 1.5;
//         character.style.left = charLeft + "%";
//         if(charLeft <= 0) {
//             charLeft = 0; 
//             character.style.left = charLeft + "%";
//         }
//         // console.log(isColliding())
//     }
//     if (e.key === "ArrowDown") {
//         charTop += 1.5;
//         character.style.top = charTop + "%";
//         if(charTop >= mazeHeight - charHeight) {
//             charTop = mazeHeight - charHeight;
//             character.style.top = charTop + "%"
//         }
//         // console.log(isColliding())
//     }
//     if (e.key === "ArrowUp") {
//         charTop -= 1.5;
//         character.style.top = charTop + "%";
//         if(charTop <= 0) {
//             charTop = 0;
//             character.style.top = charTop + "%";
//         }
//         // console.log(isColliding())
//     }
// }

// MAZE

// const maze1 = {w: 1000, h: 500}
// function createMaze(maze) {
//     mazeArea.style.width = maze.w + "px";
//     mazeArea.style.height = maze.h + "px";
//     buildWalls(wallsMaze1)
// }

// createMaze(maze1)






// TIMER




// console.log(walls)

// function isColliding (wall) {

//     //top-left-corner of character
//     if(charLeft > wall.x && charLeft < wall.x + wall.w) {
//         if(charTop > wall.y && charLeft < wall.y + wall.h) {
//             console.log("collision")
//         }
//     } else return false
  

//     // if(((charTop + charHeight) < (wallTop)) && // the bottom of the character is 
//     //     (charTop > (wallTop + wallHeight)) &&
//     //     ((charLeft + charWidth) < wallLeft) &&
//     //     (charLeft > (wallLeft + wallWidth)))
//     //     console.log(true)
//     // else console.log(false)
// }

// isColliding(wallsMaze1[0])




// function startTimer() {
//     let counter = 60;
//     intervalId = setInterval(function () {
//         counter -= 1;
//         timer.textContent = counter;

//     if (counter === 0) {
//         clearInterval(intervalId);
//         clearTimer();
//     }
//     }, 1000)
// }

// function clearTimer()
// {
//         clearInterval(intervalId);
//         counter = 60
//         timer.textContent = counter
// }

