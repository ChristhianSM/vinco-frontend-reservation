import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import * as Styled from '../styles'

export const ListSearch = ({ 
    destination,
    setDestination,
    setOpenDate, 
    openDate, 
    date, 
    setDate, 
    options, 
    filters, 
    setFilters,
    handleSearchFilters
}) => {

  const handleInputFilter = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilters({
      ...filters,
      [name]: value
    })
  }

  return (
    <Styled.ListSearch>
      <Styled.ListTitle>Search</Styled.ListTitle>
      <Styled.ListItem>
        <label>Destination</label>
        <input 
          placeholder={destination} 
          type="text"
          name = "destination"
          onChange={ (e) => setDestination(e.target.value) }
          value = { destination }
        />
      </Styled.ListItem>
      <Styled.ListItem>
        <label>Check-in Date</label>
        <span onClick={() => setOpenDate(!openDate)}>
          {
            `${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`
          }
        </span>
        {openDate && (
          <DateRange
            onChange={(item) => setDate([item.selection])}
            minDate={new Date()}
            ranges={date}
          />
        )}
      </Styled.ListItem>
      <Styled.ListItem>
        <label>Options</label>
        <Styled.ListOptions>
          <Styled.ListOptionItem>
            <span className="lsOptionText">
              Min price <small>per night</small>
            </span>
            <Styled.ListOptionInput
              name = "min"
              onChange={ handleInputFilter }
              value = { filters.min }
            />
          </Styled.ListOptionItem>
          <Styled.ListOptionItem>
            <span className="lsOptionText">
              Max price <small>per night</small>
            </span>
            <Styled.ListOptionInput
              name = "max"
              onChange={ handleInputFilter }
              value = { filters.max }
            />
          </Styled.ListOptionItem>
          <Styled.ListOptionItem>
            <span className="lsOptionText">Adult</span>
            <input
              type="number"
              min={1}
              className="lsOptionInput"
              placeholder={options.adult}
              name = "adult"
              onChange={ handleInputFilter }
              value = { filters.adult }
            />
          </Styled.ListOptionItem>
          <Styled.ListOptionItem>
            <span className="lsOptionText">Children</span>
            <input
              type="number"
              min={0}
              placeholder={options.children}
              name = "children"
              onChange={ handleInputFilter }
              value = { filters.children }
            />
          </Styled.ListOptionItem>
          <Styled.ListOptionItem>
            <span className="lsOptionText">Room</span>
            <input
              type="number"
              min={1}
              className="lsOptionInput"
              placeholder={options.room}
              name = "room"
              onChange={ handleInputFilter }
              value = { filters.room }
            />
          </Styled.ListOptionItem>
        </Styled.ListOptions>
      </Styled.ListItem>
      <button onClick={ handleSearchFilters }>Search</button>
    </Styled.ListSearch>
  )
}
