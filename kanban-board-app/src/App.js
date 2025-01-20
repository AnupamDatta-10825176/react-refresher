import TicketForm from "./components/TicketForm";
import "./styles.css";

const App = () => {
  return (
    <div className="container">
      <h1>Dummy Kanban Board</h1>
      <TicketForm />
    </div>
  );
};

export default App;
