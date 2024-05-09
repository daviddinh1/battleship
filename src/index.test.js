const { battleShip, GameBoard } = require("./index.js");

test("does the battleShip class exist", () => {
  expect(battleShip).toBeDefined();
});

test("does the battleShip class contain the units we are using", () => {
  const bs = new battleShip(3);
  expect(bs.length).toBe(3);
  expect(bs.hp).toBe(0);
});

test("does the hit function exist in the battleShip class", () => {
  const bs = new battleShip(3);
  expect(bs.hit()).toBe(1);
});

test("does the hit function decrease the HP in the battleship class", () => {
  const bs = new battleShip(3);
  bs.hit();
  bs.hit();
  expect(bs.hp).toBe(2);
});

test("does the sunk function check if the ship has sunk", () => {
  const bs = new battleShip(4);
  bs.hit();
  bs.hit();
  bs.hit();
  bs.hit();
  expect(bs.isSunk()).toBe(true);
});

test("does the gameBoard class exist", () => {
  expect(GameBoard).toBeDefined();
});