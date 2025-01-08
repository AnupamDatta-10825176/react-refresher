import Item from "./Item";
import "./List.css";
// import { initialItems } from "../../data";

const PackingList = ({ items }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
