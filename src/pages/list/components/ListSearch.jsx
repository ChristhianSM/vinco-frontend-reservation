import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import * as Styled from '../styles'

export const ListSearch = ({ 
    destination,
    setDestination,
    setOpenDate, 
    openDate, 
    dates, 
    setDates, 
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
      <Styled.ListTitle>Buscar</Styled.ListTitle>
      <Styled.ListItem>
        <label>Destino/Nombre del alojamiento:</label>
        <input 
          placeholder={destination} 
          type="text"
          name = "Destino"
          onChange={ (e) => setDestination(e.target.value) }
          value = { destination }
        />
      </Styled.ListItem>
      <Styled.ListItem>
        <label>Check-in Date</label>
        <span onClick={() => setOpenDate(!openDate)}>
          {
            `${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`
          }
        </span>
        {openDate && (
          <DateRange
            onChange={(item) => setDates([item.selection])}
            minDate={new Date()}
            ranges={dates}
          />
        )}
      </Styled.ListItem>
      <Styled.ListItem>
        <label>Optiones</label>
        <Styled.ListOptions>
          <Styled.ListOptionItem>
            <span className="lsOptionText">
              Precio Minimo <small>por noche</small>
            </span>
            <Styled.ListOptionInput
              name = "min"
              onChange={ handleInputFilter }
              value = { filters.min }
            />
          </Styled.ListOptionItem>
          <Styled.ListOptionItem>
            <span className="lsOptionText">
              Precio Maximo <small>por noche</small>
            </span>
            <Styled.ListOptionInput
              name = "max"
              onChange={ handleInputFilter }
              value = { filters.max }
            />
          </Styled.ListOptionItem>
          <Styled.ListOptionItem>
            <span className="lsOptionText">Adultos</span>
            <Styled.ListOptionInput
              type="number"
              min={1}
              placeholder={options.adult}
              name = "adult"
              onChange={ handleInputFilter }
              value = { filters.adult }
            />
          </Styled.ListOptionItem>
          <Styled.ListOptionItem>
            <span className="lsOptionText">Niños</span>
            <Styled.ListOptionInput
              type="number"
              min={0}
              placeholder={options.children}
              name = "children"
              onChange={ handleInputFilter }
              value = { filters.children }
            />
          </Styled.ListOptionItem>
          <Styled.ListOptionItem>
            <span className="lsOptionText">Habitaciones</span>
            <Styled.ListOptionInput
              type="number"
              min={1}
              placeholder={options.room}
              name = "room"
              onChange={ handleInputFilter }
              value = { filters.room }
            />
          </Styled.ListOptionItem>
        </Styled.ListOptions>
      </Styled.ListItem>
      <button onClick={ handleSearchFilters }>Buscar</button>
    </Styled.ListSearch>
  )
}
