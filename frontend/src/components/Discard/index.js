function Discard({ cards }) {
  return (
    <section>
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </section>
  );
}
