import "./Item.css";

const Item = ({ item, handleOnClick, onToggleItem }) => {
  return (
    <li>
      <input type="checkbox" onChange={() => onToggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleOnClick(item.id)}>❌</button>
    </li>
  );
};

export default Item;
