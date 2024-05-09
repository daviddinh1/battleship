class BattleShip {
  constructor(length) {
    this.length = length;
    this.hp = 0;
    this.ifHit = false;
  }

  hit() {
    if (this.hp < this.length) {
      this.hp += 1;
    }
    this.isSunk();
    return this.hp;
  }

  isSunk() {
    if (this.hp === this.length) {
      this.ifHit = true;
    }
    return this.ifHit;
  }
}

class GameBoard {
  constructor() {
    this.grid = this.initializeGrid();
    this.ships = [];
  }

  initializeGrid() {
    const rows = 10;
    const cols = 10;
    return Array.from({ length: rows }, () => Array(cols).fill(null));
  }

  place(x, y, length, horizontal = true) {
    const ship = new BattleShip(length);
    this.ships.push(ship);

    for (let i = 0; i < length; i++) {
      if (horizontal) {
        this.grid[x][y + i] = ship; //remember this you can assign another class node to this one
      } else {
        this.grid[x + i][y] = ship;
      }
    }
  }

  receiveAttack(x, y) {
    const cell = this.grid[x][y];
    if (cell instanceof BattleShip) {
      //checks if node exist
      cell.hit();
      this.grid[x][y] = "h"; // Mark the grid cell as hit
      return true;
    } else if (this.grid[x][y] === null) {
      this.grid[x][y] = "m"; // Mark the grid cell as miss
      return false;
    } else if (this.grid[x][y] === "h" || this.grid[x][y] === "m") {
      // Cell was already attacked
      return false;
    }
  }

  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}

class Player {
  constructor(opponent) {
    this.opponent = opponent;
    this.gameboard = new GameBoard();
  }
  attack(opponent, x, y) {
    return this.gameboard.receiveAttack(x, y);
  }
  randomAttack(opponent) {
    let x, y;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (
      opponent.gameboard.grid[x][y] === "h" ||
      opponent.gameboard.grid[x][y] === "m"
    );
    return this.attack(opponent, x, y);
  }
}
//every other player can use the actions of the gameboard
//give both players gameboard grids
module.exports = { BattleShip, GameBoard, Player };
