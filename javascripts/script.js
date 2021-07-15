// BUTTONS
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
const loseMessage = document.querySelector(".lose-message");
const winMessage = document.querySelector(".win-message");

// EXTRA
const sadAudio = document.getElementById("sad-audience")


class Maze {
    constructor(w, h) {
        this.w = w;
        this.h = h
    }

    createMazeArea() {
        const newMaze = document.createElement("div");
        newMaze.className = "maze-area";
        document.querySelector(".game-section").appendChild(newMaze, document.getElementById("btn-stop"))
        document.querySelector(".game-section").style.width = this.w + "px";
        document.querySelector(".game-section").style.height = this.h + "px";
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

    setExit(exit) {
            const newExit = document.createElement("div");
            newExit.className = 'exit';
            document.querySelector(".maze-area").appendChild(newExit);
            newExit.style.top = `${exit.y}%`;
            newExit.style.left = `${exit.x}%`;
            newExit.style.width = `${exit.w}%`;
            newExit.style.height = `${exit.h}%`;
    }

    createMaze(arrayWalls, exit) {
        this.createMazeArea();
        this.buildWalls(arrayWalls)
        this.setExit(exit)
    }
    
}

class Character {
    constructor(x, y, w, h, bg) {
        this.x = x;
        this.y = y; 
        this.w = w;
        this.h = h;
        this.bg = bg;
    }

    createCharacter() {
    const newChar = document.createElement("div");
    newChar.className = "character";
    document.querySelector(".maze-area").appendChild(newChar);
    document.querySelector(".character").style.width = this.w + "%";
    document.querySelector(".character").style.height = this.h + "%";
    document.querySelector(".character").style.backgroundImage = this.bg
    }

