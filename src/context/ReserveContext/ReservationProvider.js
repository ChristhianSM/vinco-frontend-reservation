import { useReducer } from "react";
import { initial_state, ReservationContext } from "./ReservationContext";
import { reservationReducer } from "./reservationReducer";

export const ReservationContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reservationReducer, initial_state);

  const addSearch = (search) => {
    dispatch({ type: "NEW_SEARCH", payload: search })
  }

  return (
    <ReservationContext.Provider
      value = {{
        city: state.city,
        dates: state.dates,
        options: state.options,
        addSearch
      }}
    >
      { children }
    </ReservationContext.Provider>
  )
}