import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.418);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Container = styled.div`
  background-color: white;
  padding: 20px;
  position: relative;
`
export const Close = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`
export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 20px;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const Title = styled.div`
  font-weight: 500;
`
export const Description = styled.div`
  font-weight: 300;
`
export const Max = styled.div`
  font-size: 12px;
`
export const Price = styled.div`
  font-weight: 500;
`
export const SelectRooms = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  font-size: 8px;
  color: gray;
`
export const Room = styled.div`
  display: flex;
  flex-direction: column;
`
export const Button = styled.div`
  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  margin-top: 20px;
`