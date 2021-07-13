const wallsMaze1 = [
    { type: 'horizontal', x: 0, y: 0, w: 45, h: 1 },
    { type: 'horizontal', x: 50, y: 0, w: 50, h: 1 },
    { type: 'horizontal', x: 20, y: 10, w: 10, h: 1 },
    { type: 'horizontal', x: 45, y: 10, w: 5, h: 1 },
    { type: 'horizontal', x: 70, y: 10, w: 10, h: 1 },
    { type: 'horizontal', x: 85, y: 10, w: 10, h: 1 },
    { type: 'horizontal', x: 0, y: 20, w: 10, h: 1 },
    { type: 'horizontal', x: 20, y: 20, w: 5, h: 1 },
    { type: 'horizontal', x: 50, y: 20, w: 15, h: 1 },
    { type: 'horizontal', x: 80, y: 20, w: 20, h: 1 },
    { type: 'horizontal', x: 25, y: 30, w: 5, h: 1 },
    { type: 'horizontal', x: 35, y: 30, w: 5, h: 1 },
    { type: 'horizontal', x: 45, y: 30, w: 10, h: 1 },
    { type: 'horizontal', x: 60, y: 30, w: 10, h: 1 },
    { type: 'horizontal', x: 75, y: 30, w: 5, h: 1 },
    { type: 'horizontal', x: 90, y: 30, w: 5, h: 1 },
    { type: 'horizontal', x: 5, y: 40, w: 20, h: 1 },
    { type: 'horizontal', x: 30, y: 40, w: 5, h: 1 },
    { type: 'horizontal', x: 40, y: 40, w: 10, h: 1 },
    { type: 'horizontal', x: 65, y: 40, w: 10, h: 1 },
    { type: 'horizontal', x: 90, y: 40, w: 10, h: 1 },
    { type: 'horizontal', x: 90, y: 40, w: 10, h: 1 },
    { type: 'horizontal', x: 5, y: 50, w: 10, h: 1 },
    { type: 'horizontal', x: 25, y: 50, w: 5, h: 1 },
    { type: 'horizontal', x: 35, y: 50, w: 5, h: 1 },
    { type: 'horizontal', x: 45, y: 50, w: 20, h: 1 },
    { type: 'horizontal', x: 75, y: 50, w: 5, h: 1 },
    { type: 'horizontal', x: 85, y: 50, w: 10, h: 1 },
    { type: 'horizontal', x: 10, y: 60, w: 15, h: 1 },
    { type: 'horizontal', x: 30, y: 60, w: 25, h: 1 },
    { type: 'horizontal', x: 65, y: 60, w: 5, h: 1 },
    { type: 'horizontal', x: 80, y: 60, w: 15, h: 1 },
    { type: 'horizontal', x: 5, y: 70, w: 5, h: 1 },
    { type: 'horizontal', x: 15, y: 70, w: 5, h: 1 },
    { type: 'horizontal', x: 30, y: 70, w: 10, h: 1 },
    { type: 'horizontal', x: 50, y: 70, w: 10, h: 1 },
    { type: 'horizontal', x: 70, y: 70, w: 15, h: 1 },
    { type: 'horizontal', x: 5, y: 80, w: 5, h: 1 },
    { type: 'horizontal', x: 20, y: 80, w: 5, h: 1 },
    { type: 'horizontal', x: 40, y: 80, w: 20, h: 1 },
    { type: 'horizontal', x: 65, y: 80, w: 15, h: 1 },
    { type: 'horizontal', x: 10, y: 90, w: 25, h: 1 },
    { type: 'horizontal', x: 10, y: 90, w: 25, h: 1 },
    { type: 'horizontal', x: 45, y: 90, w: 10, h: 1 },
    { type: 'horizontal', x: 60, y: 90, w: 15, h: 1 },
    { type: 'horizontal', x: 80, y: 90, w: 5, h: 1 },
    { type: 'horizontal', x: 0, y: 100, w: 50, h: 1 },
    { type: 'horizontal', x: 55, y: 100, w: 45, h: 1 },
    { type: 'vertical', x: 0, y: 0, w: 0.5, h: 100 },
    { type: 'vertical', x: 5, y: 0, w: 0.5, h: 10 },
    { type: 'vertical', x: 5, y: 30, w: 0.5, h: 10 },
    { type: 'vertical', x: 5, y: 50, w: 0.5, h: 30 },
    { type: 'vertical', x: 5, y: 90, w: 0.5, h: 10 },
    { type: 'vertical', x: 10, y: 10, w: 0.5, h: 30 },
    { type: 'vertical', x: 10, y: 80, w: 0.5, h: 10 },
    { type: 'vertical', x: 15, y: 0, w: 0.5, h: 30 },
    { type: 'vertical', x: 15, y: 60, w: 0.5, h: 20 },
    { type: 'vertical', x: 20, y: 20, w: 0.5, h: 40 },
    { type: 'vertical', x: 25, y: 60, w: 0.5, h: 30 },
    { type: 'vertical', x: 30, y: 10, w: 0.5, h: 40 },
    { type: 'vertical', x: 30, y: 70, w: 0.5, h: 10 },
    { type: 'vertical', x: 35, y: 10, w: 0.5, h: 30 },
    { type: 'vertical', x: 35, y: 50, w: 0.5, h: 10 },
    { type: 'vertical', x: 35, y: 80, w: 0.5, h: 10 },
    { type: 'vertical', x: 40, y: 0, w: 0.5, h: 30 },
    { type: 'vertical', x: 40, y: 40, w: 0.5, h: 10 },
    { type: 'vertical', x: 40, y: 70, w: 0.5, h: 30 },
    { type: 'vertical', x: 45, y: 10, w: 0.5, h: 20 },
    { type: 'vertical', x: 45, y: 60, w: 0.5, h: 20 },
    { type: 'vertical', x: 55, y: 10, w: 0.5, h: 40 },
    { type: 'vertical', x: 55, y: 90, w: 0.5, h: 10 },
    { type: 'vertical', x: 60, y: 0, w: 0.5, h: 10 },
    { type: 'vertical', x: 60, y: 30, w: 0.5, h: 10 },
    { type: 'vertical', x: 60, y: 50, w: 0.5, h: 20 },
    { type: 'vertical', x: 60, y: 80, w: 0.5, h: 10 },
    { type: 'vertical', x: 65, y: 0, w: 0.5, h: 20 },
    { type: 'vertical', x: 65, y: 60, w: 0.5, h: 20 },
    { type: 'vertical', x: 70, y: 20, w: 0.5, h: 40 },
    { type: 'vertical', x: 75, y: 10, w: 0.5, h: 20 },
    { type: 'vertical', x: 75, y: 50, w: 0.5, h: 20 },
    { type: 'vertical', x: 75, y: 80, w: 0.5, h: 10 },
    { type: 'vertical', x: 80, y: 30, w: 0.5, h: 30 },
    { type: 'vertical', x: 80, y: 90, w: 0.5, h: 10 },
    { type: 'vertical', x: 85, y: 0, w: 0.5, h: 10 },
    { type: 'vertical', x: 85, y: 20, w: 0.5, h: 30 },
    { type: 'vertical', x: 85, y: 70, w: 0.5, h: 20 },
    { type: 'vertical', x: 90, y: 30, w: 0.5, h: 10 },
    { type: 'vertical', x: 90, y: 70, w: 0.5, h: 30 },
    { type: 'vertical', x: 95, y: 60, w: 0.5, h: 30 },
    { type: 'vertical', x: 100, y: 0, w: 0.5, h: 100 }
]


