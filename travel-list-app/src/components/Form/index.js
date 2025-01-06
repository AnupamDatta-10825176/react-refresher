import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Input: ${description}`);
    console.log(`Select: ${quantity}`);
  };

  const handleOnchangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

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
