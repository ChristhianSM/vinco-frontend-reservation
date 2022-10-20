import styled from '@emotion/styled'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { faBed, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderWrapper = styled.header`
  background-color: #003580;
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
`
const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 20px 0px 100px 0px;
`
const HeaderList = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
`
const HeaderListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  &.active {
    border: 1px solid white;
    padding: 10px;
    border-radius: 20px;
  }
`
const HeaderTitle = styled.h1`

`
const HeaderDescription = styled.h1`
  margin: 20px 0px;
`
const HeaderButton = styled.button`
  background-color: #0071c2;
  color: white;
  font-weight: 500;
  border: none;
  padding: 10px;
  cursor: pointer;
`
const HeaderSearch = styled.button`
  height: 30px;
  background-color: white;
  border: 3px solid #febb02;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0px;
  border-radius: 5px;
  position: absolute;
  bottom: -25px;
  width: 100%;
  max-width: 1024px;
`
const HeaderSearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const HeaderSearchInput = styled.input`
  border: none;
  outline: none;
`
const HeaderSearchText  = styled.span`
  color: lightgray;
  cursor: pointer;
`
const Options = styled.div`
   z-index: 2;
  position: absolute;
  top: 50px;
  background-color: white;
  color: gray;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
`
const OptionItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
`
const OptionCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: black;
`
const OptionCounterButton = styled.div`
   width: 30px;
  height: 30px;
  border: 1px solid #0071c2;
  color: #0071c2;
  cursor: pointer;
  background-color: white;

  &:disabled{
    cursor: not-allowed;
  }
`
export const Header = ({ type }) => {

  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
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
    navigate("/hotels", { state: { destination, date, options } });
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
    <HeaderWrapper>
      <Container
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <HeaderList>
          <HeaderListItem className='active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </HeaderListItem>
        </HeaderList>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <HeaderDescription>
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </HeaderDescription>
            <HeaderButton>Sign in / Register</HeaderButton>
            <HeaderSearch>
              <HeaderSearchItem>
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <HeaderSearchInput
                  type="text"
                  placeholder="Where are you going?"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </HeaderSearchItem>
              <HeaderSearchItem>
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                {/* <HeaderSearchText
                  onClick={() => setOpenDate(!openDate)}
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</HeaderSearchText> */}
                {/* {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )} */}
              </HeaderSearchItem>
              <HeaderSearchItem>
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <HeaderSearchText
                  onClick={() => setOpenOptions(!openOptions)}
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</HeaderSearchText>
                {openOptions && (
                  <Options>
                    <OptionItem>
                      <span className="optionText">Adult</span>
                      <OptionCounter>
                        <OptionCounterButton
                          disabled={options.adult <= 1}
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </OptionCounterButton>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <OptionCounterButton
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </OptionCounterButton>
                      </OptionCounter>
                    </OptionItem>
                    <OptionItem>
                      <span className="optionText">Children</span>
                      <OptionCounter>
                        <OptionCounterButton
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </OptionCounterButton>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <OptionCounterButton
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </OptionCounterButton>
                      </OptionCounter>
                    </OptionItem>
                    <OptionItem>
                      <span className="optionText">Room</span>
                      <OptionCounter>
                        <OptionCounterButton
                          disabled={options.room <= 1}
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </OptionCounterButton>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <OptionCounterButton
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </OptionCounterButton>
                      </OptionCounter>
                    </OptionItem>
                  </Options>
                )}
              </HeaderSearchItem>
              <HeaderSearchItem>
                <HeaderButton onClick={handleSearch}>
                  Search
                </HeaderButton>
              </HeaderSearchItem>
            </HeaderSearch>
          </>
        )}
      </Container>
    </HeaderWrapper>
  )
}
