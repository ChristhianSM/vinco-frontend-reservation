import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from '../styles'

export const HeaderListItem = ({icon, title}) => {
  return (
    <Styled.HeaderListItem>
      <FontAwesomeIcon icon={icon} />
      <span>{title}</span>
    </Styled.HeaderListItem>
  )
}
