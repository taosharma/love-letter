// All of the cards that require the player to follow special conditions.

const { Prince } = require(`../gameCards/Prince.js`);
const { King } = require(`../gameCards/King.js`);
const { Countess } = require(`../gameCards/Countess.js`);
const { Princess } = require(`../gameCards/Princess.js`);

// The player class, which holds the information associated with a player in a game of Love Letter.

function getCardIndex(hand, cardType) {
  return hand.findIndex(card => card instanceof cardType);
}

function forceCountess(hand) {
  const countess = getCardIndex(hand, Countess);
  const king = getCardIndex(hand, King);
  const prince = getCardIndex(hand, Prince);

  if ((countess >= 0 && king >= 0) || (countess >= 0 && prince >= 0)) {
    console.log("hello");
    return countess;
  } else return false;
}

function forcePrincess(hand) {
  let princess = getCardIndex(hand, Princess);

  if (princess == 0) {
    return (princess = 1);
  } else if (princess == 1) {
    return (princess = 0);
  } else return false;
}

class Player {
  constructor(id) {
    this.id = id; // Each player's id in a game is unique, and is used to distinguish one player from another.
    this.status = "active"; // The status expression shows whether each player is active or inactive in a given round.
    this.score = 0; // The score expression counts the number of rounds each player has won.
    this.hand = []; // The hand expression holds each player's hand of cards as an array of objects.
    this.discard = []; // The discard expression holds each player's discard pile as an array of objects.
    this.protected = false; // The protected expression shows whether a player can be targetted by card abilities.
  }

  // A method which changes to player's status.

  setStatus(status) {
    this.status = status;
  }

  // A method which removes all cards from a player's hand.

  clearHand() {
    this.hand = [];
  }

  incrementScore() {
    this.score++;
  }

  // A method which clears all cards from a players discard pile.

  clearDiscard() {
    this.discard = [];
  }

  // A method which adds the first card in the deck to player's hand.

  drawCard(deck) {
    this.hand.push(deck.drawCard());
  }

  // A method which removes the first card in the player's hand and adds it to their discard pile.

  discardCard() {
    this.discard.push(this.hand.pop());
  }

  // A method which plays a card from the player's hand by putting it in their discard pile and calling that card's ability.

  playCard(card, target, deck) {
    this.discard.push(this.hand[card]);
    this.hand.splice(card, 1);
    this.discard[this.discard.length - 1].action(this, target, deck);
  }

  /* A method which determines which card is played from a player's hand. If a player has both the Countess and King or Prince
  cards, they are forced to play the Countess. If one of the player's cards is the Princess, they are forced to play the other
  card. Otherwise, they can player either of the two cards in their hand.  */

  playTurn(card, target, deck) {
    this.protected = false;
    const countessCheck = forceCountess(this.hand);
    const princessCheck = forcePrincess(this.hand);
    if (countessCheck === 0 || countessCheck === 1) {
      console.log("Forced to play Countess!");
      this.playCard(countessCheck, target, deck);
    } else if (princessCheck === 0 || princessCheck === 1) {
      console.log("Forced to not play Princess!");
      this.playCard(princessCheck, target, deck);
    } else if (card === 0) {
      this.playCard(0, target, deck);
    } else {
      this.playCard(1, target, deck);
    }
  }

  showHandString() {
    const hand = this.hand.map(card => card.type);
    return hand;
  }

  showDiscardString() {
    const discard = this.discard.map(card => card.type);
    return discard;
  }
}

module.exports = Player;
