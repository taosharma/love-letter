const { Prince } = require(`../gameCards/Prince.js`);
const { King } = require(`../gameCards/King.js`);
const { Countess } = require(`../gameCards/Countess.js`);
const { Princess } = require(`../gameCards/Princess.js`);

class Player {
  constructor(id) {
    this.id = id;
    this.status = "inactive";
    this.score = 0;
    this.hand = [];
    this.discard = [];
    this.protected = false;
  }

  setStatus(status) {
    this.status = status;
  }

  clearHand() {
    this.hand = [];
  }

  clearDiscard() {
    this.discard = [];
  }

  drawCard(deck) {
    this.hand.push(deck.drawCard());
  }

  discardCard() {
    this.discard.push(this.hand.pop);
  }

  playCard(card, player, target, deck) {
    this.discard.push(this.hand[card]);
    this.hand.splice(card, 1);
    this.discard[this.discard.length - 1].action(player, target);
  }

  playTurn(card, player, target, deck) {
    if (this.hand.includes((Countess && King) || (Countess && Prince))) {
      this.playCard(this.hand.indexOf(Countess), player, target);
    } else if (this.hand.includes(Princess)) {
      this.hand.indexOf(Princess) === 0
        ? this.playCard(1, player, target, deck)
        : this.playCard(0, player, target, deck);
    } else if (card === 0) {
      this.playCard(0, player, target, deck);
    } else {
      this.playCard(1, player, target, deck);
    }
  }

  showHandString() {
    const cards = this.hand.map(card => card.type);
    return cards.join("\n");
  }

  showDiscardString() {
    const cards = this.discard.map(card => card.type);
    return cards.join("\n");
  }
}

module.exports = Player;
