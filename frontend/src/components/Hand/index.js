import React from "react";

import Card from "../Card";

function Hand({ cards, playCard }) {
  return (
    <section>
      Player Hand:
      {cards.map((card, index) => (
        <section>
          <Card card={card} />
          <button onClick={() => playCard(index)}>Play Card</button>
        </section>
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
