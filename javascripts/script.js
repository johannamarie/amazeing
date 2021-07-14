const btnStart = document.getElementById("start-game");
const btnRules = document.getElementById("rules");
const rulesText = document.getElementById("rules-section");
const levelBtns = document.querySelectorAll(".levels button.level")
const btnEasy = document.getElementById("level-easy");
const btnMedium = document.getElementById("level-medium");
const btnHard = document.getElementById("level-hard");
const timerText = document.querySelector(".timer-text");
const startSettings = document.querySelector(".start-settings");
const loseMessage = document.querySelector(".lose-game");
const wallVariable = document.querySelectorAll(".wall")


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


const character = new Character(46, 0, 2, 4)
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



let intervalId
let counter ;

function startTimer() {
    counter = 60
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
    counter = 60
    timer.textContent = counter
}

function loseGame() {
    loseMessage.classList.remove("hidden");
    mazeArea.classList.toggle(".opaque");
    characterDisplay.classList.toggle("opaque")

    console.log("time is up!")
}



// WHEN I CLICK ON START
btnStart.addEventListener('click', () => {
    // IF THE GAME WAS NOT STARTED
    if (btnStart.classList.contains("stop")) {

        btnStart.classList.remove('stop');
        btnStart.classList.add("start");
        btnRules.classList.remove("hidden");
        btnRules.classList.remove("hidden");
        btnEasy.classList.toggle("hidden");
        btnHard.classList.toggle("hidden");
        btnMedium.classList.toggle("hidden");
        btnStart.textContent = "START";
        
        timer.clearTimer()
    }
    
    // GAME ONGOING
    else if (btnStart.classList.contains("start")) {

        if(btnEasy.classList.contains('selected')) {
            maze.createMaze()
        }

        if(btnMedium.classList.contains('selected')) {
            maze.createMaze()
        }

        if(btnHard.classList.contains('selected')) {
            maze.createMaze()
        }

        btnStart.classList.remove("start");
        btnStart.classList.add("stop");
        btnRules.classList.add("hidden");
        btnEasy.classList.add("hidden");
        btnMedium.classList.add("hidden");
        btnHard.classList.add("hidden");
        rulesText.classList.add("hidden");
        timerText.classList.remove("hidden");
        startSettings.classList.add('hidden')

        btnStart.textContent = "STOP";


        
        character.createCharacter()

        
        startTimer();
    }
})


btnEasy.onclick = function () {
    btnEasy.classList.toggle('selected');
}

btnMedium.onclick = function () {
    btnMedium.classList.toggle('selected');
}


btnHard.onclick = function () {
    btnHard.classList.toggle('selected')
}



document.onkeydown = function move(e) {

    //RIGHT
    if (e.key === "d") {
        
        let doesItCollide = false;

        walls.forEach(wall => {
            if(isCollidingWall({...character,x: character.x + 1.5}, wall)) {
                console.log("it's colliding at the right")
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
                console.log("it's colliding at the left")
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
                console.log("it's colliding at the top")
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
                console.log("it's colliding at the top")
                doesItCollide = true  
            }
            
        })
        
        if(doesItCollide === false) {
            character.y += 1.5;
            characterDisplay.style.top = character.y + "%";
        }
    }
}


function isCollidingWall (character, wall) {
    if((character.x + character.w) > wall.x && character.x < (wall.x + wall.w) && (character.y + character.h) > wall.y && character.y < (wall.y + wall.h)) {
        return true
    } else return false
}










