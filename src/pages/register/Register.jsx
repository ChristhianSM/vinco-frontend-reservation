import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext/useAuth'

const RegisterWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const Input = styled.input`
  height: 30px;
  padding: 10px;
`
const Button = styled.button`
  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  &:disabled {
    background-color: #0071c28c;
    cursor: not-allowed;
  }
`
export const Register = () => {

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { loading, error, register } = useAuth();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };


  const handleClick = async (e) => {
    e.preventDefault();
    const { status }  = await register(credentials );
    if (status) {
      navigate("/");
    }
  };

  return (
    <RegisterWrapper>
      <Container>
        <Input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
        />
        <Input
          type="email"
          placeholder="email"
          id="email"
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
        />
        <Button disabled={loading} onClick={handleClick} >
          Register
        </Button>
        {error && <span>{error.message}</span>}
      </Container>
    </RegisterWrapper>
  )
}
