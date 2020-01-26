import React, { useState, useRef } from 'react'
import { Button } from 'react-native'
import { Transition, Transitioning } from 'react-native-reanimated'

import HeaderButton from './HeaderButton'
import SearchControl from '../SearchControl'
import { StyledHeaderContainer, SearchFieldContainer } from '../../Styled'

const HeaderContainer = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [flexValue, setFlexValue] = useState(12)
  const ref = useRef()

  const onFocus = () => {
    ref.current.animateNextTransition()
    setFlexValue(5)
    setIsSearchFocused(true)
  }
  const onBlur = () => {
    ref.current.animateNextTransition()
    setFlexValue(12)
    setIsSearchFocused(false)
  }

  const headerButton = isSearchFocused
    ? <HeaderButton title="Cancel" />
    : <Button title="+" />
  const transition = <Transition.Change durationMs={400} interpolation="easeIn" />
  return (
    <StyledHeaderContainer>
      <Transitioning.View
        style={{ flex: flexValue }}
        ref={ref}
        transition={transition}>
        <SearchControl
          placeholderColor="#888"
          onFocus={onFocus}
          onBlur={onBlur} />
      </Transitioning.View>
      {headerButton}
    </StyledHeaderContainer>
  )
}

export default HeaderContainer