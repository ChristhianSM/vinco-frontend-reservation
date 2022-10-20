
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { ListSearch } from "./components/ListSearch";
import * as Styled from "./styles";
import { Navbar } from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header";
import { SearchItem } from "../../components/searchItem/SearchItem";

export const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

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
          />
          <Styled.ListResult>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </Styled.ListResult>
        </Styled.ListWrapper>
      </Styled.ListContainer>
    </div>
  );
};