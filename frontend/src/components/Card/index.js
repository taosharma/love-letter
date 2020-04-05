import React from "react";

function Card({ card, playCard }) {
  const { type, value, action } = card;
  return (
    <section>
      <p>
        Type: {type} Value: {value} Action: {action}
      </p>
      <button onClick={playCard}>Play Card</button>
    </section>
  );
}

Card.defaultProps = {
  card: {
    type: "default type",
    value: "default value",
    action: "default action",
  },
  playCard: () => console.log("You have clicked 'playCard'"),
};

export default Card;
