const { Card } = require("./Card.js");
const { Priest } = require(`./Priest.js`);
const { Baron } = require(`./Baron.js`);
const { Handmaid } = require(`./Handmaid.js`);
const { Prince } = require(`./Prince.js`);
const { King } = require(`./King.js`);
const { Countess } = require(`./Countess.js`);
const { Princess } = require(`./Princess.js`);

/*This function resolves the Guard card action. It lets a player guess the card in their opponents hand. If they guess correctly, their opponent discards the card and is out of the game.*/

const guesses = [Priest, Baron, Handmaid, Prince, King, Countess, Princess];
let randomIndex = Math.floor(Math.random() * guesses.length);

class Guard extends Card {
  constructor() {
    super("Guard", 1);
    this.action = function playGuard(player, target) {
      if (target.protected === true) {
        return;
      }
      const guess = guesses[randomIndex];
      if (target.hand[0] instanceof guess) {
        target.discardCard();
        return;
      }
    };
  }
}

module.exports = {
  Guard
};