function addIdWall (array) {
    array.forEach(wall => {
        let i = 1
        wall["id"] = i
    })
    return array
}

console.log(addIdWall(wallsMaze1))

const horizontalWalls = [
    { x: 0, y: 0, w: 45, h: 1 },
    { x: 50, y: 0, w: 50, h: 1 },
    { x: 20, y: 10, w: 10, h: 1 },
    { x: 45, y: 10, w: 5, h: 1 },
    { x: 70, y: 10, w: 10, h: 1 },
    { x: 85, y: 10, w: 10, h: 1 },
    { x: 0, y: 20, w: 10, h: 1 },
    { x: 20, y: 20, w: 5, h: 1 },
    { x: 50, y: 20, w: 15, h: 1 },
    { x: 80, y: 20, w: 20, h: 1 },
    { x: 25, y: 30, w: 5, h: 1 },
    { x: 35, y: 30, w: 5, h: 1 },
    { x: 45, y: 30, w: 10, h: 1 },
    { x: 60, y: 30, w: 10, h: 1 },
    { x: 75, y: 30, w: 5, h: 1 },
    { x: 90, y: 30, w: 5, h: 1 },
    { x: 5, y: 40, w: 20, h: 1 },
    { x: 30, y: 40, w: 5, h: 1 },
    { x: 40, y: 40, w: 10, h: 1 },
    { x: 65, y: 40, w: 10, h: 1 },
    { x: 90, y: 40, w: 10, h: 1 },
    { x: 90, y: 40, w: 10, h: 1 },
    { x: 5, y: 50, w: 10, h: 1 },
    { x: 25, y: 50, w: 5, h: 1 },
    { x: 35, y: 50, w: 5, h: 1 },
    { x: 45, y: 50, w: 20, h: 1 },
    { x: 75, y: 50, w: 5, h: 1 },
    { x: 85, y: 50, w: 10, h: 1 },
    { x: 10, y: 60, w: 15, h: 1 },
    { x: 30, y: 60, w: 25, h: 1 },
    { x: 65, y: 60, w: 5, h: 1 },
    { x: 80, y: 60, w: 15, h: 1 },
    { x: 5, y: 70, w: 5, h: 1 },
    { x: 15, y: 70, w: 5, h: 1 },
    { x: 30, y: 70, w: 10, h: 1 },
    { x: 50, y: 70, w: 10, h: 1 },
    { x: 70, y: 70, w: 15, h: 1 },
    { x: 5, y: 80, w: 5, h: 1 },
    { x: 20, y: 80, w: 5, h: 1 },
    { x: 40, y: 80, w: 20, h: 1 },
    { x: 65, y: 80, w: 15, h: 1 },
    { x: 10, y: 90, w: 25, h: 1 },
    { x: 10, y: 90, w: 25, h: 1 },
    { x: 45, y: 90, w: 10, h: 1 },
    { x: 60, y: 90, w: 15, h: 1 },
    { x: 80, y: 90, w: 5, h: 1 },
    { x: 0, y: 100, w: 50, h: 1 },
    { x: 55, y: 100, w: 45, h: 1 }
]




