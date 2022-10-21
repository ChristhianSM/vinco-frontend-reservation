import { useContext } from "react";
import { SearchContext } from "./SearchContext";

export const useAuth = () => useContext(SearchContext);