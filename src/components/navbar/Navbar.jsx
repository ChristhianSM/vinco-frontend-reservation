import styled from '@emotion/styled'
import React from 'react'

const NavbarWrapper = styled.div`
  height: 50px;
  background-color: #003580;
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Logo = styled.span`
  Font-weight: 500;
`
const NavItems = styled.div``
const NavButton = styled.button`
  margin-left: 20px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  color: #003580;
`

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <Wrapper>
        <Logo>VincoReservation</Logo>
        <NavItems>
          <NavButton>Register</NavButton>
          <NavButton>Login</NavButton>
        </NavItems>
      </Wrapper>
    </NavbarWrapper>
  )
}
