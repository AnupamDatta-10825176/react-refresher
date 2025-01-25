import { useState } from "react";

import "./TodoForm.css";
import { ADD_TODO } from "../../constants";
import { addTodo } from "../../utilities/fetchUtilities";
var todo = {};

const TodoForm = ({ dispatch, showForm }) => {
  const [title, setTitle] = useState("");
  const [userID, setUserID] = useState("");
  const [id, setID] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    // create new todo object
    todo = {
      userId: userID,
      id: "201",
      title,
      completed: false,
    };

    dispatch({ type: ADD_TODO, payload: todo });
    addTodo(todo).then((res) =>
      res.status === 201
        ? alert("New todo added successfully")
        : console.error("Error: ")
    );

    clearForm();
    showForm(false);
  };

  function clearForm() {
    todo = {
      title: setTitle(""),
      userID: setUserID(""),
      id: setID(""),
      completed: setCompleted(false),
    };
  }

  return (
    <form onSubmit={(e) => handleSubmitForm(e)}>
      {/** Div for User ID input */}
      <div>
        <label htmlFor="userID-input">User ID</label>
        <input
          className="todo-form"
          type="text"
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
          id="userID-input"
        />
      </div>
      {/** Div for Title input */}
      <div>
        <label htmlFor="title-input">Title</label>
        <input
          className="todo-form"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="title-input"
        />
      </div>
      <button className="button button-create" type="submit">
        Create
      </button>
    </form>
  );
};

export default TodoForm;
