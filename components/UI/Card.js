import React from 'react'

import { CardContainer, StyledHeader } from '../Styled'

const Card = ({ title }) => {
  return (
    <CardContainer>
      <StyledHeader>{title}</StyledHeader>
    </CardContainer>
  )
}

export default Card