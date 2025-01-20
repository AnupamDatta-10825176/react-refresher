import { useState } from "react";
import "../styles.css";

const priorityLabels = {
  1: "Low",
  2: "Medium",
  3: "High",
};

const TicketForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(1);

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority(1);
  };

  const handleSubmit = (e) => {
    // handle submit logic
    e.preventDefault();

    // clear the form after submit
    clearForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          type="text"
          className="form-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <fieldset className="priority-fieldset">
        <legend>Priority</legend>
        {Object.entries(priorityLabels).map(([val, lbl]) => (
          <label key={val} className="priority-label">
            <input
              type="radio"
              className="priority-input "
              value={val}
              checked={priority === val}
              onChange={(e) => setPriority(e.target.value)}
            />
            {lbl}
          </label>
        ))}
      </fieldset>

      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
};

export default TicketForm;
