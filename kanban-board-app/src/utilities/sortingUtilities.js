import { High_To_Low, Low_To_High } from "../constants";

export const sortTicktes = (tickets, preference) => {
  switch (preference) {
    case High_To_Low:
      return tickets
        .slice()
        .sort((a, b) => b.priority.localeCompare(a.priority));
    case Low_To_High:
      return tickets
        .slice()
        .sort((a, b) => a.priority.localeCompare(b.priority));
    default:
      return tickets;
  }
};
