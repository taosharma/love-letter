import React from "react";

import Card from "../Card";

function Hand({ cards, playCard }) {
  return (
    <section>
      {cards.map((card) => (
        <Card card={card} playCard={playCard} />
      ))}
    </section>
  );
}

Hand.defaultProps = {
  cards: [
    { type: "default type", value: "default value", action: "default action" },
  ],
  playCard: () => console.log("You have clicked 'playCard'"),
};

export default Hand;
