import { useReducer } from "react";
import { initial_state, SearchContext } from "./SearchContext";
import { SearchReducer } from "./searchReducer";

export const SearchContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(SearchReducer, initial_state);

  const addSearch = (search) => {
    dispatch({ type: "NEW_SEARCH", payload: search })
  }

  return (
    <SearchContext.Provider
      value = {{
        city: state.city,
        dates: state.dates,
        options: state.options,
        addSearch
      }}
    >
      { children }
    </SearchContext.Provider>
  )
}