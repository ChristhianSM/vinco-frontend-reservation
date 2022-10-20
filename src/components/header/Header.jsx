import styled from '@emotion/styled'
import second from '@fortawesome/fontawesome-svg-core'
import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
const HeaderSearchText  = styled.input`
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

export const Header = () => {
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
                <HeaderSearchText
                  onClick={() => setOpenDate(!openDate)}
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</HeaderSearchText>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
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
                          className="optionCounterButton"
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
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </OptionItem>
                    <OptionItem>
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </OptionItem>
                  </Options>
                )}
              </HeaderSearchItem>
              <HeaderSearchItem>
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </HeaderSearchItem>
            </HeaderSearch>
          </>
        )}
      </Container>
    </HeaderWrapper>
  )
}
