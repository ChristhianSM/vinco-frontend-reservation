import styled from "@emotion/styled"
import { colors } from "../../assets/colors"

const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  background-color: #003580;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px;
`
const MailTitle = styled.h1``
const MailInputContainer = styled.div`
  input {
    width: 300px;
    height: 50px;
    padding: 10px;
    outline: none;
    border: none;
    margin-right: 10px;
    border-radius: 5px;
  }
  button {
    height: 50px;
    padding: 0 10px;
    background-color: ${colors.backgroundButton};
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    transition: background-color 500ms ease-out;

    &:hover{
      background-color: red;
    }
  }
`
const MailList = () => {
  return (
    <Wrapper>
      <MailTitle>Save time, save money!</MailTitle>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <MailInputContainer>
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </MailInputContainer>
    </Wrapper>
  )
}

export default MailList