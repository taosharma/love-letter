const { Guard } = require(`../gameCards/Guard.js`);
const { Priest } = require(`../gameCards/Priest.js`);
const { Baron } = require(`../gameCards/Baron.js`);
const { Handmaid } = require(`../gameCards/Handmaid.js`);
const { Prince } = require(`../gameCards/Prince.js`);
const { King } = require(`../gameCards/King.js`);
const { Countess } = require(`../gameCards/Countess.js`);
const { Princess } = require(`../gameCards/Princess.js`);

class Deck {
  constructor(deckSpecification) {
    this.cards = Deck.getInitialDeck(deckSpecification);
    this.shuffleDeck();
  }

  static getInitialDeck(deckSpecification) {
    let cards = [];
    for (const [cardType, count] of deckSpecification) {
      for (let i = 0; i < count; i++) {
        cards.push(new cardType());
      }
    }
    return cards;
  }

  shuffleDeck() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * this.cards.length);
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  drawCard() {
    return this.cards.pop();
  }

  showDeckString() {
    const cards = this.cards.map(card => card.name);
    return cards.reverse().join("\n");
  }
}

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

module.exports = {
  Deck,
  deckSpecification
};
