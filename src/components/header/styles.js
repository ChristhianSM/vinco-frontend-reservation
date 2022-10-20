import styled from "@emotion/styled"
import { DateRange } from "react-date-range"
import { colors } from "../../assets/colors"

export const HeaderWrapper = styled.header`
  background-color: ${colors.background};
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
`
export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 20px 0px 100px 0px;
  &.list-mode {
    margin: 20px 0px 0px 0px;
  }
`
export const HeaderList = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
`
export const HeaderListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  &.active {
    border: 1px solid white;
    padding: 10px;
    border-radius: 20px;
  }
`
export const HeaderTitle = styled.h1`

`
export const HeaderDescription = styled.h1`
  margin: 20px 0px;
`
export const HeaderButton = styled.button`
  background-color: ${colors.backgroundButton};
  color: white;
  font-weight: 500;
  border: none;
  padding: 10px;
  cursor: pointer;
`
export const HeaderSearch = styled.button`
  height: 50px;
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
export const HeaderSearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const HeaderSearchInput = styled.input`
  border: none;
  outline: none;
`
export const HeaderSearchText  = styled.span`
  color: lightgray;
  cursor: pointer;
`

export const Date = styled(DateRange)`
  position: absolute;
  top: 50px;
  z-index: 2;
`
export const Options = styled.div`
   z-index: 2;
  position: absolute;
  top: 50px;
  background-color: white;
  color: gray;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
`
export const OptionItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
`
export const OptionCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: black;
`
export const OptionCounterButton = styled.button`
   width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 500;
  border: 1px solid ${colors.backgroundButton};
  color: ${colors.backgroundButton};
  cursor: pointer;
  background-color: white;

  &:disabled{
    cursor: not-allowed;
    background-color: lightgray;
    border-color: lightgray;
    color: gray;
  }
`
export const OptionCounterNumber = styled.span`
  width: 10px;
`