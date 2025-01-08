import Item from "./Item";
import "./List.css";

const PackingList = ({ items, onDeleteItem, onToggleItem }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleOnClick={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
