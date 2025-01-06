import "./Form.css";

const Form = () => {
  return (
    <form className="add-form">
      <h3>What do you need for your Trip? 😍</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button>add</button>
    </form>
  );
};

export default Form;
