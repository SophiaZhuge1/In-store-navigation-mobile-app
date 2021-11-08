interface MapPoint {
  x: number;
  y: number;
  isItem: boolean;
}

const pointPositions: Array<MapPoint> = [
  // row 1
  { x: 60, y: 450, isItem: false },
  { x: 90, y: 450, isItem: true },
  { x: 120, y: 450, isItem: false },
  { x: 150, y: 450, isItem: false },
  { x: 200, y: 450, isItem: true },
  { x: 260, y: 450, isItem: true },
  { x: 320, y: 450, isItem: true },
  // row 2
  { x: 70, y: 430, isItem: true },
  { x: 100, y: 430, isItem: true },
  { x: 150, y: 430, isItem: false },
  { x: 200, y: 430, isItem: true },
  { x: 260, y: 430, isItem: true },
  { x: 320, y: 430, isItem: false },
  // row 3
  { x: 50, y: 410, isItem: false },
  { x: 150, y: 400, isItem: true },
  { x: 310, y: 400, isItem: true },
  { x: 330, y: 400, isItem: true },
  // row 4
  { x: 70, y: 400, isItem: true },
  { x: 100, y: 400, isItem: true },
  { x: 150, y: 370, isItem: false },
  // { x: 200, y: 370, isItem: true }, item 85!!!
  { x: 260, y: 370, isItem: true },
  { x: 310, y: 370, isItem: false },
  // row 6
  { x: 60, y: 380, isItem: false },
  { x: 100, y: 380, isItem: true },
  { x: 120, y: 380, isItem: false },
  { x: 150, y: 360, isItem: false },
  // row 7
  { x: 20, y: 350, isItem: false }, // startPoint
  { x: 70, y: 350, isItem: true },
  { x: 120, y: 350, isItem: true },
  { x: 150, y: 350, isItem: false },
  { x: 200, y: 350, isItem: true },
  { x: 260, y: 350, isItem: true },
  { x: 310, y: 350, isItem: false },
  // row 8
  { x: 60, y: 320, isItem: false },
  { x: 100, y: 320, isItem: true },
  { x: 130, y: 320, isItem: false },
  { x: 150, y: 320, isItem: true },
  { x: 310, y: 320, isItem: true },
  // row 9
  { x: 150, y: 290, isItem: false },
  { x: 200, y: 290, isItem: true },
  { x: 260, y: 290, isItem: true },
  { x: 310, y: 290, isItem: false },
  // row 10
  { x: 150, y: 260, isItem: false },
  { x: 200, y: 260, isItem: true },
  { x: 260, y: 260, isItem: true },
  { x: 310, y: 260, isItem: false },
  { x: 330, y: 260, isItem: true },
  // row 11
  { x: 150, y: 240, isItem: true },
  { x: 310, y: 240, isItem: true },
  // row 12
  { x: 150, y: 220, isItem: false },
  { x: 200, y: 220, isItem: true },
  { x: 260, y: 220, isItem: true },
  { x: 310, y: 220, isItem: false },
  { x: 330, y: 220, isItem: true },
  // row 13
  { x: 150, y: 190, isItem: false },
  { x: 200, y: 190, isItem: true },
  { x: 260, y: 190, isItem: true },
  { x: 310, y: 190, isItem: false },
  // row 14
  { x: 150, y: 170, isItem: true },
  { x: 310, y: 170, isItem: true },
  // row 15
  { x: 150, y: 140, isItem: false },
  { x: 200, y: 140, isItem: true },
  { x: 260, y: 140, isItem: true },
  { x: 310, y: 140, isItem: false },
  // row 16
  { x: 150, y: 110, isItem: false },
  { x: 200, y: 110, isItem: true },
  { x: 260, y: 110, isItem: true },
  { x: 310, y: 110, isItem: false },
  { x: 330, y: 110, isItem: true },
  // row 17
  { x: 150, y: 90, isItem: true },
  { x: 310, y: 90, isItem: true },
  { x: -Infinity, y: -Infinity, isItem: false }, // pos 72 isn't on the map
  // row 18
  { x: 150, y: 70, isItem: false },
  { x: 200, y: 70, isItem: true },
  { x: 260, y: 70, isItem: true },
  { x: 310, y: 70, isItem: false },
  { x: 330, y: 70, isItem: true },
  // row 19
  { x: 150, y: 40, isItem: false },
  { x: 200, y: 40, isItem: true },
  { x: 260, y: 40, isItem: true },
  { x: 310, y: 40, isItem: false },
  // row 20
  { x: -Infinity, y: -Infinity, isItem: false }, // pos 82 isn't on the map
  { x: -Infinity, y: -Infinity, isItem: false }, // pos 83 isn't on the map
  { x: -Infinity, y: -Infinity, isItem: false }, // pos 84 isn't on the map
  // missing position 85
  { x: 200, y: 370, isItem: true },
];

export default pointPositions;
