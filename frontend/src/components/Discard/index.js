import React from 'react';

import Card from '../Card';

function Discard({ cards }) {
  return (
    <section>
      {' '}
      Player Discard:
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </section>
  );
}

Discard.defaultProps = {
  cards: [
    { type: 'default type', value: 'default value', action: 'default action' },
  ],
};

export default Discard;
