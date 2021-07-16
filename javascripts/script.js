const body = document.querySelector("body")

// BUTTONS
const btnStop = document.getElementById("btn-stop")
const btnBeg = document.getElementById("level-beg");
const btnInt = document.getElementById("level-int");
const btnAdv = document.getElementById("level-adv");
const btnMast = document.getElementById("level-mast");
const btnNewGameWin = document.getElementById("restart-game-win")
const btnNewGameLose = document.getElementById("restart-game-lose")

// GAME AREA
const characterDisplay = document.querySelector(".character");
const mazeArea = document.querySelector(".maze-area")
const gameArea = document.querySelector(".game-section");
const wallDisplay = document.querySelectorAll(".wall");
const timerDisplay = document.getElementById("timer");
const areaRotate = document.querySelector(".rotate");

// TEXT
const btnRules = document.getElementById("rules");
const rulesText = document.getElementById("rules-section");
const timerText = document.querySelector(".timer-text");
const startSettings = document.querySelector(".start-settings");
const loseMessage = document.querySelector(".lose-message");
const winMessage = document.querySelector(".win-message");

// EXTRA
const video = document.getElementById("myVideo");


class Maze {
    constructor(w, h) {
        this.w = w;
        this.h = h
    }

    createMazeArea() {
        const newMaze = document.createElement("div");
        newMaze.className = "maze-area";
        document.querySelector(".game-section").appendChild(newMaze)
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
    document.querySelector(".character").style.backgroundImage = this.bg;
    document.querySelector(".character").style.top = this.y + "%";
    document.querySelector(".character").style.left = this.x + "%";
    }


