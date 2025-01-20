import { useReducer } from "react";

import TicketForm from "./components/TicketForm";

import { ticketReducer } from "./reducers/ticketReducer";
import "./styles.css";

const App = () => {
  const initialState = { tickets: [] };
  const [state, dispatch] = useReducer(ticketReducer, initialState);

  return (
    <div className="container">
      <h1>Dummy Kanban Board</h1>
      <TicketForm dispatch={dispatch} />
    </div>
  );
};

export default App;
