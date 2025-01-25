import Todo from "../Todo";

import "./TodoList.css";

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
