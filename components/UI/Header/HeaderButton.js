import React from 'react'

import { HeaderButtonContainer, StyledButton } from '../../Styled'

const HeaderButton = ({ title, onPress }) => {
  return (
    <HeaderButtonContainer
      onPress={onPress}>
      <StyledButton
        suppressHighlighting
        color="#008bd1"
        fontSize="14px">
        {title}
      </StyledButton>
    </HeaderButtonContainer>
  )
}

export default HeaderButton