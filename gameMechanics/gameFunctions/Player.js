class Player {
  constructor(id) {
    this.id = id;
    this.status = "player created";
    this.score = 0;
    this.hand = null;
    this.discard = null;
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
}

module.exports = Player;
