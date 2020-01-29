import React, { useState, useRef } from 'react'
import { View, Button } from 'react-native'
import { Transition, Transitioning } from 'react-native-reanimated'

import HeaderButton from './HeaderButton'
import SearchControl from '../SearchControl'
import { StyledHeaderContainer } from '../../Styled'

const HeaderContainer = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [horizontalOffset, setHorizontalOffset] = useState('-100%')
  const ref = useRef()

  const onFocus = () => {
    ref.current.animateNextTransition()
    setHorizontalOffset('100%')
  }

  const onBlur = () => {
    ref.current.animateNextTransition()
    setIsSearchFocused(false)
  }

  const headerButton = isSearchFocused
    ? <HeaderButton title="Cancel" />
    : <Button title="+" />

  const transition = <Transition.Change durationMs={500} interpolation="easeIn" />
  return (
    <Transitioning.View
      style={{ width: '100%' }}
      ref={ref}
      transition={transition}>
      <StyledHeaderContainer>
        <SearchControl
          style={{ flex: 12 }}
          placeholderColor="#888"
          onFocus={onFocus}
          onBlur={onBlur} />
        <View
          style={{ transform: [{ translateX: horizontalOffset }] }}>
          {headerButton}
        </View>
      </StyledHeaderContainer>
    </Transitioning.View>
  )
}

export default HeaderContainer