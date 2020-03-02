const { Card } = require("./Card.js");

/*  The Princess cannot be played, and therefore does not require an action. */

class Princess extends Card {
  constructor() {
    super("Princess", 8);
    this.action = function playPrincess() {
      console.log("Princess played");
    };
  }
}

module.exports = {
  Princess
};
