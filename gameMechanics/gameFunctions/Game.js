const Player = require("./Player.js");
const { Deck, deckSpecification } = require("./Deck.js");

function getRangeArray(number) {
  return [...Array(number).keys()];
}

class Game {
  constructor(numberOfPlayers) {
    this.players = Game.generatePlayers(numberOfPlayers);
    this.deck = [];
    this.round = 0;
    this.turn = 0;
  }

  static generatePlayers(numberOfPlayers) {
    const playerIDs = getRangeArray(numberOfPlayers);
    return playerIDs.map(PlayerID => new Player(PlayerID));
  }

  initialiseRound() {
    this.deck = new Deck(deckSpecification);
    this.deck.drawCard();
    for (const player of this.players) {
      player.setStatus("active");
      player.clearHand();
      player.clearDiscard();
      player.drawCard(this.deck);
    }
    this.round += 1;
    this.turn = 1;
  }

  playTurn(player, target) {
    player.drawCard(this.deck);
    player.playCard(Math.round(Math.random()), player, target);
    player.setStatus("inactive");
  }

  playRound() {
    for (const player of this.players) {
      if (player.status === "active") {
        const target = (player.id = 0) ? this.player[1] : this.player[0];
        this.playTurn(player, target);
      }
    }
  }
}

module.exports = Game;
