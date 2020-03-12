import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { StyledButton } from '../../Styled'

const HeaderButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={{ }}
      onPress={onPress}>
      <StyledButton
        suppressHighlighting
        color="#008bd1"
        fontSize="14">
        {title}
      </StyledButton>
    </TouchableOpacity>
  )
}

export default HeaderButton