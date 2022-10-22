import { initial_state } from "./ReservationContext";

export const reservationReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return initial_state;
    default:
      return state;
  }
}