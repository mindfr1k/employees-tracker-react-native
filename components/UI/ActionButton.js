import React, { useState } from 'react'
import { Animated } from 'react-native'

import { ActionOpacity, StyledButton } from '../Styled'

const ActionButton = ({ title, onPress }) => {
  const [scale] = useState(new Animated.Value(1))
  const scaleIn = Animated.timing(scale, {
    toValue: 0.9,
    duration: 100,
    useNativeDriver: true
  })
  const scaleOut = Animated.timing(scale, {
    toValue: 1,
    duration: 100,
    useNativeDriver: true
  })
  return (
    <ActionOpacity
      style={{ width: '100%', transform: [{ scaleX: scale }] }}
      onPressIn={() => scaleIn.start()}
      onPressOut={() => scaleOut.start()}
      onPress={onPress}>
      <StyledButton
        color="white"
        fontSize="18px">
        {title}
      </StyledButton>
    </ActionOpacity>
  )
}

export default ActionButton