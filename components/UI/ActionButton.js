import React, { useState, useRef } from 'react'
import { Transitioning, Transition } from 'react-native-reanimated'

import { ActionOpacity, StyledButton } from '../Styled'

const ActionButton = ({ title, onPress }) => {
  const [scale, setScale] = useState(1)
  const ref = useRef()

  const transition = <Transition.Change durationMs={100} interpolation="easeIn" />
  return (
    <Transitioning.View style={{ width: '100%' }}
      ref={ref}
      transition={transition}>
      <ActionOpacity
        style={{ transform: [{ scaleX: scale }] }}
        onPressIn={() => {
          ref.current.animateNextTransition()
          setScale(0.9)
        }}
        onPressOut={() => {
          ref.current.animateNextTransition()
          setScale(1)
        }}
        onPress={onPress}>
        <StyledButton
          color="white"
          fontSize="18px">
          {title}
        </StyledButton>
      </ActionOpacity>
    </Transitioning.View>
  )
}

export default ActionButton