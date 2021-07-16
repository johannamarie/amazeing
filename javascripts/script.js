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



const mazeEasy = new Maze(1200, 600)

class Character {
    constructor(x, y, w, h, bg) {
        this.x = x;
        this.y = y; 
        this.w = w;
        this.h = h;
        this.bg = bg;
    }

    createCharacter() {
    const newCharacter = document.createElement("div");
    newCharacter.className = "character";
    document.querySelector(".maze-area").appendChild(newCharacter);
    document.querySelector(".character").style.width = this.w + "%";
    document.querySelector(".character").style.height = this.h + "%";
    document.querySelector(".character").style.backgroundImage = this.bg;
    document.querySelector(".character").style.top = this.y + "%";
    document.querySelector(".character").style.left = this.x + "%";
    }


    arrivedAtExit (exit) {
        if((this.x + this.w) > exit.x && this.x < (exit.x + exit.w) && (this.y + this.h) > exit.y && this.y < (exit.y + exit.h)) {
            return true
        } else return false
        }

    commands(walls) {
        document.onkeydown = function (e) {
    
            if(arrivedAtExit (exitEasy)) {
                winGame()
            }
            if (!arrivedAtExit (exitEasy)) {
    
                if (e.key === "d") { // RIGHT KEY
    
                    if(btnBeg.classList.contains("selected")) {
                        return goRight(walls) // BEG == RIGHT --> RIGHT
                    } 
                    else return goLeft(walls) //  RIGHT --> LEFT
                }
    
                if (e.key === "q") { // LEFT KEY
                    if(btnBeg.classList.contains("selected")) { // BEG == LEFT --> LEFT
                        return goLeft(walls)
                    }
                    if(btnInt.classList.contains("selected")) {  // INT == LEFT --> RIGHT
                        return goRight(walls)
                    }
                    else goDown(walls) // LEFT --> DOWN
                }
    
                if (e.key === "z") { // UP KEY
                    if(btnBeg.classList.contains("selected")) { // BEG == UP --> UP
                      return  goUp(walls)
                    }
                    if(btnInt.classList.contains("selected")) { // INT == UP --> DOWN
                       return goDown(walls)
                    }
                    else return goRight(walls) // UP --> RIGHT
                }
    
                if (e.key === "s") { // DOWN KEY
                    if(btnBeg.classList.contains("selected")) { // DOWN --> DOWN
                        return goDown(walls)
                    }
                    else return goUp(walls) // DOWN --> UP
                }
            }
        }
    }


    // GO RIGHT
    goRight (walls) {
    console.log("right")
    let doesItCollide = false; 
    walls.forEach(wall => {
        if(willEncounterWall({...this, x: this.x + 1.5}, wall)) 
        { doesItCollide = true; }
    })
    if (doesItCollide === false) 
    { this.x += 1.5;
    document.querySelector(".character").style.left = this.x + "%"; }  

    willExitMaze()

    document.querySelector(".character").style.backgroundImage = "url(../img/dino-right.png)"
}

// GO LEFT
    goLeft (walls) {
    console.log("left")
    let doesItCollide = false; 
    walls.forEach(wall => {
        if(willEncounterWall({...this,x: this.x - 1.5}, wall)) {
            doesItCollide = true; }
    })
    if (doesItCollide === false) {
        this.x -= 1.5;
        document.querySelector(".character").style.left = this.x + "%"; };
    
    willExitMaze();

    document.querySelector(".character").style.backgroundImage = "url(../img/dino-left.png)"
}

// GO UP
    goUp (walls) {
    console.log("here")
    let doesItCollide = false; //UP
    walls.forEach(wall => {
        if(willEncounterWall({...this,y: this.y - 1.5}, wall)) {
            doesItCollide = true } 
    })
    if (doesItCollide === false) {
        this.y -= 1.5;
        document.querySelector(".character").style.top = this.y + "%"; }

        willExitMaze()
    }

    goDown (walls) {
    console.log("down")
    let doesItCollide = false; // DOWN
    walls.forEach(wall => {
        if(willEncounterWall({...this,y: this.y + 1.5}, wall)) {
            doesItCollide = true }      
    })
    if(doesItCollide === false) {
        this.y += 1.5;
        document.querySelector(".character").style.top = this.y + "%"; }

    willExitMaze()

    }

    willEncounterWall (wall) {
    if((this.x + this.w) > wall.x && this.x < (wall.x + wall.w) && (this.y + this.h) > wall.y && this.y < (wall.y + wall.h)) {
        return true
    } else return false
    }
    willExitMaze () {
    if (this.y < 0) {this.y = 0};
    if (this.y + this.h > 100) {this.y = 100 - this.h};
    if (this.x < 0) {this.x = 0};
    if (this.x + this.w > 100 ) {this.x = 100 - this.w}
    }
}



const character = new Character (46, 0, 2, 4, "url(../img/dino-right.png)")



function destroyCharacter () {
    const i = document.querySelector(".maze-area").children.length - 1
    const div = document.querySelector(".maze-area").children[i];
    document.querySelector(".maze-area").removeChild(div)
}

function destroyMaze() {
    const div = document.querySelector(".game-section").children[0]
    document.querySelector(".game-section").removeChild(div)
}









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
    mazeMedium.createMaze(wallsMedium, exitMedium);
    startGame(60);
    
}

btnAdv.onclick = function () { 
    btnAdv.classList.add("selected")
    mazeHard.createMaze(wallsHard, exitHard);
    startGame(60); 
}

btnMast.onclick = function () { 
    btnMast.classList.add("selected")
    mazeHard.createMaze(wallsHard, exitHard);
    startGame(60); 
}





btnNewGameLose.onclick = newGame

btnNewGameWin.onclick = newGame 

function startGame(counterBegin) { // START THE GAME
    //MAKE DISAPPEAR
    startSettings.classList.add("hidden");
    
    // MAKE BTN STOP
    btnStop.classList.remove("hidden");

    // SET GAME
    if(btnBeg.classList.contains("selected")) { character.createCharacter() }
    startTimer(counterBegin)
    timerText.classList.remove("hidden");

    if(btnMast.classList.contains("selected")) timerRotate() 

    character.commands(wallsEasy)
}



function randRange(data) {
    const newTime = data[Math.floor(data.length * Math.random())];
    return newTime
}

const timeArray = new Array(2000, 3000, 1000);

function toggleRotation() {
    let newDegree = Math.floor(Math.random() * 180)
    areaRotate.style.transform = `rotate(${newDegree}deg)`
}



let timerRotate = () => setTimeout(() => {
    toggleRotation()
    timerRotate();
}, randRange(timeArray))

  
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
    

    // END GAME
    destroyMaze(gameArea.children)
    clearTimer()
    clearInterval(timerRotate);
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
    if(btnBeg.classList.contains("selected")) {btnBeg.classList.remove("selected");}
    if(btnInt.classList.contains("selected")) {btnInt.classList.remove("selected");}
    if(btnAdv.classList.contains("selected")) {btnAdv.classList.remove("selected");}
    if(btnMast.classList.contains("selected")) {btnMast.classList.remove("selected");}
    
    // GAME
    destroyCharacter()
    destroyMaze(gameArea.children)
    clearTimer()
}



// COMMANDS EASY










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