const verticalWalls = [
    { x: 0, y: 0, w: 1, h: 100 },
    { x: 5, y: 0, w: 1, h: 10 },
    { x: 5, y: 30, w: 1, h: 10 },
    { x: 5, y: 50, w: 1, h: 30 },
    { x: 5, y: 90, w: 1, h: 10 },
    { x: 10, y: 10, w: 1, h: 30 },
    { x: 10, y: 80, w: 1, h: 10 },
    { x: 15, y: 0, w: 1, h: 30 },
    { x: 15, y: 60, w: 1, h: 20 },
    { x: 20, y: 20, w: 1, h: 40 },
    { x: 25, y: 60, w: 1, h: 30 },
    { x: 30, y: 10, w: 1, h: 40 },
    { x: 30, y: 70, w: 1, h: 10 },
    { x: 35, y: 10, w: 1, h: 30 },
    { x: 35, y: 50, w: 1, h: 10 },
    { x: 35, y: 80, w: 1, h: 10 },
    { x: 40, y: 0, w: 1, h: 30 },
    { x: 40, y: 40, w: 1, h: 10 },
    { x: 40, y: 70, w: 1, h: 30 },
    { x: 45, y: 10, w: 1, h: 20 },
    { x: 45, y: 60, w: 1, h: 20 },
    { x: 55, y: 10, w: 1, h: 40 },
    { x: 55, y: 90, w: 1, h: 10 },
    { x: 60, y: 0, w: 1, h: 10 },
    { x: 60, y: 30, w: 1, h: 10 },
    { x: 60, y: 50, w: 1, h: 20 },
    { x: 60, y: 80, w: 1, h: 10 },
    { x: 65, y: 0, w: 1, h: 20 },
    { x: 65, y: 60, w: 1, h: 20 },
    { x: 70, y: 20, w: 1, h: 40 },
    { x: 75, y: 10, w: 1, h: 20 },
    { x: 75, y: 50, w: 1, h: 20 },
    { x: 75, y: 80, w: 1, h: 10 },
    { x: 80, y: 30, w: 1, h: 30 },
    { x: 80, y: 90, w: 1, h: 10 },
    { x: 85, y: 0, w: 1, h: 10 },
    { x: 85, y: 20, w: 1, h: 30 },
    { x: 85, y: 70, w: 1, h: 20 },
    { x: 90, y: 30, w: 1, h: 10 },
    { x: 90, y: 70, w: 1, h: 30 },
    { x: 95, y: 60, w: 1, h: 30 },
    { x: 100, y: 0, w: 1, h: 100 }
]



