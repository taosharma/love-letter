const { Card } = require("./Card.js");

/* This function resolves the Countess card action. The Countess does nothing when played. */

class Countess extends Card {
  constructor() {
    super("Countess", 7);
    this.action = function playCountess() {
      console.log("Countess played");
    };
  }
}

module.exports = {
  Countess
};
