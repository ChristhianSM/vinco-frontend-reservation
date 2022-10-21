import { useReducer } from "react";
import { initial_state, SearchContext } from "./SearchContext";
import { SearchReducer } from "./searchReducer";

export const SearchContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(SearchReducer, initial_state);

  return (
    <SearchContext.Provider
      value = {{
        city: state.city,
        dates: state.dates,
        options: state.options,
        dispatch
      }}
    >
      { children }
    </SearchContext.Provider>
  )
}