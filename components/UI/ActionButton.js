import React from 'react'
import { Animated } from 'react-native'

import { StyledOpacity, StyledButton } from '../Styled'

const ActionButton = ({ title, onPress }) => {
  const AnimatedOpacity = Animated.createAnimatedComponent(StyledOpacity)
  const scale = new Animated.Value(1)
  const pressInHandler = () => Animated.timing(scale, {
    duration: 100,
    toValue: 0.9
  }).start()
  const pressOutHandler = () => Animated.timing(scale, {
    duration: 100,
    toValue: 1
  }).start()
  return (
    <AnimatedOpacity
    style={{ transform: [{ scale }] }}
    onPressIn={pressInHandler}
    onPressOut={pressOutHandler}
    onPress={onPress}>
    <StyledButton>{title}</StyledButton>
  </AnimatedOpacity>
  )
}

export default ActionButton