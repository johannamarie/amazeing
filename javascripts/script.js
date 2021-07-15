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
    document.querySelector(".maze-area").appendChild(newChar);
    document.querySelector(".character").style.width = this.w + "%";
    document.querySelector(".character").style.height = this.h + "%";
    document.querySelector(".character").style.top = this.y + "%";
    document.querySelector(".character").style.left = this.x + "%";
    }

    setAttributeCharacter() {
    // document.querySelector(".character").style.width = this.w + "%";
    // document.querySelector(".character").style.height = this.h + "%";
    // document.querySelector(".character").style.top = this.y + "%";
    // document.querySelector(".character").style.left = this.x + "%";
    }

    playerExits () {
        if (this.y > 100 || this.x > 100) {
            winGame();
            return true
        }
    }
}

function destroyMaze() {
    const div = document.querySelector(".game-section").children[0]
    document.querySelector(".game-section").removeChild(div)
}

// BUTTONS
// const btnStart = document.getElementById("start-game");
const btnStop = document.getElementById("btn-stop")
const btnEasy = document.getElementById("level-easy");
const btnMedium = document.getElementById("level-medium");
const btnHard = document.getElementById("level-hard");
const btnNewGameWin = document.getElementById("restart-game-win")
const btnNewGameLose = document.getElementById("restart-game-lose")

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


// STOP BUTTON
btnStop.onclick = stopGame


// SELECT LEVEL
btnEasy.onclick = function () { 
    btnEasy.classList.add("selected")
    mazeEasy.createMaze(wallsEasy);
    startGame(5);
    
}


btnMedium.onclick = function () { 
    btnMedium.classList.add("selected")
    mazeMedium.createMaze(wallsMedium);
    startGame(60);
    
}


btnHard.onclick = function () { 
    btnHard.classList.add("selected")
    mazeHard.createMaze(wallsHard);
    startGame(60); 
    
}

btnNewGameLose.onclick = newGame

btnNewGameWin.onclick = newGame 

function startGame(counterBegin) { // START THE GAME
    //MAKE DISAPPEAR
    // btnEasy.classList.add("hidden");
    // btnMedium.classList.add("hidden");
    // btnHard.classList.add("hidden");
    startSettings.classList.add("hidden");
    
    // MAKE BTN STOP
    btnStop.classList.remove("hidden");

    // SET GAME
    if(btnEasy.classList.contains("selected")) { characterEasy.createCharacter() }
    if(btnMedium.classList.contains("selected")) { characterMedium.createCharacter() }
    if(btnHard.classList.contains("selected")) { characterHard.createCharacter() }
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
    timerText.classList.add("hidden")

    // END GAME
    destroyMaze(gameArea.children)
    clearTimer()
}

function loseGame() {
    // DISPLAY ELEMENTS
    loseMessage.classList.remove("hidden");
    btnStop.classList.add("hidden")
    gameArea.classList.add("opaque");
    document.querySelector(".character").classList.add("opaque");
    
    // GAME
    clearTimer()
}


function winGame() {
    // DISPLAY
    winMessage.classList.remove("hidden");
    btnStop.classList.add("hidden")
    gameArea.classList.toggle("opaque");
    characterDisplay.classList.add("opaque");
    
    // GAME
    clearTimer()
}

function newGame() {
    // DISPLAYED ELEMENTS
    if(!loseMessage.classList.contains("hidden")) { loseMessage.classList.add("hidden"); }
    if(!winMessage.classList.contains("hidden")) { winMessage.classList.add("hidden"); }
    startSettings.classList.remove("hidden");
    gameArea.classList.remove("opaque");
    btnEasy.classList.toggle("selected");
    btnMedium.classList.toggle("selected");
    btnHard.classList.toggle("selected")
    

    // GAME
    destroyMaze(gameArea.children)
    clearTimer()
}



// COMMANDS EASY

function commands(character, walls) {
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


const mazeEasy = new Maze(1000, 500)
const mazeMedium = new Maze(1000, 500)
const mazeHard = new Maze(1000, 500)
const characterEasy = new Character (46, 0, 2, 4)
const characterMedium = new Character (46, 0, 2, 4)
const characterHard = new Character (46, 0, 2, 4)

commands(characterEasy, wallsEasy)














