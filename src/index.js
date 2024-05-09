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

class GameBoard {}

module.exports = { battleShip, GameBoard };
