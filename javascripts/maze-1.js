const wallsEasy = [
    { type: 'horizontal', x: 0, y: 0, w: 45, h: 1, id: 1 },
    { type: 'horizontal', x: 50, y: 0, w: 50, h: 1, id: 2 },
    { type: 'horizontal', x: 20, y: 10, w: 10, h: 1, id: 3 },
    { type: 'horizontal', x: 45, y: 10, w: 5, h: 1, id: 4 },
    { type: 'horizontal', x: 70, y: 10, w: 10, h: 1, id: 5 },
    { type: 'horizontal', x: 85, y: 10, w: 10, h: 1, id: 6 },
    { type: 'horizontal', x: 0, y: 20, w: 10, h: 1, id: 7 },
    { type: 'horizontal', x: 20, y: 20, w: 5, h: 1, id: 8 },
    { type: 'horizontal', x: 50, y: 20, w: 15.5, h: 1, id: 9 },
    { type: 'horizontal', x: 80, y: 20, w: 20, h: 1, id: 10 },
    { type: 'horizontal', x: 25, y: 30, w: 5, h: 1, id: 11 },
    { type: 'horizontal', x: 35, y: 30, w: 5.5, h: 1, id: 12 },
    { type: 'horizontal', x: 45, y: 30, w: 10, h: 1, id: 13 },
    { type: 'horizontal', x: 60, y: 30, w: 10, h: 1, id: 14 },
    { type: 'horizontal', x: 75, y: 30, w: 5, h: 1, id: 15 },
    { type: 'horizontal', x: 90, y: 30, w: 5, h: 1, id: 16 },
    { type: 'horizontal', x: 5, y: 40, w: 20, h: 1, id: 17 },
    { type: 'horizontal', x: 30, y: 40, w: 5.5, h: 1, id: 18 },
    { type: 'horizontal', x: 40, y: 40, w: 10, h: 1, id: 19 },
    { type: 'horizontal', x: 65, y: 40, w: 10, h: 1, id: 20 },
    { type: 'horizontal', x: 90, y: 40, w: 10, h: 1, id: 21 },
    { type: 'horizontal', x: 90, y: 40, w: 10, h: 1, id: 22 },
    { type: 'horizontal', x: 5, y: 50, w: 10, h: 1, id: 23 },
    { type: 'horizontal', x: 25, y: 50, w: 5.5, h: 1, id: 24 },
    { type: 'horizontal', x: 35, y: 50, w: 5.5, h: 1, id: 25 },
    { type: 'horizontal', x: 45, y: 50, w: 20, h: 1, id: 26 },
    { type: 'horizontal', x: 75, y: 50, w: 5, h: 1, id: 27 },
    { type: 'horizontal', x: 85, y: 50, w: 10, h: 1, id: 28 },
    { type: 'horizontal', x: 10, y: 60, w: 15, h: 1, id: 29 },
    { type: 'horizontal', x: 30, y: 60, w: 25, h: 1, id: 30 },
    { type: 'horizontal', x: 65, y: 60, w: 5.5, h: 1, id: 31 },
    { type: 'horizontal', x: 80, y: 60, w: 15, h: 1, id: 32 },
    { type: 'horizontal', x: 5, y: 70, w: 5, h: 1, id: 33 },
    { type: 'horizontal', x: 15, y: 70, w: 5, h: 1, id: 34 },
    { type: 'horizontal', x: 30, y: 70, w: 10, h: 1, id: 35 },
    { type: 'horizontal', x: 50, y: 70, w: 10.5, h: 1, id: 36 },
    { type: 'horizontal', x: 70, y: 70, w: 15, h: 1, id: 37 },
    { type: 'horizontal', x: 5, y: 80, w: 5, h: 1, id: 38 },
    { type: 'horizontal', x: 20, y: 80, w: 5, h: 1, id: 39 },
    { type: 'horizontal', x: 40, y: 80, w: 20, h: 1, id: 40 },
    { type: 'horizontal', x: 65, y: 80, w: 15, h: 1, id: 41 },
    { type: 'horizontal', x: 10, y: 90, w: 25.5, h: 1, id: 42 },
    { type: 'horizontal', x: 45, y: 90, w: 10, h: 1, id: 43 },
    { type: 'horizontal', x: 60, y: 90, w: 15.5, h: 1, id: 44 },
    { type: 'horizontal', x: 80, y: 90, w: 5.5, h: 1, id: 45 },
    { type: 'horizontal', x: 0, y: 100, w: 50, h: 1, id: 46 },
    { type: 'horizontal', x: 55, y: 100, w: 45, h: 1, id: 47 },
    { type: 'vertical', x: 0, y: 0, w: 0.5, h: 100, id: 48 },
    { type: 'vertical', x: 5, y: 0, w: 0.5, h: 10, id: 49 },
    { type: 'vertical', x: 5, y: 30, w: 0.5, h: 10, id: 50 },
    { type: 'vertical', x: 5, y: 50, w: 0.5, h: 30, id: 51 },
    { type: 'vertical', x: 5, y: 90, w: 0.5, h: 10, id: 52 },
    { type: 'vertical', x: 10, y: 10, w: 0.5, h: 30, id: 53 },
    { type: 'vertical', x: 10, y: 80, w: 0.5, h: 10, id: 54 },
    { type: 'vertical', x: 15, y: 0, w: 0.5, h: 30, id: 55 },
    { type: 'vertical', x: 15, y: 60, w: 0.5, h: 20, id: 56 },
    { type: 'vertical', x: 20, y: 20, w: 0.5, h: 40, id: 57 },
    { type: 'vertical', x: 25, y: 60, w: 0.5, h: 30, id: 58 },
    { type: 'vertical', x: 30, y: 10, w: 0.5, h: 40, id: 59 },
    { type: 'vertical', x: 30, y: 70, w: 0.5, h: 10, id: 60 },
    { type: 'vertical', x: 35, y: 10, w: 0.5, h: 30, id: 61 },
    { type: 'vertical', x: 35, y: 50, w: 0.5, h: 10, id: 62 },
    { type: 'vertical', x: 35, y: 80, w: 0.5, h: 10, id: 63 },
    { type: 'vertical', x: 40, y: 0, w: 0.5, h: 30, id: 64 },
    { type: 'vertical', x: 40, y: 40, w: 0.5, h: 10, id: 65 },
    { type: 'vertical', x: 40, y: 70, w: 0.5, h: 30, id: 66 },
    { type: 'vertical', x: 45, y: 10, w: 0.5, h: 20, id: 67 },
    { type: 'vertical', x: 45, y: 60, w: 0.5, h: 20, id: 68 },
    { type: 'vertical', x: 55, y: 10, w: 0.5, h: 40, id: 69 },
    { type: 'vertical', x: 55, y: 90, w: 0.5, h: 10, id: 70 },
    { type: 'vertical', x: 60, y: 0, w: 0.5, h: 10, id: 71 },
    { type: 'vertical', x: 60, y: 30, w: 0.5, h: 10, id: 72 },
    { type: 'vertical', x: 60, y: 50, w: 0.5, h: 20, id: 73 },
    { type: 'vertical', x: 60, y: 80, w: 0.5, h: 10, id: 74 },
    { type: 'vertical', x: 65, y: 0, w: 0.5, h: 20, id: 75 },
    { type: 'vertical', x: 65, y: 60, w: 0.5, h: 20, id: 76 },
    { type: 'vertical', x: 70, y: 20, w: 0.5, h: 40, id: 77 },
    { type: 'vertical', x: 75, y: 10, w: 0.5, h: 20, id: 78 },
    { type: 'vertical', x: 75, y: 50, w: 0.5, h: 20, id: 79 },
    { type: 'vertical', x: 75, y: 80, w: 0.5, h: 10, id: 80 },
    { type: 'vertical', x: 80, y: 30, w: 0.5, h: 30, id: 81 },
    { type: 'vertical', x: 80, y: 90, w: 0.5, h: 10, id: 82 },
    { type: 'vertical', x: 85, y: 0, w: 0.5, h: 10, id: 83 },
    { type: 'vertical', x: 85, y: 20, w: 0.5, h: 30, id: 84 },
    { type: 'vertical', x: 85, y: 70, w: 0.5, h: 20, id: 85 },
    { type: 'vertical', x: 90, y: 30, w: 0.5, h: 10, id: 86 },
    { type: 'vertical', x: 90, y: 70, w: 0.5, h: 30, id: 87 },
    { type: 'vertical', x: 95, y: 60, w: 0.5, h: 30, id: 88 },
    { type: 'vertical', x: 100, y: 0, w: 0.5, h: 100, id: 89 }
]


