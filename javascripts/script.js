const btnStart = document.getElementById("start-game");
const btnRules = document.getElementById("rules");
const rulesText = document.getElementById("rules-section");
const levelBtns = document.querySelectorAll(".levels button.level")
const btnEasy = document.getElementById("level-easy");
const btnMedium = document.getElementById("level-medium");
const btnHard = document.getElementById("level-hard");
const timerText = document.querySelector(".timer-text");
const startSettings = document.querySelector(".start-settings");
const loseMessage = document.querySelector("lose-game");
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
let counter = 5;

function startTimer() {
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

        // if(isCollidingWalls(walls) === true) {
        //     character.x = character.x;
        //     characterDisplay.style.left = character.x + "%";
        // }

        if(character.x <= 0) {
            character.x = 0; 
            characterDisplay.style.left = character.x + "%";
        }
    }

    
    if (e.key === "ArrowUp") {
        character.y -= 1.5;
        characterDisplay.style.top = character.y + "%";

        // if(isCollidingWalls(walls) === true) {
        //     character.y = character.y;
        //     characterDisplay.style.top = character.y + "%"
        // }

        if(character.y <= 0) {
            character.y = 0;
            characterDisplay.style.top = character.y + "%";
        }
    }

    if (e.key === "ArrowDown") {
        characterDisplay.style.top = character.y + "%";

      
        
        // willCollideWithWall({
        //     x: character.x,
        //     y: character.y + 1.5,
        //     w: character.w,
        //     h: character.h

        // }, walls)

        walls.forEach(wall => isCollidingWall(wall))

        console.log(willCollideWithWall({...character,y: character.y + 1.5}, walls))

            // if(willCollideWithWall(newCharacter, walls)){
            //     console.log("colliding")
            // }

        character.y += 1.5;

        // if(isCollidingWall(walls) !== false) {
        //     character.y = isCollidingWall(walls).y - character.h;
        //     characterDisplay.style.top = character.y + "%";
        // }


        if(character.y >= 100 - character.h) {
            character.y = 100 - character.h;
            characterDisplay.style.top = character.y + "%"
        }
    }
}


function willCollideWithWall(character, walls) {

    for (i = 0; i < walls.length; i++) {
        const wall = walls[i]
        if((character.x + character.w) > wall.x && character.x < (wall.x + wall.w) && (character.y + character.h) > wall.y && character.y < (wall.y + wall.h)) {
            return true;
        } else return false
       
    }   
}

console.log(wallVariable)

function isCollidingWall (wall) {
    if((character.x + character.w) > wall.x && character.x < (wall.x + wall.w) && (character.y + character.h) > wall.y && character.y < (wall.y + wall.h)) {
        return console.log("colliding")
    } else return false
}


function loseGame () {
    if(counter === 0) {
        loseGame.classList.remove("hidden")
    }
}

loseGame()






