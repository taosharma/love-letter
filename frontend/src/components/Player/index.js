import React from "react";

import Hand from "../Hand";
import Discard from "../Discard";

function Player({ id, status, score, hand, discard, protected, playCard }) {
  return (
    <>
      <section>
        <h3>Player: {id}</h3>
        <p>
          Status: {status} Score: {score} Protected: {protected}
        </p>
      </section>
      <Hand cards={hand} playCard={playCard} />
      <Discard cards={discard} />
    </>
  );
}

Player.defaultProps = {
  id: "N/A",
  status: "N/A",
  score: "N/A",
  hand: [],
  discard: [],
  protected: "N/A",
  playCard: () => console.log("You have clicked 'playCard'"),
};

export default Player;
