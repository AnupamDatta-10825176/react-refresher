import { useState, useEffect } from "react";
import { v4 as UUID } from "uuid";

import { ADD_TICKET, UPDATE_TICKET, CLEAR_EDITING_TICKET } from "../constants";
import "../styles.css";

const priorityLabels = {
  1: "Low",
  2: "Medium",
  3: "High",
};

const TicketForm = ({ dispatch, editingTicket }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  useEffect(() => {
    if (editingTicket) {
      setTitle(editingTicket.title);
      setDescription(editingTicket.description);
      setPriority(editingTicket.priority);
    } else {
      clearForm();
    }
  }, [editingTicket]);

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };

  const handleSubmit = (e) => {
    // handle submit logic
    e.preventDefault(); // prevent default behaviour

    // create new ticket object
    const newTicketData = {
      id: editingTicket ? editingTicket.id : UUID(),
      title,
      description,
      priority,
    };

    dispatch({
      type: editingTicket ? UPDATE_TICKET : ADD_TICKET,
      payload: newTicketData,
    });

    // clear the form after submit
    clearForm();
  };

  const handleBtnCancel = () => {
    clearForm();
    // dispatch the action to set the editing ticket to null
    dispatch({ type: CLEAR_EDITING_TICKET });
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

      {editingTicket && (
        <button className="button button-warning" onClick={handleBtnCancel}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default TicketForm;
