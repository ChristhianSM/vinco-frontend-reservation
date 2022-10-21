import { createContext } from "react"

export const initial_state = {
  user: JSON.parse(localStorage.getItem("user")) || null, 
  loading: false,
  error: null
}

export const AuthContext = createContext(initial_state);

