const { Card } = require(`../gameCards/card.js`);
const { Guard } = require(`../gameCards/guard.js`);
const { Priest } = require(`../gameCards/priest.js`);
const { Baron } = require(`../gameCards/baron.js`);
const { Handmaid } = require(`../gameCards/handmaid.js`);
const { Prince } = require(`../gameCards/prince.js`);
const { King } = require(`../gameCards/king.js`);
const { Countess } = require(`../gameCards/countess.js`);
const { Princess } = require(`../gameCards/princess.js`);

function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * deck.length);
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

let deck = [
  new Guard(),
  new Guard(),
  new Guard(),
  new Guard(),
  new Guard(),
  new Priest(),
  new Priest(),
  new Baron(),
  new Baron(),
  new Handmaid(),
  new Handmaid(),
  new Prince(),
  new Prince(),
  new King(),
  new Countess(),
  new Princess()
];

shuffle(deck);

console.log(deck);
