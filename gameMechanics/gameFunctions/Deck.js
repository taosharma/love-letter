// All of the cards that the deck requires for a standard game of Love Letter.

const { Guard } = require(`../gameCards/Guard.js`);
const { Priest } = require(`../gameCards/Priest.js`);
const { Baron } = require(`../gameCards/Baron.js`);
const { Handmaid } = require(`../gameCards/Handmaid.js`);
const { Prince } = require(`../gameCards/Prince.js`);
const { King } = require(`../gameCards/King.js`);
const { Countess } = require(`../gameCards/Countess.js`);
const { Princess } = require(`../gameCards/Princess.js`);

// The deck specification for a standard round of Love Letter.

const deckSpecification = [
  [Guard, 5],
  [Priest, 2],
  [Baron, 2],
  [Handmaid, 2],
  [Prince, 2],
  [King, 1],
  [Countess, 1],
  [Princess, 1]
];

// The deck class, which holds the collection of cards used in a game of Love Letter.

class Deck {
  /* The Deck constructor creates a new deck with the desired deck specification, an array of cards and the desired 
  number of each card to be included: [[card, number]]. These cards are then shuffled randomly. */

  constructor(deckSpecification) {
    this.cards = this.getInitialDeck(deckSpecification);
    this.shuffleDeck();
  }

  // See above.

  getInitialDeck(deckSpecification) {
    let cards = [];
    for (const [cardType, count] of deckSpecification) {
      for (let i = 0; i < count; i++) {
        cards.push(new cardType());
      }
    }
    return cards;
  }

  // A method which randomly arranges all of the cards that are given to the deck.

  shuffleDeck() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * this.cards.length);
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  // A method which selects and removes the first card held in the deck.

  drawCard() {
    return this.cards.pop();
  }

  // A method which the cards held in the deck as a string.

  showDeckString() {
    const cards = this.cards.map(card => card.name);
    return cards.reverse().join("\n");
  }
}

const testDeck = new Deck();
testDeck.showDeckString();

module.exports = {
  Deck,
  deckSpecification
};
