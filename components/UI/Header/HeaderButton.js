import React from 'react'

import { HeaderButtonContainer, StyledButton } from '../../Styled'

const HeaderButton = ({ title }) => {
  return (
      <HeaderButtonContainer>
        <StyledButton
          color="#008bd1"
          fontSize="14px">{title}</StyledButton>
      </HeaderButtonContainer>
  )
}

export default HeaderButton