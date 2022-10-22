import styled from '@emotion/styled'
import React from 'react'

const StyledButton = styled.button`
  border: none;
  padding: 5px 10px;
  font-weight: 500;
  border: 1px solid white;
  background-color : ${ (props) => props.background ? "#003580" : "white" };
  color : ${ (props) => props.background ? "white" : "#003580" };
  cursor: pointer;

  &:hover {
    background-color: #1f4e8f;
    color: white;
  }
`

export const Button = ({children, background}) => {
  return (
    <StyledButton background = { background }>
      {children}
    </StyledButton>
  )
}
