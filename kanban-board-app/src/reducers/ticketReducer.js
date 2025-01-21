import {
  ADD_TICKET,
  UPDATE_TICKET,
  DELETE_TICKET,
  SET_EDITING_TICKET,
  CLEAR_EDITING_TICKET,
} from "../constants";

export const ticketReducer = (state, action) => {
  switch (action.type) {
    case ADD_TICKET:
      return { ...state, tickets: [...state.tickets, action.payload] };
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
    default:
      return state;
  }
};
