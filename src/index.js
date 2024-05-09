import "./style.css";

const { BattleShip, GameBoard, Player } = require("./classes");

const player1 = new Player(true);
const player2 = new Player(false);

player1.gameboard.place(2, 2, 3, true);
player1.gameboard.place(5, 0, 3, false);

player2.gameboard.place(3, 2, 3, true);
player2.gameboard.place(5, 1, 3, false);

/*
player1.gameboard.receiveAttack(2, 2);
player1.gameboard.receiveAttack(2, 3);
player1.gameboard.receiveAttack(2, 4);
player1.gameboard.receiveAttack(5, 0);
player1.gameboard.receiveAttack(6, 0);
player1.gameboard.receiveAttack(7, 0);
*/

/*
console.log(player1.gameboard.grid);
console.log(player1.gameboard.allShipsSunk());
*/

//first create the grids
const grid1 = document.querySelector("#playerGrid");
const grid2 = document.querySelector("#compGrid");
grid1.setAttribute("id", "playerGrid");

for (let i = 0; i < 100; i++) {
  const gridBlock = document.createElement("div");
  gridBlock.classList.add("gridBlock");
  grid1.appendChild(gridBlock);
}

for (let i = 0; i < 100; i++) {
  const gridBlock = document.createElement("div");
  gridBlock.classList.add("gridBlock");
  grid2.appendChild(gridBlock);
}
