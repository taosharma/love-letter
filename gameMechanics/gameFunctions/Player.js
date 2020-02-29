class Player {
  constructor(id) {
    this.id = id;
    this.status = "player created";
    this.score = 0;
    this.hand = null;
    this.discard = null;
  }

  setStatus(status) {
    return (this.status = status);
  }

  clearHand() {
    return (this.hand = []);
  }

  clearDiscard() {
    return (this.discard = []);
  }
}

module.exports = Player;
