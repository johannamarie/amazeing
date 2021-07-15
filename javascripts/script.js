class Maze {
    constructor(w, h) {
        this.w = w;
        this.h = h
    }

    createMazeArea() {
        const newMaze = document.createElement("div");
        newMaze.className = "maze-area";
        document.querySelector(".game-section").insertBefore(newMaze, document.getElementById("btn-stop"))
        newMaze.style.width = this.w + "px";
        newMaze.style.height = this.h + "px";
    }

    buildWalls(arrayWalls) {
        arrayWalls.forEach(wall => {
            const newWall = document.createElement("div");
            newWall.className = 'wall';
            document.querySelector(".maze-area").appendChild(newWall);
            newWall.style.top = `${wall.y}%`;
            newWall.style.left = `${wall.x}%`;
            newWall.style.width = `${wall.w}%`;
            newWall.style.height = `${wall.h}%`;
        })
    }

    createMaze(arrayWalls) {
        this.createMazeArea();
        this.buildWalls(arrayWalls)
    }
    
}

class Character {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y; 
        this.w = w;
        this.h = h
    }

    createCharacter() {
    const newChar = document.createElement("div");
    newChar.className = "character";
    document.querySelector(".maze-area").appendChild(newChar)
    }

    setAttributeCharacter() {
    document.querySelector(".character").style.width = this.w + "%";
    document.querySelector(".character").style.height = this.h + "%";
    document.querySelector(".character").style.top = this.y + "%";
    document.querySelector(".character").style.left = this.x + "%";
    }

    playerExits () {
        if (character.y > 100 || character.x > 100) {
            winGame();
            return true
        }
    }
}

function destroyWalls() {
    document.querySelector(".game-section").removeChild(document.querySelector(".maze-area"))
}


// BUTTONS
// const btnStart = document.getElementById("start-game");
const btnStop = document.getElementById("btn-stop")
const btnEasy = document.getElementById("level-easy");
const btnMedium = document.getElementById("level-medium");
const btnHard = document.getElementById("level-hard");
const btnNewGame = document.querySelectorAll(".restart-game")

// GAME AREA
const characterDisplay = document.querySelector(".character");
const mazeArea = document.querySelector(".maze-area")
const gameArea = document.querySelector(".game-section");
const wallDisplay = document.querySelectorAll(".wall");
const timerDisplay = document.getElementById("timer");

// TEXT
const btnRules = document.getElementById("rules");
const rulesText = document.getElementById("rules-section");
const timerText = document.querySelector(".timer-text");
const startSettings = document.querySelector(".start-settings");
const loseMessage = document.querySelector(".lose-game");
const winMessage = document.querySelector(".win-game")


// TIMER
let intervalId
let counter ;

function startTimer(counterBegin) {
    counter = counterBegin
    
    intervalId = setInterval(function () {
        counter -= 1;
    if (counter === 0) {
        clearInterval(intervalId);
        loseGame()
    }
    timer.textContent = counter;
    }, 1000)
    
}

function clearTimer() {
    clearInterval(intervalId);
    timer.textContent = counter 
}

function resetTimer() {
    counter = counterBegin;
    timer.textContent = counter;
}

// STOP BUTTON
btnStop.onclick = stopGame


// SELECT LEVEL
btnEasy.onclick = function () { 
    mazeEasy.createMaze(wallsEasy);
    startGame(5);
}


btnMedium.onclick = function () { 
    mazeMedium.createMaze(wallsMedium);
    startGame(60);
}


btnHard.onclick = function () { 
    mazeHard.createMaze(wallsHard);
    startGame(60); 
}

document.querySelectorAll(".restart-game").onclick = function () {
    console.log("newgame works")
    // timerText.classList.add("hidden");
    // destroyWalls();
}



function startGame(counterBegin) { // START THE GAME
    //MAKE DISAPPEAR
    btnEasy.classList.add("hidden");
    btnMedium.classList.add("hidden");
    btnHard.classList.add("hidden");
    startSettings.classList.add("hidden");
    
    // MAKE BTN STOP
    btnStop.classList.remove("hidden");

    // SET GAME
    
    character.createCharacter()
    character.setAttributeCharacter()
    startTimer(counterBegin)
    timerText.classList.remove("hidden");
}
  
function stopGame() {
    // MAKE APPEAR
    btnEasy.classList.remove("hidden");
    btnMedium.classList.remove("hidden");
    btnHard.classList.remove("hidden");
    startSettings.classList.remove("hidden")
    btnStop.classList.add("hidden")

    // END GAME
    destroyWalls(gameArea.children)
    clearTimer()
    document.querySelector(".character").classList.add("hidden")
}

function loseGame() {
    loseMessage.classList.remove("hidden");
    document.getElementById("btn-stop").classList.add(".hidden")
    gameArea.classList.toggle("opaque");
    document.querySelector(".character").classList.toggle("opaque");
    clearTimer()
}

function winGame() {
    winMessage.classList.remove("hidden");
    gameArea.classList.add("opaque");
    characterDisplay.classList.toggle("opaque");
    clearTimer()

}

// COMMANDS

function commands(walls) {
    document.onkeydown = function (e) {
        character.playerExits()

        if(!character.playerExits()) {
        
            if (e.key === "d") { //RIGHT
                let doesItCollide = false;
                walls.forEach(wall => {
                    if(isCollidingWall({...character,x: character.x + 1.5}, wall)) 
                    { doesItCollide = true; }
                })
                if (doesItCollide === false) 
                { character.x += 1.5;
                    document.querySelector(".character").style.left = character.x + "%"; }     
            }

            if (e.key === "q") { //LEFT
                let doesItCollide = false;
                walls.forEach(wall => {
                    if(isCollidingWall({...character,x: character.x - 1.5}, wall)) {
                        doesItCollide = true; }
                })
                if (doesItCollide === false) {
                    character.x -= 1.5;
                    document.querySelector(".character").style.left = character.x + "%"; }
            }

            if (e.key === "z") { //UP
                let doesItCollide = false;
                walls.forEach(wall => {
                    if(isCollidingWall({...character,y: character.y - 1.5}, wall)) {
                        doesItCollide = true } 
                })
                if (doesItCollide === false) {
                    character.y -= 1.5;
                    document.querySelector(".character").style.top = character.y + "%"; }
            }

            if (e.key === "s") { //DOWN
                let doesItCollide = false;
                walls.forEach(wall => {
                    if(isCollidingWall({...character,y: character.y + 1.5}, wall)) {
                        doesItCollide = true }      
                })
                if(doesItCollide === false) {
                    character.y += 1.5;
                    document.querySelector(".character").style.top = character.y + "%"; }
            }
        }
    }
}




function isCollidingWall (character, wall) {
    if((character.x + character.w) > wall.x && character.x < (wall.x + wall.w) && (character.y + character.h) > wall.y && character.y < (wall.y + wall.h)) {
        return true
    } else return false
}



const mazeEasy = new Maze(1000, 500)
const mazeMedium = new Maze(1000, 500)
const mazeHard = new Maze(1000, 500)
const character = new Character (46, 0, 2, 4)

commands(wallsEasy)














