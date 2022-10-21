import { createContext } from "react"

export const initial_state = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  }
}

export const SearchContext = createContext(initial_state);

