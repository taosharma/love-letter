const { Card } = require("./card.js");

class Princess extends Card {
  constructor() {
    super("Princess", 8);
    this.action = undefined; // The Princess cannot be played, and therefore does not require an action.
  }
}

module.exports = {
  Princess
};
