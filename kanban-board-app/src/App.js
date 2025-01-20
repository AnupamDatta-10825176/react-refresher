import { useReducer } from "react";

import TicketForm from "./components/TicketForm";
import TicketList from "./components/TicketList";

import { ticketReducer } from "./reducers/ticketReducer";
import "./styles.css";

const App = () => {
  const initialState = { tickets: [] };
  const [state, dispatch] = useReducer(ticketReducer, initialState);

  return (
    <div className="container">
      <h1>Dummy Kanban Board</h1>
      <TicketForm dispatch={dispatch} />

      {state.tickets.length > 0 && (
        <>
          <h2>All Tickets</h2>
          <TicketList tickets={state.tickets} dispatch={dispatch} />
        </>
      )}
    </div>
  );
};

export default App;
