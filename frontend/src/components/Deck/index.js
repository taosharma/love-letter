import React from "react";

function Deck({ cards }) {
  return <p>Cards remaining in deck: {cards.length}</p>;
}

Deck.defaultProps = {
  cards: [
    { type: "default type", value: "default value", action: "default action" },
  ],
};

export default Deck;
