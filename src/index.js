import "./style.css";

const { BattleShip, GameBoard, Player } = require("./classes");

const player1 = new Player(true);
const player2 = new Player(false);

const btn = document.querySelector("#btn");

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

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const gridBlock = document.createElement("div");
    gridBlock.classList.add("gridBlock");
    gridBlock.dataset.row = i;
    gridBlock.dataset.col = j;
    randCord(btn, gridBlock);

    grid1.appendChild(gridBlock);
  }
}

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const gridBlock = document.createElement("div");
    gridBlock.classList.add("gridBlock");
    gridBlock.dataset.row = i;
    gridBlock.dataset.col = j;
    addHoverEffect(gridBlock);
    gridBlock.dataset.clicked = "false"; // Initialize clicked state

    gridBlock.addEventListener("click", gameFunctionalityPlayer);
    gridBlock.addEventListener("click", gameFunctionalityComp);
    grid2.appendChild(gridBlock);
  }
}

function addHoverEffect(block) {
  block.addEventListener("mouseover", () => {
    if (block.dataset.clicked !== "true") {
      block.style.backgroundColor = "lightgreen";
    }
  });

  block.addEventListener("mouseout", () => {
    if (block.dataset.clicked !== "true") {
      block.style.backgroundColor = "white";
    }
  });
}
//hover over them and click them to place a attack
function gameFunctionalityPlayer(event) {
  //figure out a way to not include it here or seperate the game logic?
  let x = event.target.dataset.row;
  let y = event.target.dataset.col;
  player1.gameboard.receiveAttack(x, y);
  if (player1.gameboard.grid[x][y] == "h") {
    event.target.style.backgroundColor = "#FFCCCB";
  } else {
    event.target.style.backgroundColor = "lightgrey";
  }
  event.target.dataset.clicked = "true"; // Mark as clicked
  console.log(player1.gameboard.grid);
  gameEnd();
}

function gameFunctionalityComp() {
  let x, y;
  x = Math.floor(Math.random() * 10);
  y = Math.floor(Math.random() * 10);
  player2.attack(x, y); //figure out how to get row/col so you can color it
  let element = document.querySelector(
    `.gridBlock[data-row='${x}'][data-col='${y}']`
  );
  if (player2.gameboard.grid[x][y] == "h") {
    element.style.backgroundColor = "#FFCCCB";
  } else {
    element.style.backgroundColor = "lightgrey";
  }
  console.log(player2.gameboard.grid);
  gameEnd();
}

function gameEnd() {
  //add pop up
  if (player1.gameboard.allShipsSunk() === true) {
    console.log("you won!!");
  } else if (player2.gameboard.allShipsSunk() === true) {
    console.log("you lost!");
  }
}

function randCord(btn, gridBlock) {
  btn.addEventListener("click", () => {
    let x, y, z;

    for (let i = 0; i < 4; i++) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      z = Math.floor(Math.random() * (3 - 1) + 1);
      if (i % 2 == 0) {
        player1.gameboard.place(x, y, z, true);
        for (let i = 0; i < z; i++) {
          let element = document.querySelector(
            `.gridBlock[data-row='${x}'][data-col='${y + i}']`
          );
          element.style.backgroundColor = "green";
        }
      } else {
        player1.gameboard.place(x, y, z, false);
        for (let i = 0; i < z; i++) {
          let element = document.querySelector(
            `.gridBlock[data-row='${x + i}'][data-col='${y}']`
          );
          element.style.backgroundColor = "green";
        }
      }
    }
  });
}
