import {
  // ADD_TICKET,
  ADD_TODO,
  CLEAR_EDITING_TICKET,
  DELETE_TICKET,
  GET_TICKETS,
  UPDATE_TICKET,
  SET_EDITING_TICKET,
  SET_SORTING,
} from "../constants";

export const ticketReducer = (state, action) => {
  switch (action.type) {
    // case ADD_TICKET:
    //   return { ...state, tickets: [...state.tickets, action.payload] };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case GET_TICKETS: {
      return { ...state, todos: action.payload };
    }
    case UPDATE_TICKET:
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket.id === action.payload.id ? action.payload : ticket
        ),
        editingTicket: null,
      };
    case DELETE_TICKET:
      // delete the same ticket which is getting edited
      if (state.editingTicket && state.editingTicket.id === action.payload.id) {
        return {
          ...state,
          tickets: state.tickets.filter(
            (ticket) => ticket.id !== action.payload.id
          ),
          editingTicket: null,
        };
      } else {
        // delete different ticket than the one getting edited
        return {
          ...state,
          tickets: state.tickets.filter(
            (ticket) => ticket.id !== action.payload.id
          ),
        };
      }

    case SET_EDITING_TICKET:
      return {
        ...state,
        editingTicket: action.payload,
      };

    case CLEAR_EDITING_TICKET:
      return {
        ...state,
        editingTicket: null,
      };
    case SET_SORTING: {
      return {
        ...state,
        sortPreference: action.payload,
      };
    }
    default:
      return state;
  }
};
