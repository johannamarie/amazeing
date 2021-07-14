// BUTTONS
// const btnStart = document.getElementById("start-game");
const btnStop = document.getElementById("stop-game")
const btnEasy = document.getElementById("level-easy");
const btnMedium = document.getElementById("level-medium");
const levelBtns = document.querySelectorAll(".levels button.level");
const btnHard = document.getElementById("level-hard");

// GAME AREA
const characterDisplay = document.querySelector(".character");
const mazeArea = document.getElementById("container");
const wallDisplay = document.querySelectorAll(".wall");
const timerDisplay = document.getElementById("timer");

// TEXT
const btnRules = document.getElementById("rules");
const rulesText = document.getElementById("rules-section");
const timerText = document.querySelector(".timer-text");
const startSettings = document.querySelector(".start-settings");
const loseMessage = document.querySelector(".lose-game");
const winMessage = document.querySelector(".win-game")


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

    playerExits () {
        if (character.y > 100) {
            winGame();
            return true
        }
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

const character = new Character(46, 96, 2, 4)
const maze = new Maze(1000, 500)




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

function destroyWalls(htmlWalls) {
    for (let i = 0; i < htmlWalls.length; i++) {
        if(!htmlWalls.item(i).classList.contains("character")) {
            const closestParent = htmlWalls.item(i).closest("#container")
            closestParent.removeChild(htmlWalls.item(i))
        }
    }   
}


console.log(mazeArea.children)
// TIMER
let intervalId
let counter ;

function startTimer(counterBegin) {
    counter = counterBegin
    intervalId = setInterval(function () {
        counter -= 1;
        timer.textContent = counter;

    if (counter === 0) {
        clearInterval(intervalId);
        loseGame()
    }
    }, 1000)
}

function clearTimer() {
    clearInterval(intervalId);
    timer.textContent = counter 
}


function loseGame() {
    loseMessage.classList.remove("hidden");
    mazeArea.classList.toggle("opaque");
    characterDisplay.classList.toggle("opaque")
}

function winGame() {
    winMessage.classList.remove("hidden");
    mazeArea.classList.add("opaque");
    characterDisplay.classList.toggle("opaque");
    clearTimer()

}


// STOP BUTTON
btnStop.onclick = stopGame


// SELECT LEVEL
btnEasy.onclick = function () { 
    startGame();
    maze.createMaze();
}


btnMedium.onclick = function () { 
    startGame();
    maze.createMaze();
}


btnHard.onclick = function () { 
    startGame();
    maze.createMaze();
}

function startGame() { // START THE GAME
    //MAKE DISAPPEAR
    btnEasy.classList.add("hidden");
    btnMedium.classList.add("hidden");
    btnHard.classList.add("hidden");
    startSettings.classList.add("hidden");
    
    // MAKE BTN STOP
    btnStop.classList.remove("hidden");

    // SET GAME
    
    character.createCharacter()
    startTimer(60)
    timerText.classList.remove("hidden");
}
  
function stopGame() {
    // MAKE APPEAR
    btnEasy.classList.remove("hidden");
    btnMedium.classList.remove("hidden");
    btnHard.classList.remove("hidden");
    startSettings.classList.remove("hidden")

    // END GAME
    destroyWalls(mazeArea.children)
    clearTimer()
    characterDisplay.classList.add("hidden")
}

document.onkeydown = function (e) {
    character.playerExits()

    if(!character.playerExits()) {
    //RIGHT
        if (e.key === "d") {
            
            let doesItCollide = false;

            walls.forEach(wall => {
                if(isCollidingWall({...character,x: character.x + 1.5}, wall)) {
                    doesItCollide = true; 
                }
            })

            if (doesItCollide === false) {
                character.x += 1.5;
                characterDisplay.style.left = character.x + "%";
            } 
        }

        //LEFT
        if (e.key === "q") {

            let doesItCollide = false;

            walls.forEach(wall => {
                if(isCollidingWall({...character,x: character.x - 1.5}, wall)) {
                    doesItCollide = true; 
                }
            })

            if (doesItCollide === false) {
                character.x -= 1.5;
            characterDisplay.style.left = character.x + "%";
            }
        }

        //UP
        if (e.key === "z") {
            let doesItCollide = false;
            walls.forEach(wall => {
                if(isCollidingWall({...character,y: character.y - 1.5}, wall)) {
                    doesItCollide = true  
                } 
            })

            if (doesItCollide === false) {
                character.y -= 1.5;
                characterDisplay.style.top = character.y + "%";
            }
        }

        
        //DOWN
        if (e.key === "s") {
            let doesItCollide = false;
            walls.forEach(wall => {
                if(isCollidingWall({...character,y: character.y + 1.5}, wall)) {
                    doesItCollide = true  
                }
                
            })
            
            if(doesItCollide === false) {
                character.y += 1.5;
                characterDisplay.style.top = character.y + "%";
            }
        }
    }

}




function isCollidingWall (character, wall) {
    if((character.x + character.w) > wall.x && character.x < (wall.x + wall.w) && (character.y + character.h) > wall.y && character.y < (wall.y + wall.h)) {
        return true
    } else return false
}










