const Game = require("../../logic/gameMechanics/gameFunctions/Game");

// The createNewGame function assigns the currentGame variable to be a new instance of the class Game.

function createNewGame() {
  return new Game(2);
}

// The initialiseRound function calls the initialiseRound method on the current game.

function initialiseRound(game) {
  game.initialiseRound();
}

// The getPlayer function gets all of the information for specific player.

function getPlayer(game, index) {
  const { status, score, hand, discard, protected } = game.players[index];
  const player = { status, score, hand, discard, protection: protected };
  return player;
}

// The getDeck function gets the current game deck. Only the number of cards remaining actually needs to be sent.

function getDeck(game) {
  const { deck } = game;
  return deck;
}

// The play card function plays the card from a player's hand that they have chosen.

function playCard(game, card) {
  const turnPointer = game.calculateTurnPointer();
  const deck = game.deck;
  const player = game.players[turnPointer];
  const target =
    game.players[turnPointer].id === 0 ? game.players[1] : game.players[0];
  player.playCard(card, target, deck);
}

module.exports = {
  createNewGame,
  initialiseRound,
  getPlayer,
  getDeck,
  playCard,
};
