import { initial_state } from "./SearchContext";

export const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return initial_state;
    default:
      return state;
  }
}