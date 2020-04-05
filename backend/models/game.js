import Game from "../../logic/gameMechanics/gameFunctions/Game";

let currentGame = new Game();

function createNewGame() {
  currentGame = new Game();
}

function getCurrentGame() {
  return currentGame;
}
