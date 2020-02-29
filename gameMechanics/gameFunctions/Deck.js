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
    this._cards = Deck.getInitialDeck(deckSpecification);
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
    for (let i = this._cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * this._cards.length);
      [this._cards[i], this._cards[j]] = [this._cards[j], this._cards[i]];
    }
  }

  drawCard() {
    return this._cards.pop();
  }

  showDeckAsString() {
    const card_names = this._cards.map(card => card.name);
    return card_names.reverse().join("\n");
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
