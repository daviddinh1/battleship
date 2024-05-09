import "./style.css";

class battleShip {
  constructor(length, hp, ifHit) {
    this.length = length;
    this.hp = 0;
    this.ifHit = false;
  }
  hit() {
    if (this.hp < this.length) {
      this.hp = this.hp + 1;
    }
    return this.hp;
  }
  isSunk() {
    if (this.hp === this.length) {
      return (this.ifHit = true);
    }
  }
}

class GameBoard {
  constructor() {
    this.grid = this.initializeGrid();
  }
  initializeGrid() {
    const rows = 10;
    const cols = 10;
    let gameB = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < cols; j++) {
        row.push(0);
      }
      gameB.push(row);
    }
    return gameB;
  }
}

module.exports = { battleShip, GameBoard };