    setCharacterPosition() {
        document.querySelector(".character").style.top = this.y + "%";
        document.querySelector(".character").style.left = this.x + "%";
    }
}

function destroyCharacter () {
    const i = document.querySelector(".maze-area").children.length - 1
    const div = document.querySelector(".maze-area").children[i];
    document.querySelector(".maze-area").removeChild(div)
}

function destroyMaze() {
    const div = document.querySelector(".game-section").children[0]
    document.querySelector(".game-section").removeChild(div)
}


const mazeEasy = new Maze(1200, 1200/2)
const mazeMedium = new Maze(1000, 500)
const mazeHard = new Maze(1000, 500)
const characterEasy = new Character (46, 0, 2, 4, "url(../img/dino-right.png)")
const characterMedium = new Character (46, 0, 2, 4, "url(../img/dino-right.png)")
const characterHard = new Character (46, 0, 2, 4, "url(../img/dino-right.png)")

commands(characterEasy, wallsEasy)




// STOP BUTTON
btnStop.onclick = stopGame


// SELECT LEVEL
btnEasy.onclick = function () { 
    btnEasy.classList.add("selected")
    mazeEasy.createMaze(wallsEasy, exitEasy);
    startGame(60);
    
}

btnMedium.onclick = function () { 
    btnMedium.classList.add("selected")
    mazeMedium.createMaze(wallsMedium, exitMedium);
    startGame(60);
    
}

btnHard.onclick = function () { 
    btnHard.classList.add("selected")
    mazeHard.createMaze(wallsHard, exitHard);
    startGame(5); 
    
}

btnNewGameLose.onclick = newGame

btnNewGameWin.onclick = newGame 

function startGame(counterBegin) { // START THE GAME
    //MAKE DISAPPEAR
    startSettings.classList.add("hidden");
    
    // MAKE BTN STOP
    btnStop.classList.remove("hidden");

    // SET GAME
    if(btnEasy.classList.contains("selected")) { characterEasy.createCharacter(); characterEasy.setCharacterPosition() }
    if(btnMedium.classList.contains("selected")) { characterMedium.createCharacter(); characterMedium.setCharacterPosition() }
    if(btnHard.classList.contains("selected")) { characterHard.createCharacter(); characterHard.setCharacterPosition() }
    startTimer(counterBegin)
    timerText.classList.remove("hidden");
}
  
function stopGame() {
    // MAKE APPEAR
    btnEasy.classList.remove("hidden");
    btnMedium.classList.remove("hidden");
    btnHard.classList.remove("hidden");
    if(btnEasy.classList.contains("selected")) {btnEasy.classList.remove("selected");}
    if(btnMedium.classList.contains("selected")) {btnMedium.classList.remove("selected");}
    if(btnHard.classList.contains("selected")) {btnHard.classList.remove("selected");}
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

    // AUDIO

    
    // GAME
    clearTimer()
}


function winGame() {
    // DISPLAY
    winMessage.classList.remove("hidden");
    btnStop.classList.add("hidden")
    gameArea.classList.add("opaque");
    document.querySelector(".character").classList.add("opaque");
    
    // GAME
    clearTimer()
}

function newGame() {
    // DISPLAYED ELEMENTS
    if(!loseMessage.classList.contains("hidden")) { loseMessage.classList.add("hidden"); }
    if(!document.querySelector(".win-message").classList.contains("hidden")) { winMessage.classList.add("hidden"); }
    startSettings.classList.remove("hidden");
    gameArea.classList.remove("opaque");
    timerText.classList.add("hidden")

    // RESET LEVEL
    if(btnEasy.classList.contains("selected")) {btnEasy.classList.remove("selected");}
    if(btnMedium.classList.contains("selected")) {btnMedium.classList.remove("selected");}
    if(btnHard.classList.contains("selected")) {btnHard.classList.remove("selected");}
    
    // GAME
    destroyCharacter()
    destroyMaze(gameArea.children)
    clearTimer()
}



// COMMANDS EASY

function commands(character, walls) {
    document.onkeydown = function (e) {

        if(arrivedAtExit (character, exitEasy)) {
            winGame()
        }
        if (!arrivedAtExit (character, exitEasy)) {
            if (e.key === "d") { // RIGHT KEY

                //RIGHT --> RIGHT
                if(!btnHard.classList.contains("selected")) {
                    let doesItCollide = false; 
                    walls.forEach(wall => {
                        if(willEncounterWall({...character, x: character.x + 1.5}, wall)) 
                        { doesItCollide = true; }
                    })
                    if (doesItCollide === false) 
                    { character.x += 1.5;
                        document.querySelector(".character").style.left = character.x + "%"; }  

                    willExitMaze(character)
                }   

                // RIGHT --> LEFT
                if(btnHard.classList.contains("selected")) {
                    let doesItCollide = false; 
                    walls.forEach(wall => {
                        if(willEncounterWall({...character, x: character.x - 1.5}, wall)) {
                            doesItCollide = true; }
                    })
                    if (doesItCollide === false) {
                        character.x -= 1.5;
                        document.querySelector(".character").style.left = character.x + "%"; }
                    willExitMaze(character)
                }

                document.querySelector(".character").style.backgroundImage = "url(../img/dino-right.png)"
            }

            if (e.key === "q") { //LEFT

                // LEFT --> LEFT
                if(!btnHard.classList.contains("selected")) {
                    let doesItCollide = false; 
                    walls.forEach(wall => {
                        if(willEncounterWall({...character,x: character.x - 1.5}, wall)) {
                            doesItCollide = true; }
                    })
                    if (doesItCollide === false) {
                        character.x -= 1.5;
                        document.querySelector(".character").style.left = character.x + "%"; }
                    
                    willExitMaze(character)
                }

                // LEFT --> DOWN
                if(btnHard.classList.contains("selected")) {
                    let doesItCollide = false; // 
                    walls.forEach(wall => {
                        if(willEncounterWall({...character,y: character.y + 1.5}, wall)) {
                            doesItCollide = true }      
                    })
                    if(doesItCollide === false) {
                        character.y += 1.5;
                        document.querySelector(".character").style.top = character.y + "%"; }
                    
                    willExitMaze(character)
                }

                document.querySelector(".character").style.backgroundImage = "url(../img/dino-left.png)"
            }

            if (e.key === "z") { 

                // UP --> UP
                if(!btnHard.classList.contains("selected")) {
                    let doesItCollide = false; //UP
                    walls.forEach(wall => {
                        if(willEncounterWall({...character,y: character.y - 1.5}, wall)) {
                            doesItCollide = true } 
                    })
                    if (doesItCollide === false) {
                        character.y -= 1.5;
                        document.querySelector(".character").style.top = character.y + "%"; }

                        willExitMaze(character)
                    
                }

                if(btnHard.classList.contains("selected")) {
                    let doesItCollide = false; // GO RIGHT
                    walls.forEach(wall => {
                        if(willEncounterWall({...character,x: character.x + 1.5}, wall)) 
                        { doesItCollide = true; }
                    })
                    if (doesItCollide === false) 
                    { character.x += 1.5;
                        document.querySelector(".character").style.left = character.x + "%"; } 
                        
                    willExitMaze(character)
                }
            }

            if (e.key === "s") { //DOWN

                // DOWN --> DOWN
                if(!btnHard.classList.contains("selected")) {
                    let doesItCollide = false; // DOWN
                    walls.forEach(wall => {
                        if(willEncounterWall({...character,y: character.y + 1.5}, wall)) {
                            doesItCollide = true }      
                    })
                    if(doesItCollide === false) {
                        character.y += 1.5;
                        document.querySelector(".character").style.top = character.y + "%"; }

                    willExitMaze(character)
                }
                if(btnHard.classList.contains("selected")) {
                    let doesItCollide = false; //UP
                    walls.forEach(wall => {
                        if(willEncounterWall({...character,y: character.y - 1.5}, wall)) {
                            doesItCollide = true } 
                    })
                    if (doesItCollide === false) {
                        character.y -= 1.5;
                        document.querySelector(".character").style.top = character.y + "%"; }
                    
                    willExitMaze(character)
                }
            }
        }
    }
}




function willEncounterWall (character, wall) {
    if((character.x + character.w) > wall.x && character.x < (wall.x + wall.w) && (character.y + character.h) > wall.y && character.y < (wall.y + wall.h)) {
        return true
    } else return false
}

function willExitMaze (character) {
    if (character.y < 0) {character.y = 0};
    if (character.y + character.h > 100) {character.y = 100 - character.h};
    if (character.x < 0) {character.x = 0};
    if (character.x + character.w > 100 ) {character.x = 100 - character.w}
}

function arrivedAtExit (character, exit) {
    if((character.x + character.w) > exit.x && character.x < (exit.x + exit.w) && (character.y + character.h) > exit.y && character.y < (exit.y + exit.h)) {
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





















