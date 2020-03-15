const { Card } = require("../gameMechanics/gameCards/Card");
const { Priest } = require("../gameMechanics/gameCards/Priest");

const guesses = [Priest];
let randomIndex = Math.floor(Math.random() * guesses.length);

class TestGuard extends Card {
  constructor() {
    super("Guard", 1);
    this.action = function playGuard(player, target) {
      if (target.protected === true) {
        console.log(
          `Player ${player.id} plays a Guard, but Player ${target.id} is protected.`
        );
        return;
      }
      const guess = guesses[randomIndex];
      console.log(
        `Player ${player.id} plays a Guard and guesses Player ${target.id} has a ${guess.name}.`
      );
      if (target.hand[0] instanceof guess) {
        console.log(`Player ${target.id} has a ${guess.name}.`);
        target.discardCard();
        target.setStatus("inactive");
        return;
      }
      console.log(`Player ${target.id} does not have a ${guess.name}.`);
    };
  }
}

module.exports = TestGuard;
