function Card({ items, id, handleClick }) {
  const itemClass = items.stat ? " active " + items.stat : "";

  return (
    <div className={"card" + itemClass} onClick={() => handleClick(id)}>
      <img src={items.img} alt="" />
    </div>
  );
}

export default Card;
