const {Card} = require(`../gameCards/card.js`);
const {Guard} = require(`../gameCards/guard.js`);
const {Priest} = require(`../gameCards/priest.js`);
const {Baron} = require(`../gameCards/baron.js`);
const {Handmaid} = require(`../gameCards/handmaid.js`);
const {Prince} = require(`../gameCards/prince.js`);
const {King} = require(`../gameCards/king.js`);
const {Countess} = require(`../gameCards/countess.js`);
const {Princess} = require(`../gameCards/princess.js`);


const deckSpecification = [
    [Guard, 5],
    [Priest, 2],
    [Baron, 2],
    [Handmaid, 2],
    [Prince, 2],
    [King, 1],
    [Countess, 1],
    [Princess, 1],
]


class Deck {

    constructor(deckSpecification) {
        this._cards = Deck.get_initial_deck(deckSpecification);
        this.shuffle();
    }

    static get_initial_deck(deckSpecification) {
        let cards = [];
        for (const [cardType, count] of deckSpecification) {
            console.log(cardType);
            console.log(count);
            for (let i = 0; i < count; i++) {
                cards.push(new cardType());
            }
        }
        return cards;
    }

    shuffle() {
        for (let i = this._cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * deck.length);
            [this._cards[i], this._cards[j]] = [this._cards[j], this._cards[i]];
        }
    }

    drawCard() {
        return this._cards.pop();
    }

    string() {
        const card_names = this._cards.map(card => card.name);
        return card_names.join("\n");
    }

}

deck = new Deck()
console.log(deck.string())
console.log(deck.drawCard())
console.log(deck.string())
