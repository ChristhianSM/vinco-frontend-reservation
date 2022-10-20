import React from 'react';
import * as Styled from '../styles'

export const OptionsCounter = ({ name, options, handleOption }) => {
  return (
    <Styled.OptionItem>
      <span className="optionText">{ name }</span>
      <Styled.OptionCounter>
        <Styled.OptionCounterButton
          disabled={ options[name] <= 1}
          onClick={() => handleOption(name, "d")}
        >
          -
        </Styled.OptionCounterButton>
        <Styled.OptionCounterNumber>
          {options[name]}
        </Styled.OptionCounterNumber>
        <Styled.OptionCounterButton
          onClick={() => handleOption(name, "i")}
        >
          +
        </Styled.OptionCounterButton>
      </Styled.OptionCounter>
    </Styled.OptionItem>
  )
}
