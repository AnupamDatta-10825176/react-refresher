import { useState, useEffect, useReducer } from "react";

// import TicketForm from "./components/TicketForm";
// import TicketList from "./components/TicketList";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Loading from "./components/Loading";

import { ticketReducer } from "./reducers/ticketReducer";
import {
  High_To_Low,
  // Low_To_High,
  // SET_SORTING,
  GET_TICKETS,
} from "./constants";
// import { sortTicktes } from "./utilities/sortingUtilities";
import { fetchTodos } from "./utilities/fetchUtilities";
import "./styles.css";

const App = () => {
  const initialState = {
    tickets: [],
    todos: [],
    editingTicket: null,
    sortPreference: High_To_Low,
  };
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [state, dispatch] = useReducer(ticketReducer, initialState);

  // const sortedTickets = sortTicktes(state.tickets, state.sortPreference);

  useEffect(() => {
    setLoading(true);
    async function getTodos() {
      var data = await fetchTodos();
      dispatch({ type: GET_TICKETS, payload: data });
      setLoading(false);
    }

    getTodos();
  }, []);

  const handleFormVisibility = () => {
    setShowForm((prevState) => !prevState);
  };

  return (
    <div className="container">
      <h1>Dummy Kanban Board</h1>
      {}
      {showForm ? (
        <TodoForm dispatch={dispatch} showForm={setShowForm} />
      ) : (
        <button className="button" onClick={handleFormVisibility}>
          Add New Todo
        </button>
      )}
      {/* <TicketForm dispatch={dispatch} editingTicket={state.editingTicket} /> */}

      {/* {state.tickets.length > 0 && (
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
      )} */}

      {loading ? <Loading /> : <TodoList todos={state.todos} />}
    </div>
  );
};

export default App;
