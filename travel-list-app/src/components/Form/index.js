import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Form.css";

const Form = ({ onAddItem }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  /**
   *
   * @param {*} event
   * @description {"create a new item with the description and quantity."}
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    // save nothing if description field is not profided
    if (!description) return;

    const newItem = {
      id: uuidv4().toString(),
      description: description,
      quantity: quantity,
      packed: false,
    };

    // add to the list of items
    onAddItem(newItem);

    // reset items and description to defaults
    setDescription("");
    setQuantity(1);
  };

  /**
   * @description sets value of quantity.
   * @param {*} event
   */
  const handleOnchangeQuantity = (event) => {
    setQuantity(Number(event.target.value));
  };

  /**
   * @description sets value of description
   * @param {*} event
   */
  const handleOnchangeItem = (event) => {
    setDescription(event.target.value);
  };

  return (
    <form className="add-form" onSubmit={(event) => handleSubmit(event)}>
      <h3>What do you need for your Trip? 😍</h3>
      <select value={quantity} onChange={(e) => handleOnchangeQuantity(e)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(event) => handleOnchangeItem(event)}
      />
      <button type="submit">add</button>
    </form>
  );
};

export default Form;
