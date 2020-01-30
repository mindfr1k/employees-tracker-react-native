import React, { useState } from 'react'
import { TouchableOpacity, Button, Animated } from 'react-native'

import HeaderButton from './HeaderButton'
import SearchControl from '../SearchControl'
import { StyledHeaderContainer } from '../../Styled'

const flex = new Animated.Value(12)

const HeaderContainer = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const animateFlex = toValue => Animated.timing(flex, {
    toValue,
    duration: 400
  })
  const onFocus = () => {
    setIsSearchFocused(true)
    animateFlex(5).start()
  }
  const onBlur = () => {
    setIsSearchFocused(false)
    animateFlex(12).start()
  }
  const headerButton = isSearchFocused
    ? <HeaderButton title="Cancel" />
    : <Button title="+" />
  return (
    <StyledHeaderContainer>
      <Animated.View style={{ flex }}>
        <SearchControl
          placeholderColor="#888"
          onFocus={onFocus}
          onBlur={onBlur} />
      </Animated.View>
      <TouchableOpacity style={{ flex: 1 }}>
        {headerButton}
      </TouchableOpacity>
    </StyledHeaderContainer>
  )
}

export default HeaderContainer