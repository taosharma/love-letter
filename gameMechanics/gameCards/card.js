//This defines the base Class of Card, from which each individual card inherits a common set of properties.

class Card {
  constructor(type, value) {
    this.type = type;
    this.value = value;
    this.action = function action() {};
  }
}

module.exports = {
  Card
};
