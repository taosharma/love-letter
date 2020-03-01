const Player = require("./Player.js");
const { Deck, deckSpecification } = require("./Deck.js");

function getRangeArray(number) {
  return [...Array(number).keys()];
}

class Game {
  constructor(numberOfPlayers) {
    this.players = Game.generatePlayers(numberOfPlayers);
    this.deck = null;
    this.turn = null;
  }

  static generatePlayers(numberOfPlayers) {
    const playerIDs = getRangeArray(numberOfPlayers);
    return playerIDs.map(PlayerID => new Player(PlayerID));
  }

  initialiseRound() {
    this.deck = new Deck(deckSpecification);
    this.deck.drawCard();
    for (const player of this.players) {
      player.setStatus("waiting to play");
      player.clearHand();
      player.clearDiscard();
      player.hand.push(this.deck.drawCard());
    }
    this.turn = 1;
  }

  playRound() {}
}

module.exports = Game;
