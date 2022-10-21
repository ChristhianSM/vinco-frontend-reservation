import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { session_login } from "../../services/auth-services";
import { AuthContext, initial_state } from "./AuthContext";
import { authReducer } from "./authReducer";

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, initial_state);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  const login = async (credentials) => {
    dispatch( { type: "LOGIN_START" })
    try {
      const data = await session_login(credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      return {
        status: true
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
      return {
        status: false
      }
    }
  }

  return (
    <AuthContext.Provider
      value = {{
        user: state.user,
        loading: state.loading,
        error: state.error,
        login
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}