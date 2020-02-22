//This defines the base Class of Card, from which each individual card inherits a common set of properties.

class Card {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.action = function action() {};
  }

  // action() {

  // }
}

module.exports = {
  Card
};
