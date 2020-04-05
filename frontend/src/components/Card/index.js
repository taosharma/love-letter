import React from "react";

function Card({ card }) {
  const { type, value, action } = card;
  return (
    <section>
      <p>
        Type: {type} Value: {value} Action: {action}
      </p>
    </section>
  );
}

Card.defaultProps = {
  card: {
    type: "default type",
    value: "default value",
    action: "default action",
  },
};

export default Card;
