import { initial_state } from "./AuthContext";

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        loading: true
      };
    case "LOGIN_SUCCESS":
      return {
        loading: false,
        user: action.payload,
        error: null
      };
    case "LOGIN_FAILURE":
      return {
        loading: false,
        user: null,
        error: action.payload
      };
    case "LOGOUT":
      return initial_state;
    default:
      return state;
  }
}