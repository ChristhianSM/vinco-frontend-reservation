import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { faBed, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useNavigate } from 'react-router-dom'
import { HeaderListItem } from './components/HeaderListItem'
import { OptionsCounter } from './components/OptionsCounter'
import * as Styled from './styles';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { useSearch } from '../../context/SearchContext/useSearch'
import { useAuth } from '../../context/AuthContext/useAuth'

const itemList = [
  { id: 1, icon : faBed, title: "Stays"},
  { id: 2, icon : faPlane, title: "Flights"},
  { id: 3, icon : faCar, title: "Car rentals"},
  { id: 4, icon : faBed, title: "Attractions"},
  { id: 5, icon : faTaxi, title: "Airport taxis"},
];

const listOptions = [
  { id: 1, name: "adult"},
  { id: 2, name: "children"},
  { id: 3, name: "room"},
]

export const Header = ({ type }) => {

  const { addSearch } = useSearch();
  const { user } = useAuth();

  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleSearch = () => {
    addSearch({destination, dates, options});
    navigate("/hotels", 
      { 
        state: 
        { destination: destination === "" ? "Peru" : destination, dates, options } 
      }
    );
  };

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <Styled.HeaderWrapper>
      <Styled.Container
        className={
          type === "list" ? "headerContainer list-mode" : "headerContainer"
        }
      >
        <Styled.HeaderList>
          {
            itemList.map( item => (
              <HeaderListItem key={ item.id } { ...item }/>
            ))
          }
        </Styled.HeaderList>
        {type !== "list" && (
          <>
            <h1 className="headerTitle"> Hoteles en Perú </h1>
            <Styled.HeaderDescription>
            ¡Introduce tus fechas y elige entre 9.496 hoteles y otros alojamientos!
            </Styled.HeaderDescription>
            <Styled.HeaderSearch>
              <Styled.HeaderSearchItem>
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <Styled.HeaderSearchInput
                  type="text"
                  placeholder="¿ A dondé vas ?"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </Styled.HeaderSearchItem>
              <Styled.HeaderSearchItem>
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <Styled.HeaderSearchText onClick={() => setOpenDate(!openDate)} >
                  {`${format(dates[0].startDate, "MM/dd/yyyy")} hasta ${format(dates[0].endDate, "MM/dd/yyyy")}`}
                </Styled.HeaderSearchText>
                {openDate && (
                  <Styled.Date
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </Styled.HeaderSearchItem>
              <Styled.HeaderSearchItem>
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <Styled.HeaderSearchText
                  onClick={() => setOpenOptions(!openOptions)}
                >
                  {`${options.adult} Adulto · ${options.children} Niño · ${options.room} Habitacion`}
                </Styled.HeaderSearchText>
                {openOptions && (
                  <Styled.Options>
                    {
                      listOptions.map( option => (
                        <OptionsCounter 
                          key={ option.id } 
                          { ...option }
                          handleOption = { handleOption }
                          options = { options }
                        />
                      ))
                    }
                  </Styled.Options>
                )}
              </Styled.HeaderSearchItem>
              <Styled.HeaderSearchItem>
                <Styled.HeaderButton onClick={handleSearch}>
                  Search
                </Styled.HeaderButton>
              </Styled.HeaderSearchItem>
            </Styled.HeaderSearch>
          </>
        )}
      </Styled.Container>
    </Styled.HeaderWrapper>
  )
}
