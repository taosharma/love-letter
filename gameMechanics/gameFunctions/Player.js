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

  playCard(card, player, target) {
    if (card === 0) {
      this.hand[0].action(player, target);
      this.discard.push(this.hand[0]);
      this.hand.splice(0, 1);
    } else {
      this.hand[1].action(player, target);
      this.discard.push(this.hand[1]);
      this.hand.splice(1, 1);
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
