import "./Form.css";

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <form className="add-form" onSubmit={(event) => handleSubmit(event)}>
      <h3>What do you need for your Trip? 😍</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button type="submit">add</button>
    </form>
  );
};

export default Form;
