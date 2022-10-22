import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'
import { colors } from '../../assets/colors'
import { useAuth } from '../../context/AuthContext/useAuth'
import { Button } from '../UI/Button'

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
const NavItems = styled.div`
  display: flex;
  gap: 1rem;
`

export const Navbar = () => {
  const { user } = useAuth();
  return (
    <NavbarWrapper>
      <Wrapper>
        <Link to={"/"}>
          <Logo>VincoReservation</Logo>
        </Link> 
        {
          user ? user.username :
          <NavItems>
            <Link to={"/register"}>
              <Button> Hazte una cuenta </Button>
            </Link>
            <Link to={"/login"}>
              <Button> Inicia Sesión </Button>
            </Link>
          </NavItems>
        }
      </Wrapper>
    </NavbarWrapper>
  )
}