    setCharacter(x1, y1) {
        this.x = x1;
        this.y = y1;
        document.querySelector(".character").style.top = y1 + "%";
        document.querySelector(".character").style.left = x1 + "%";
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




const mazeEasy = new Maze(1200, 600)

let characterBeg = new Character (46, 0, 2, 4, "url(../img/dino-right.png)")

function initChar() {
    let character 
    characterBeg = character
}

commands(characterBeg, wallsEasy)




// STOP BUTTON
btnStop.onclick = stopGame


// SELECT LEVEL
btnBeg.onclick = function () { 
    btnBeg.classList.add("selected")
    mazeEasy.createMaze(wallsEasy, exitEasy);
    startGame(60);
    
}

btnInt.onclick = function () { 
    btnInt.classList.add("selected")
    mazeEasy.createMaze(wallsEasy, exitEasy);
    startGame(60);
    
}

btnAdv.onclick = function () { 
    btnAdv.classList.add("selected")
    mazeEasy.createMaze(wallsEasy, exitEasy);
    startGame(60); 
}

btnMast.onclick = function () { 
    btnMast.classList.add("selected")
    mazeEasy.createMaze(wallsEasy, exitEasy);
    startGame(60); 
}





btnNewGameLose.onclick = newGame

btnNewGameWin.onclick = newGame 

function startGame(counterBegin) { // START THE GAME
    //MAKE DISAPPEAR
    startSettings.classList.add("hidden");
    btnStop.classList.remove("hidden");

    // SET GAME
    if(btnBeg.classList.contains("selected")) { characterBeg.createCharacter(); characterBeg.setCharacter(46, 0) }
    if(btnInt.classList.contains("selected")) { characterBeg.createCharacter(); characterBeg.setCharacter(46, 0) }
    if(btnAdv.classList.contains("selected")) { characterBeg.createCharacter(); characterBeg.setCharacter(46, 0) }
    if(btnMast.classList.contains("selected")) { characterBeg.createCharacter(); characterBeg.setCharacter(46, 0) }
    startTimer(counterBegin)
    timerText.classList.remove("hidden");

    if(btnMast.classList.contains("selected")) timerRotate() 
}

// TIMER 
let timerRotate = () => setTimeout(() => {
    toggleRotation()
    timerRotate();
    clearTimeout
}, randRange(timeArray))
  

function clearTimerRotate() {
    clearTimeout(timerRotate);
}

function randRange(data) {
    const newTime = data[Math.floor(data.length * Math.random())];
    return newTime
}

const timeArray = new Array(2000, 9000, 10000);

function toggleRotation() {
    let newDegree = Math.floor(Math.random() * 180)
    areaRotate.style.transform = `rotate(${newDegree}deg)`
}

function stopGame() {
    // MAKE APPEAR
    btnBeg.classList.remove("hidden");
    btnInt.classList.remove("hidden");
    btnAdv.classList.remove("hidden");
    if(btnBeg.classList.contains("selected")) {btnBeg.classList.remove("selected");}
    if(btnInt.classList.contains("selected")) {btnInt.classList.remove("selected");}
    if(btnAdv.classList.contains("selected")) {btnAdv.classList.remove("selected");}
    if(btnMast.classList.contains("selected")) {btnMast.classList.remove("selected");}
    startSettings.classList.remove("hidden")
    btnStop.classList.add("hidden")
    timerText.classList.add("hidden")
    // clearTimeout(timerRotate)
    

    // END GAME
    destroyMaze(gameArea.children)
    clearTimer()
    clearTimerRotate()
    
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
    if(btnBeg.classList.contains("selected")) btnBeg.classList.remove("selected"); 
    if(btnInt.classList.contains("selected")) btnInt.classList.remove("selected");
    if(btnAdv.classList.contains("selected")) btnAdv.classList.remove("selected");
    if(btnMast.classList.contains("selected")) btnMast.classList.remove("selected");
    
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

                if(btnBeg.classList.contains("selected")) {
                    goRight(character, walls) // BEG == RIGHT --> RIGHT
                } 
                else goLeft(character, walls) //  RIGHT --> LEFT
            }
            if (e.key === "q") { // LEFT KEY
                if(btnBeg.classList.contains("selected")) { // BEG == LEFT --> LEFT
                    goLeft(character, walls)
                }
                if(btnInt.classList.contains("selected")) {  // INT == LEFT --> RIGHT
                    goRight(character, walls)
                }
                else goDown(character, walls) // LEFT --> DOWN
            }

            if (e.key === "z") { // UP KEY
                if(btnBeg.classList.contains("selected")) { // BEG == UP --> UP
                  return  goUp(character, walls)
                }
                if(btnInt.classList.contains("selected")) { // INT == UP --> DOWN
                   return goDown(character, walls)
                }
                else goRight(character, walls) // UP --> RIGHT
            }

            if (e.key === "s") { // DOWN KEY
                if(btnBeg.classList.contains("selected")) { // DOWN --> DOWN
                    goDown(character, walls)
                }
                else goUp(character, walls) // DOWN --> UP
            }
        }
    }
}

// GO RIGHT
function goRight (character, walls) {
    console.log("right")
    let doesItCollide = false; 
    walls.forEach(wall => {
        if(willEncounterWall({...character, x: character.x + 1.5}, wall)) 
        { doesItCollide = true; }
    })
    if (doesItCollide === false) 
    { character.x += 1.5;
    document.querySelector(".character").style.left = character.x + "%"; }  

    willExitMaze(character)

    document.querySelector(".character").style.backgroundImage = "url(./img/dino-right.png)"
}

// GO LEFT
function goLeft (character, walls) {
    console.log("left")
    let doesItCollide = false; 
    walls.forEach(wall => {
        if(willEncounterWall({...character,x: character.x - 1.5}, wall)) {
            doesItCollide = true; }
    })
    if (doesItCollide === false) {
        character.x -= 1.5;
        document.querySelector(".character").style.left = character.x + "%"; };
    
    willExitMaze(character);

    document.querySelector(".character").style.backgroundImage = "url(./img/dino-left.png)"
}

// GO UP
function goUp (character, walls) {
    console.log("here")
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

function goDown (character, walls) {
    console.log("down")
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




