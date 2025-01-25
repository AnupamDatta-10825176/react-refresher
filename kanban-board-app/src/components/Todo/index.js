import "./Todo.css";

const Todo = ({ todo }) => {
  const { userId, id, title, completed } = todo;

  return (
    <div className="todo">
      <h3>User ID: {userId}</h3>
      <p>
        {id}: {title}
      </p>
    </div>
  );
};

export default Todo;
