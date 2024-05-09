const { BattleShip, GameBoard } = require("./classes.js");

describe("BattleShip", () => {
  it("should correctly record hits", () => {
    const ship = new BattleShip(3);
    ship.hit();
    expect(ship.hp).toBe(1);
    ship.hit();
    expect(ship.hp).toBe(2);
    ship.hit();
    expect(ship.hp).toBe(3);
  });

  it("should not allow hits beyond its length", () => {
    const ship = new BattleShip(2);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.hp).toBe(2);
  });

  it("should correctly determine if the ship is sunk", () => {
    const ship = new BattleShip(2);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});

describe("GameBoard", () => {
  let gameBoard;

  beforeEach(() => {
    gameBoard = new GameBoard();
  });

  it("should initialize a 10x10 grid", () => {
    expect(gameBoard.grid.length).toBe(10);
    expect(gameBoard.grid[0].length).toBe(10);
  });

  it("should place ships at the specified coordinates", () => {
    gameBoard.place(0, 0, 3, true);
    expect(gameBoard.grid[0][0]).toBeInstanceOf(BattleShip);
    expect(gameBoard.grid[0][1]).toBeInstanceOf(BattleShip);
    expect(gameBoard.grid[0][2]).toBeInstanceOf(BattleShip);
  });

  it("should record a hit on a ship", () => {
    gameBoard.place(0, 0, 3, true);
    const result = gameBoard.receiveAttack(0, 0);
    expect(result).toBe(true);
    expect(gameBoard.grid[0][0]).toBe("h");
  });

  it("should record a missed attack", () => {
    const result = gameBoard.receiveAttack(0, 0);
    expect(result).toBe(false);
    expect(gameBoard.grid[0][0]).toBe("m");
  });

  it("should report if all ships are sunk", () => {
    gameBoard.place(0, 0, 1, true);
    gameBoard.receiveAttack(0, 0);
    expect(gameBoard.allShipsSunk()).toBe(true);

    gameBoard.place(1, 0, 2, true);
    gameBoard.receiveAttack(1, 0);
    gameBoard.receiveAttack(1, 1);
    expect(gameBoard.allShipsSunk()).toBe(true);
  });

  it("should report if not all ships are sunk", () => {
    gameBoard.place(0, 0, 2, true);
    gameBoard.receiveAttack(0, 0);
    expect(gameBoard.allShipsSunk()).toBe(false);
  });
});
