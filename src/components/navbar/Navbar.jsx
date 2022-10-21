import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'
import { colors } from '../../assets/colors'

const NavbarWrapper = styled.div`
  height: 50px;
  background-color: ${colors.background};
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
const Logo = styled(Link)`
  font-size: 2rem;
  color: white;
  Font-weight: 500;
`
const NavItems = styled.div``
const NavButton = styled.button`
  margin-left: 20px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  color: ${colors.background};
`

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <Wrapper>
        <Link to={"/"}>
          <Logo>VincoReservation</Logo>
        </Link> 
        <NavItems>
          <NavButton>Register</NavButton>
          <NavButton>Login</NavButton>
        </NavItems>
      </Wrapper>
    </NavbarWrapper>
  )
}
