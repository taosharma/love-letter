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
    this.round++;
    this.turn = 1;
  }

  playTurn(player, target) {
    player.drawCard(this.deck);
    console.log(player, target);
    player.playTurn(Math.round(Math.random()), player, target, this.deck);
    console.log(player, target);
    player.setStatus("inactive");
    this.turn++;
  }

  playRound() {
    for (const player of this.players) {
      if (player.status === "active") {
        const target = player.id === 0 ? this.players[1] : this.players[0];
        this.playTurn(player, target);
      }
    }
  }
}

module.exports = Game;
