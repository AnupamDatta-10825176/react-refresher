import Item from "./Item";
import "./List.css";
import { initialItems } from "../../data";

const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