const wallsMedium = [
    { type: 'horizontal', x: 0, y: 0, w: 45, h: 1, id: 1 },
    { type: 'horizontal', x: 50, y: 0, w: 50, h: 1, id: 2 },
    { type: 'horizontal', x: 20, y: 10, w: 10, h: 1, id: 3 },
    { type: 'horizontal', x: 45, y: 10, w: 5, h: 1, id: 4 },
    { type: 'horizontal', x: 70, y: 10, w: 10, h: 1, id: 5 },
    { type: 'horizontal', x: 85, y: 10, w: 10, h: 1, id: 6 },
    { type: 'horizontal', x: 0, y: 20, w: 10, h: 1, id: 7 },
    { type: 'horizontal', x: 20, y: 20, w: 5, h: 1, id: 8 },
    { type: 'horizontal', x: 50, y: 20, w: 15.5, h: 1, id: 9 },
    { type: 'horizontal', x: 80, y: 20, w: 20, h: 1, id: 10 },
    { type: 'horizontal', x: 25, y: 30, w: 5, h: 1, id: 11 },
    { type: 'horizontal', x: 35, y: 30, w: 5.5, h: 1, id: 12 },
    { type: 'horizontal', x: 45, y: 30, w: 10, h: 1, id: 13 },
    { type: 'horizontal', x: 60, y: 30, w: 10, h: 1, id: 14 },
    { type: 'horizontal', x: 75, y: 30, w: 5, h: 1, id: 15 },
    { type: 'horizontal', x: 90, y: 30, w: 5, h: 1, id: 16 },
    { type: 'horizontal', x: 5, y: 40, w: 20, h: 1, id: 17 },
    { type: 'horizontal', x: 30, y: 40, w: 5.5, h: 1, id: 18 },
    { type: 'horizontal', x: 40, y: 40, w: 10, h: 1, id: 19 },
    { type: 'horizontal', x: 65, y: 40, w: 10, h: 1, id: 20 },
    { type: 'horizontal', x: 90, y: 40, w: 10, h: 1, id: 21 },
    { type: 'horizontal', x: 90, y: 40, w: 10, h: 1, id: 22 },
    { type: 'horizontal', x: 5, y: 50, w: 10, h: 1, id: 23 },
    { type: 'horizontal', x: 25, y: 50, w: 5.5, h: 1, id: 24 },
    { type: 'horizontal', x: 35, y: 50, w: 5.5, h: 1, id: 25 },
    { type: 'horizontal', x: 45, y: 50, w: 20, h: 1, id: 26 },
    { type: 'horizontal', x: 75, y: 50, w: 5, h: 1, id: 27 },
    { type: 'horizontal', x: 85, y: 50, w: 10, h: 1, id: 28 },
    { type: 'horizontal', x: 10, y: 60, w: 15, h: 1, id: 29 },
    { type: 'horizontal', x: 30, y: 60, w: 25, h: 1, id: 30 },
    { type: 'horizontal', x: 65, y: 60, w: 5.5, h: 1, id: 31 },
    { type: 'horizontal', x: 80, y: 60, w: 15, h: 1, id: 32 },
    { type: 'horizontal', x: 5, y: 70, w: 5, h: 1, id: 33 },
    { type: 'horizontal', x: 15, y: 70, w: 5, h: 1, id: 34 },
    { type: 'horizontal', x: 30, y: 70, w: 10, h: 1, id: 35 },
    { type: 'horizontal', x: 50, y: 70, w: 10.5, h: 1, id: 36 },
    { type: 'horizontal', x: 70, y: 70, w: 15, h: 1, id: 37 },
    { type: 'horizontal', x: 5, y: 80, w: 5, h: 1, id: 38 },
    { type: 'horizontal', x: 20, y: 80, w: 5, h: 1, id: 39 },
    { type: 'horizontal', x: 40, y: 80, w: 20, h: 1, id: 40 },
    { type: 'horizontal', x: 65, y: 80, w: 15, h: 1, id: 41 },
    { type: 'horizontal', x: 10, y: 90, w: 25.5, h: 1, id: 42 },
    { type: 'horizontal', x: 45, y: 90, w: 10, h: 1, id: 43 },
    { type: 'horizontal', x: 60, y: 90, w: 15.5, h: 1, id: 44 },
    { type: 'horizontal', x: 80, y: 90, w: 5.5, h: 1, id: 45 },
    { type: 'horizontal', x: 0, y: 100, w: 50, h: 1, id: 46 },
    { type: 'horizontal', x: 55, y: 100, w: 45, h: 1, id: 47 },
    { type: 'vertical', x: 0, y: 0, w: 0.5, h: 100, id: 48 },
    { type: 'vertical', x: 5, y: 0, w: 0.5, h: 10, id: 49 },
    { type: 'vertical', x: 5, y: 30, w: 0.5, h: 10, id: 50 },
    { type: 'vertical', x: 5, y: 50, w: 0.5, h: 30, id: 51 },
    { type: 'vertical', x: 5, y: 90, w: 0.5, h: 10, id: 52 },
    { type: 'vertical', x: 10, y: 10, w: 0.5, h: 30, id: 53 },
    { type: 'vertical', x: 10, y: 80, w: 0.5, h: 10, id: 54 },
    { type: 'vertical', x: 15, y: 0, w: 0.5, h: 30, id: 55 },
    { type: 'vertical', x: 15, y: 60, w: 0.5, h: 20, id: 56 },
    { type: 'vertical', x: 20, y: 20, w: 0.5, h: 40, id: 57 },
    { type: 'vertical', x: 25, y: 60, w: 0.5, h: 30, id: 58 },
    { type: 'vertical', x: 30, y: 10, w: 0.5, h: 40, id: 59 },
    { type: 'vertical', x: 30, y: 70, w: 0.5, h: 10, id: 60 },
    { type: 'vertical', x: 35, y: 10, w: 0.5, h: 30, id: 61 },
    { type: 'vertical', x: 35, y: 50, w: 0.5, h: 10, id: 62 },
    { type: 'vertical', x: 35, y: 80, w: 0.5, h: 10, id: 63 },
    { type: 'vertical', x: 40, y: 0, w: 0.5, h: 30, id: 64 },
    { type: 'vertical', x: 40, y: 40, w: 0.5, h: 10, id: 65 },
    { type: 'vertical', x: 40, y: 70, w: 0.5, h: 30, id: 66 },
    { type: 'vertical', x: 45, y: 10, w: 0.5, h: 20, id: 67 },
    { type: 'vertical', x: 45, y: 60, w: 0.5, h: 20, id: 68 },
    { type: 'vertical', x: 55, y: 10, w: 0.5, h: 40, id: 69 },
    { type: 'vertical', x: 55, y: 90, w: 0.5, h: 10, id: 70 },
    { type: 'vertical', x: 60, y: 0, w: 0.5, h: 10, id: 71 },
    { type: 'vertical', x: 60, y: 30, w: 0.5, h: 10, id: 72 },
    { type: 'vertical', x: 60, y: 50, w: 0.5, h: 20, id: 73 },
    { type: 'vertical', x: 60, y: 80, w: 0.5, h: 10, id: 74 },
    { type: 'vertical', x: 65, y: 0, w: 0.5, h: 20, id: 75 },
    { type: 'vertical', x: 65, y: 60, w: 0.5, h: 20, id: 76 },
    { type: 'vertical', x: 70, y: 20, w: 0.5, h: 40, id: 77 },
    { type: 'vertical', x: 75, y: 10, w: 0.5, h: 20, id: 78 },
    { type: 'vertical', x: 75, y: 50, w: 0.5, h: 20, id: 79 },
    { type: 'vertical', x: 75, y: 80, w: 0.5, h: 10, id: 80 },
    { type: 'vertical', x: 80, y: 30, w: 0.5, h: 30, id: 81 },
    { type: 'vertical', x: 80, y: 90, w: 0.5, h: 10, id: 82 },
    { type: 'vertical', x: 85, y: 0, w: 0.5, h: 10, id: 83 },
    { type: 'vertical', x: 85, y: 20, w: 0.5, h: 30, id: 84 },
    { type: 'vertical', x: 85, y: 70, w: 0.5, h: 20, id: 85 },
    { type: 'vertical', x: 90, y: 30, w: 0.5, h: 10, id: 86 },
    { type: 'vertical', x: 90, y: 70, w: 0.5, h: 30, id: 87 },
    { type: 'vertical', x: 95, y: 60, w: 0.5, h: 30, id: 88 },
    { type: 'vertical', x: 100, y: 0, w: 0.5, h: 100, id: 89 }
]

