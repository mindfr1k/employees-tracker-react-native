import React from 'react'
import { TouchableOpacity } from 'react-native'

import { StyledButton } from '../../Styled'

const HeaderButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}>
      <StyledButton
        suppressHighlighting
        color="#008bd1"
        fontSize="14px">
        {title}
      </StyledButton>
    </TouchableOpacity>
  )
}

export default HeaderButton