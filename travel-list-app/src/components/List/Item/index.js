import "./Item.css";

const Item = ({ item, handleOnClick, onToggleItem }) => {
  return (
    <li>
      <input type="checkbox" onChange={() => onToggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
      </span>
      <button onClick={() => handleOnClick(item.id)}>❌</button>
    </li>
  );
};

export default Item;
