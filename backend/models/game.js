import Game from "../../logic/gameMechanics/gameFunctions/Game";

let currentGame = new Game();

// The createNewGame function assigns the currentGame variable to be a new instance of the class Game.

function createNewGame() {
  currentGame = new Game();
}

// The initialiseRound function calls the initialiseRound method on the current game.

function initialiseRound() {
  currentGame.initialiseRound();
}

// The getPlayer function gets all of the information for specific player.

function getPlayer(index) {
  const { status, score, hand, discard, protected } = currentGame.players[
    index
  ];
  const player = { status, score, hand, discard, protection: protected };
  return player;
}

// The getDeck function gets the current game deck. Only the number of cards remaining actually needs to be sent.

function getDeck() {
  const { deck } = currentGame.deck;
  return deck;
}

// The play card function plays the card from a player's hand that they have chosen.

function playCard(card) {
  const turnPointer = currentGame.calculateTurnPointer();
  const deck = currentGame.deck;
  const player = currentGame.players[turnPointer];
  const target =
    currentGame.players[turnPointer].id === 0
      ? currentGame.players[1]
      : currentGame.players[0];
  player.playCard(card, target, deck);
}

module.exports = {
  createNewGame,
  initialiseRound,
  getPlayer,
  getDeck,
  playCard,
};
