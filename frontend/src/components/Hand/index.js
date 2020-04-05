import React from "react";

import Card from "../Card";

function Hand({ cards, playCard }) {
  console.log("hello");
  return (
    <section>
      Player Hand:
      {cards.map((card) => (
        <section>
          <Card card={card} />
          <button onClick={playCard}>Play Card</button>
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
