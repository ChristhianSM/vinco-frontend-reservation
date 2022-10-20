import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import * as Styled from '../styles'

export const ListSearch = ({ destination, setOpenDate, openDate, date, setDate, options}) => {
  return (
    <Styled.ListSearch>
      <Styled.ListTitle>Search</Styled.ListTitle>
      <Styled.ListItem>
        <label>Destination</label>
        <input placeholder={destination} type="text" />
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
            <Styled.ListOptionInput/>
          </Styled.ListOptionItem>
          <Styled.ListOptionItem>
            <span className="lsOptionText">
              Max price <small>per night</small>
            </span>
            <Styled.ListOptionInput/>
          </Styled.ListOptionItem>
          <Styled.ListOptionItem>
            <span className="lsOptionText">Adult</span>
            <input
              type="number"
              min={1}
              className="lsOptionInput"
              placeholder={options.adult}
            />
          </Styled.ListOptionItem>
          <Styled.ListOptionItem>
            <span className="lsOptionText">Children</span>
            <input
              type="number"
              min={0}
              className="lsOptionInput"
              placeholder={options.children}
            />
          </Styled.ListOptionItem>
          <Styled.ListOptionItem>
            <span className="lsOptionText">Room</span>
            <input
              type="number"
              min={1}
              className="lsOptionInput"
              placeholder={options.room}
            />
          </Styled.ListOptionItem>
        </Styled.ListOptions>
      </Styled.ListItem>
      <button>Search</button>
    </Styled.ListSearch>
  )
}
