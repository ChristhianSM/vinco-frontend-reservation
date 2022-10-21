
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { ListSearch } from "./components/ListSearch";
import * as Styled from "./styles";
import { Navbar } from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header";
import { SearchItem } from "../../components/searchItem/SearchItem";
import { useFetch } from "../../hooks/useFetch";

export const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [filters, setFilters] = useState({
    min: "",
    max: "",
    adult: '',
    children: '',
    room: ''
  });

  const { min, max } = filters;

  const { data, loading, error, reFetch } = useFetch(`/hotels?city=${ destination }&min=${min || 0}&max=${max || Infinity}`);

  const handleSearchFilters = () => {
    reFetch()
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <Styled.ListContainer>
        <Styled.ListWrapper>
          <ListSearch 
            destination={ destination }
            setDestination = { setDestination }
            date = { date }
            setDate = { setDate }
            openDate = { openDate }
            setOpenDate = { setOpenDate }
            options = { options }
            filters = { filters }
            setFilters = { setFilters }
            handleSearchFilters = { handleSearchFilters }
          />
          <Styled.ListResult>
            {
              loading ? "Loading"
              : <>
                { data.map( hotel => (
                  <SearchItem 
                    key={ hotel._id }
                    hotel = { hotel }
                  />
                ))}
              </>
            }
          </Styled.ListResult>
        </Styled.ListWrapper>
      </Styled.ListContainer>
    </div>
  );
};