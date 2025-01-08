const Item = ({ item, handleOnClick }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
      </span>
      <button onClick={() => handleOnClick(item.id)}>❌</button>
    </li>
  );
};

export default Item;