// VERTICAL

function arrayHorToObject(array) {

    const arrayWalls = []
    

    for (let i = 0; i < array.length; i++) {

        const objectWalls = {}
        for (let j = 0; j < array[i].length; j++) {
            objectWalls["type"] = "horizontal"
            objectWalls["x"] = array[i][0];
            objectWalls["y"] = array[i][1];
            objectWalls["w"] = array[i][2];
            objectWalls["h"] = 1;
        }
        arrayWalls.push(objectWalls)
    }
    return arrayWalls
}



function arrayVertToObject(array) {

    const arrayWalls = []
    

    for (let i = 0; i < array.length; i++) {

        const objectWalls = {}
        for (let j = 0; j < array[i].length; j++) {
            objectWalls["type"] = "vertical"
            objectWalls["x"] = array[i][0];
            objectWalls["y"] = array[i][1];
            objectWalls["w"] = 0.5;
            objectWalls["h"] = array[i][2];
            
        }
        arrayWalls.push(objectWalls)
    }
    return arrayWalls
}


const arrayHor = [
    [0, 0, 45],
    [50, 0, 50],
    [20, 10, 10],
    [45, 10, 5],
    [70, 10, 10],
    [85, 10, 10],
    [0, 20, 10],
    [20, 20, 5],
    [50, 20, 15],
    [80, 20, 20],
    [25, 30, 5],
    [35, 30, 5],
    [45, 30, 10],
    [60, 30, 10],
    [75, 30, 5],
    [90, 30, 5],
    [5, 40, 20],
    [30, 40, 5],
    [40, 40, 10],
    [65, 40, 10],
    [90, 40, 10],
    [90, 40, 10],
    [5, 50, 10],
    [25, 50, 5],
    [35, 50, 5],
    [45, 50, 20],
    [75, 50, 5],
    [85, 50, 10],
    [10, 60, 15],
    [30, 60, 25],
    [65, 60, 5],
    [80, 60, 15],
    [5, 70, 5],
    [15, 70, 5],
    [30, 70, 10],
    [50, 70, 10],
    [70, 70, 15],
    [5, 80, 5],
    [20, 80, 5],
    [40, 80, 20],
    [65, 80, 15],
    [10, 90, 25],
    [10, 90, 25],
    [45, 90, 10],
    [60, 90, 15],
    [80, 90, 5],
    [0, 100, 50],
    [55, 100, 45]
]

const arrayVer = [
    [0, 0, 100],
    [5, 0, 10],
    [5, 30, 10],
    [5, 50, 30],
    [5, 90, 10],
    [10, 10, 30],
    [10, 80, 10],
    [15, 0, 30],
    [15, 60, 20],
    [20, 20, 40],
    [25, 60, 30],
    [30, 10, 40],
    [30, 70, 10],
    [35, 10, 30],
    [35, 50, 10],
    [35, 80, 10],
    [40, 0, 30],
    [40, 40, 10],
    [40, 70, 30],
    [45, 10, 20],
    [45, 60, 20],
    [55, 10, 40],
    [55, 90, 10],
    [60, 0, 10],
    [60, 30, 10],
    [60, 50, 20],
    [60, 80, 10],
    [65, 0, 20],
    [65, 60, 20],
    [70, 20, 40],
    [75, 10, 20],
    [75, 50, 20],
    [75, 80, 10],
    [80, 30, 30],
    [80, 90, 10],
    [85, 0, 10],
    [85, 20, 30],
    [85, 70, 20],
    [90, 30, 10],
    [90, 70, 30],
    [95, 60, 30],
    [100, 0, 100]
]

