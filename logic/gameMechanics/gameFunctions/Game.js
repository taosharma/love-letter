// The player, the deck and the deck specification that are required to play a game of Love Letter.

const Player = require("./Player.js");
const { Deck, deckSpecification } = require("./Deck.js");

// A function which returns an array of keys for the specified number.

function getRangeArray(number) {
  return [...Array(number).keys()];
}

// The game class, which holds the information required to play a game of Love Letter.

class Game {
  constructor(numberOfPlayers) {
    this.players = this.generatePlayers(numberOfPlayers); // The players expression is an array of all the players in the game.
    this.deck = []; // The deck expression holds the deck of cards which is used for each round.
    this.round = 0; // The round expression tracks the number of rounds that have been played.
    this.turn = 0; // The turn expression tracks the number of turns that have been played in each round.
  }

  // A method which generates the number of players desired for the game, and gives each a unique id:

  generatePlayers(numberOfPlayers) {
    const playerIDs = getRangeArray(numberOfPlayers);
    return playerIDs.map((PlayerID) => new Player(PlayerID));
  }

  /*  A method which initialises a round by giving the game a new deck, removing a card from that deck, setting all the players
 status as active, removing all cards from the player's hands and discard piles, and giving each player a card from the deck. 
 It also adds one to the round tracker, and sets the turn tracker to 0 for this round.  */

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
    this.turn = 0;
  }

  /* A method which takes a single bot player through their turn. It draws them a card from the 
  deck, calls their own play turn method, and adds one to the turn tracker. */

  playBotTurn(player, target) {
    console.log(`Turn number: ${this.turn}.`);
    console.log(
      `Player ${player.id} starts with a ${player.hand[0].type} in their hand.`
    );
    console.log(
      `Player ${target.id} starts with a ${target.hand[0].type} in their hand.`
    );
    player.drawCard(this.deck);
    console.log(`Player ${player.id} draws a ${player.hand[1].type}.`);
    player.playTurn(Math.round(Math.random()), target, this.deck);
    try {
      console.log(
        `Player ${player.id} ends with a ${player.hand[0].type} in their hand.`
      );
    } catch (error) {}
    try {
      console.log(
        `Player ${target.id} ends with a ${target.hand[0].type} in their hand.`
      );
    } catch (error) {}
    this.turn++;
    console.log(`End turn.`);
  }

  /* A method which loops a round of the game for bots, letting each player take a turn if their status is set as active. */

  playBotRound() {
    while (this.getActivePlayers().length > 1 && this.deck.cards.length > 0) {
      const turnPointer = this.calculateTurnPointer();
      const player = this.players[turnPointer];
      const target =
        this.players[turnPointer].id === 0 ? this.players[1] : this.players[0];
      this.playTurn(player, target);
    }
    if (this.getActivePlayers().length === 1) {
      const winner = this.getActivePlayers();
      console.log(`Player ${winner[0].id} wins!`);
      return winner[0].incrementScore();
    }
    const player0CardValue = this.players[0].hand[0].value;
    const player1CardValue = this.players[1].hand[1].value;
    if (player0CardValue > player1CardValue) {
      return this.players[0].incrementScore();
    } else if (player1CardValue > player0CardValue) {
      return this.players[1].incrementScore();
    } else return;
  }

  getActivePlayers() {
    const activePlayers = this.players.filter(
      (player) => player.status === "active"
    );
    return activePlayers;
  }

  calculateTurnPointer() {
    return this.turn % this.players.length;
  }

  /* The checkWinner method uses the getActivePlayers method on the game to check whether there is only
one active player remaining. If there is only one active player remaining after a turn has been 
completed, that player has won the game. */

  checkWinner() {
    if (this.getActivePlayers().length === 1) {
      const winner = this.getActivePlayers();
      console.log(`Player ${winner[0].id} wins!`);
      return winner[0].incrementScore();
    }
    if (this.deck.cards.length === 0) {
      const player0CardValue = this.players[0].hand[0].value;
      const player1CardValue = this.players[1].hand[1].value;
      if (player0CardValue > player1CardValue) {
        return this.players[0].incrementScore();
      } else if (player1CardValue > player0CardValue) {
        return this.players[1].incrementScore();
      } else return;
    }
  }

  /* The playTurn method resolves the game state after a player decides which of the two cards in their hand they want to play. 
  The current player's turn is determined using the calculateTurnPointer method. The turn counter is incremented, and the target 
  player is identified in opposition to whichever player is currently taking their turn. This logic will only work for a 2 player
  game! */

  playTurn(card) {
    const turnPointer = this.calculateTurnPointer();
    this.turn++;
    const player = this.players[turnPointer];
    const target =
      this.players[turnPointer].id === 0 ? this.players[1] : this.players[0];
    player.playTurn(card, target, this.deck);
  }
}

module.exports = Game;