const wallsHard = [
    { type: 'horizontal', x: 0, y: 0, w: 45, h: 1, id: 1 },
    { type: 'horizontal', x: 50, y: 0, w: 50, h: 1, id: 2 },
    { type: 'horizontal', x: 20, y: 10, w: 10, h: 1, id: 3 },
    { type: 'horizontal', x: 45, y: 10, w: 5, h: 1, id: 4 },
    { type: 'horizontal', x: 70, y: 10, w: 10, h: 1, id: 5 },
    { type: 'horizontal', x: 85, y: 10, w: 10, h: 1, id: 6 },
    { type: 'horizontal', x: 0, y: 20, w: 10, h: 1, id: 7 },
    { type: 'horizontal', x: 20, y: 20, w: 5, h: 1, id: 8 },
    { type: 'horizontal', x: 50, y: 20, w: 15.5, h: 1, id: 9 },
    { type: 'horizontal', x: 80, y: 20, w: 20, h: 1, id: 10 },
    { type: 'horizontal', x: 25, y: 30, w: 5, h: 1, id: 11 },
    { type: 'horizontal', x: 35, y: 30, w: 5.5, h: 1, id: 12 },
    { type: 'horizontal', x: 45, y: 30, w: 10, h: 1, id: 13 },
    { type: 'horizontal', x: 60, y: 30, w: 10, h: 1, id: 14 },
    { type: 'horizontal', x: 75, y: 30, w: 5, h: 1, id: 15 },
    { type: 'horizontal', x: 90, y: 30, w: 5, h: 1, id: 16 },
    { type: 'horizontal', x: 5, y: 40, w: 20, h: 1, id: 17 },
    { type: 'horizontal', x: 30, y: 40, w: 5.5, h: 1, id: 18 },
    { type: 'horizontal', x: 40, y: 40, w: 10, h: 1, id: 19 },
    { type: 'horizontal', x: 65, y: 40, w: 10, h: 1, id: 20 },
    { type: 'horizontal', x: 90, y: 40, w: 10, h: 1, id: 21 },
    { type: 'horizontal', x: 90, y: 40, w: 10, h: 1, id: 22 },
    { type: 'horizontal', x: 5, y: 50, w: 10, h: 1, id: 23 },
    { type: 'horizontal', x: 25, y: 50, w: 5.5, h: 1, id: 24 },
    { type: 'horizontal', x: 35, y: 50, w: 5.5, h: 1, id: 25 },
    { type: 'horizontal', x: 45, y: 50, w: 20, h: 1, id: 26 },
    { type: 'horizontal', x: 75, y: 50, w: 5, h: 1, id: 27 },
    { type: 'horizontal', x: 85, y: 50, w: 10, h: 1, id: 28 },
    { type: 'horizontal', x: 10, y: 60, w: 15, h: 1, id: 29 },
    { type: 'horizontal', x: 30, y: 60, w: 25, h: 1, id: 30 },
    { type: 'horizontal', x: 65, y: 60, w: 5.5, h: 1, id: 31 },
    { type: 'horizontal', x: 80, y: 60, w: 15, h: 1, id: 32 },
    { type: 'horizontal', x: 5, y: 70, w: 5, h: 1, id: 33 },
    { type: 'horizontal', x: 15, y: 70, w: 5, h: 1, id: 34 },
    { type: 'horizontal', x: 30, y: 70, w: 10, h: 1, id: 35 },
    { type: 'horizontal', x: 50, y: 70, w: 10.5, h: 1, id: 36 },
    { type: 'horizontal', x: 70, y: 70, w: 15, h: 1, id: 37 },
    { type: 'horizontal', x: 5, y: 80, w: 5, h: 1, id: 38 },
    { type: 'horizontal', x: 20, y: 80, w: 5, h: 1, id: 39 },
    { type: 'horizontal', x: 40, y: 80, w: 20, h: 1, id: 40 },
    { type: 'horizontal', x: 65, y: 80, w: 15, h: 1, id: 41 },
    { type: 'horizontal', x: 10, y: 90, w: 25.5, h: 1, id: 42 },
    { type: 'horizontal', x: 45, y: 90, w: 10, h: 1, id: 43 },
    { type: 'horizontal', x: 60, y: 90, w: 15.5, h: 1, id: 44 },
    { type: 'horizontal', x: 80, y: 90, w: 5.5, h: 1, id: 45 },
    { type: 'horizontal', x: 0, y: 100, w: 50, h: 1, id: 46 },
    { type: 'horizontal', x: 55, y: 100, w: 45, h: 1, id: 47 },
    { type: 'vertical', x: 0, y: 0, w: 0.5, h: 100, id: 48 },
    { type: 'vertical', x: 5, y: 0, w: 0.5, h: 10, id: 49 },
    { type: 'vertical', x: 5, y: 30, w: 0.5, h: 10, id: 50 },
    { type: 'vertical', x: 5, y: 50, w: 0.5, h: 30, id: 51 },
    { type: 'vertical', x: 5, y: 90, w: 0.5, h: 10, id: 52 },
    { type: 'vertical', x: 10, y: 10, w: 0.5, h: 30, id: 53 },
    { type: 'vertical', x: 10, y: 80, w: 0.5, h: 10, id: 54 },
    { type: 'vertical', x: 15, y: 0, w: 0.5, h: 30, id: 55 },
    { type: 'vertical', x: 15, y: 60, w: 0.5, h: 20, id: 56 },
    { type: 'vertical', x: 20, y: 20, w: 0.5, h: 40, id: 57 },
    { type: 'vertical', x: 25, y: 60, w: 0.5, h: 30, id: 58 },
    { type: 'vertical', x: 30, y: 10, w: 0.5, h: 40, id: 59 },
    { type: 'vertical', x: 30, y: 70, w: 0.5, h: 10, id: 60 },
    { type: 'vertical', x: 35, y: 10, w: 0.5, h: 30, id: 61 },
    { type: 'vertical', x: 35, y: 50, w: 0.5, h: 10, id: 62 },
    { type: 'vertical', x: 35, y: 80, w: 0.5, h: 10, id: 63 },
    { type: 'vertical', x: 40, y: 0, w: 0.5, h: 30, id: 64 },
    { type: 'vertical', x: 40, y: 40, w: 0.5, h: 10, id: 65 },
    { type: 'vertical', x: 40, y: 70, w: 0.5, h: 30, id: 66 },
    { type: 'vertical', x: 45, y: 10, w: 0.5, h: 20, id: 67 },
    { type: 'vertical', x: 45, y: 60, w: 0.5, h: 20, id: 68 },
    { type: 'vertical', x: 55, y: 10, w: 0.5, h: 40, id: 69 },
    { type: 'vertical', x: 55, y: 90, w: 0.5, h: 10, id: 70 },
    { type: 'vertical', x: 60, y: 0, w: 0.5, h: 10, id: 71 },
    { type: 'vertical', x: 60, y: 30, w: 0.5, h: 10, id: 72 },
    { type: 'vertical', x: 60, y: 50, w: 0.5, h: 20, id: 73 },
    { type: 'vertical', x: 60, y: 80, w: 0.5, h: 10, id: 74 },
    { type: 'vertical', x: 65, y: 0, w: 0.5, h: 20, id: 75 },
    { type: 'vertical', x: 65, y: 60, w: 0.5, h: 20, id: 76 },
    { type: 'vertical', x: 70, y: 20, w: 0.5, h: 40, id: 77 },
    { type: 'vertical', x: 75, y: 10, w: 0.5, h: 20, id: 78 },
    { type: 'vertical', x: 75, y: 50, w: 0.5, h: 20, id: 79 },
    { type: 'vertical', x: 75, y: 80, w: 0.5, h: 10, id: 80 },
    { type: 'vertical', x: 80, y: 30, w: 0.5, h: 30, id: 81 },
    { type: 'vertical', x: 80, y: 90, w: 0.5, h: 10, id: 82 },
    { type: 'vertical', x: 85, y: 0, w: 0.5, h: 10, id: 83 },
    { type: 'vertical', x: 85, y: 20, w: 0.5, h: 30, id: 84 },
    { type: 'vertical', x: 85, y: 70, w: 0.5, h: 20, id: 85 },
    { type: 'vertical', x: 90, y: 30, w: 0.5, h: 10, id: 86 },
    { type: 'vertical', x: 90, y: 70, w: 0.5, h: 30, id: 87 },
    { type: 'vertical', x: 95, y: 60, w: 0.5, h: 30, id: 88 },
    { type: 'vertical', x: 100, y: 0, w: 0.5, h: 100, id: 89 }
]


function addIdWall (array) {
    for (let i = 0; i < array.length; i++) {
        array[i]["id"] = i+1
    }
    return array
}

// console.log(addIdWall(walls))



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



// HORIZONTAL

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


// VERTICAL

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

// console.log(arrayHorToObject(arrayHor))
// console.log(arrayVertToObject(arrayVer))


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

