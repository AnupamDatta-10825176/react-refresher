import { useReducer } from "react";

import TicketForm from "./components/TicketForm";
import TicketList from "./components/TicketList";

import { ticketReducer } from "./reducers/ticketReducer";
import { High_To_Low, Low_To_High, SET_SORTING } from "./constants";
import { sortTicktes } from "./utilities/sortingUtilities";
import "./styles.css";

const App = () => {
  const initialState = {
    tickets: [],
    editingTicket: null,
    sortPreference: High_To_Low,
  };
  const [state, dispatch] = useReducer(ticketReducer, initialState);

  const sortedTickets = sortTicktes(state.tickets, state.sortPreference);

  return (
    <div className="container">
      <h1>Dummy Kanban Board</h1>
      <TicketForm dispatch={dispatch} editingTicket={state.editingTicket} />

      {state.tickets.length > 0 && (
        <div className="results">
          <h2>All Tickets</h2>

          <fieldset>
            <legend>Sort Tickets</legend>
            <select
              value={state.sortPreference}
              onChange={(e) =>
                dispatch({ type: SET_SORTING, payload: e.target.value })
              }
            >
              <option value={High_To_Low}>{High_To_Low}</option>
              <option value={Low_To_High}>{Low_To_High}</option>
            </select>
          </fieldset>

          <TicketList tickets={sortedTickets} dispatch={dispatch} />
        </div>
      )}
    </div>
  );
};

export default App;