console.log(arrayHorToObject(arrayHor))
console.log(arrayVertToObject(arrayVer))


/*
function buildWalls() {
createWallsH(0, 0, 45);
createWallsH(50, 0, 50);
createWallsH(20, 10, 10);
createWallsH(45, 10, 5);
createWallsH(70, 10, 10);
createWallsH(85, 10, 10);
createWallsH(0, 20, 10);
createWallsH(20, 20, 5);
createWallsH(50, 20, 15);
createWallsH(80, 20, 20);
createWallsH(25, 30, 5);
createWallsH(35, 30, 5);
createWallsH(45, 30, 10);
createWallsH(60, 30, 10);
createWallsH(75, 30, 5);
createWallsH(90, 30, 5);
createWallsH(5, 40, 20);
createWallsH(30, 40, 5);
createWallsH(40, 40, 10);
createWallsH(65, 40, 10);
createWallsH(90, 40, 10);
createWallsH(90, 40, 10);
createWallsH(5, 50, 10)
createWallsH(25, 50, 5)
createWallsH(35, 50, 5)
createWallsH(45, 50, 20)
createWallsH(75, 50, 5)
createWallsH(85, 50, 10)
createWallsH(10, 60, 15)
createWallsH(30, 60, 25)
createWallsH(65, 60, 5)
createWallsH(80, 60, 15)
createWallsH(5, 70, 5)
createWallsH(15, 70, 5)
createWallsH(30, 70, 10)
createWallsH(50, 70, 10)
createWallsH(70, 70, 15)
createWallsH(5, 80, 5)
createWallsH(20, 80, 5)
createWallsH(40, 80, 20)
createWallsH(65, 80, 15)
createWallsH(10, 90, 25)
createWallsH(10, 90, 25)
createWallsH(45, 90, 10)
createWallsH(60, 90, 15)
createWallsH(80, 90, 5)
createWallsH(0, 100, 50)
createWallsH(55, 100, 45)

createWallsV(0, 0, 100)
createWallsV(5, 0, 10)
createWallsV(5, 30, 10)
createWallsV(5, 50, 30)
createWallsV(5, 90, 10)
createWallsV(10, 10, 30)
createWallsV(10, 80, 10)
createWallsV(15, 0, 30)
createWallsV(15, 60, 20)
createWallsV(20, 20, 40)
createWallsV(25, 60, 30)
createWallsV(30, 10, 40)
createWallsV(30, 70, 10)
createWallsV(35, 10, 30)
createWallsV(35, 50, 10)
createWallsV(35, 80, 10)
createWallsV(40, 0, 30)
createWallsV(40, 40, 10)
createWallsV(40, 70, 30)
createWallsV(45, 10, 20)
createWallsV(45, 60, 20)
createWallsV(55, 10, 40)
createWallsV(55, 90, 10)
createWallsV(60, 0, 10)
createWallsV(60, 30, 10)
createWallsV(60, 50, 20)
createWallsV(60, 80, 10)
createWallsV(65, 0, 20)
createWallsV(65, 60, 20)
createWallsV(70, 20, 40)
createWallsV(75, 10, 20)
createWallsV(75, 50, 20)
createWallsV(75, 80, 10)
createWallsV(80, 30, 30)
createWallsV(80, 90, 10)
createWallsV(85, 0, 10)
createWallsV(85, 20, 30)
createWallsV(85, 70, 20)
createWallsV(90, 30, 10)
createWallsV(90, 70, 30)
createWallsV(95, 60, 30)
createWallsV(100, 0, 101)

*/

