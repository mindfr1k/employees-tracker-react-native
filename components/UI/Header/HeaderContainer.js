import React, { useState } from 'react'
import { TouchableOpacity, Button, Animated, Keyboard } from 'react-native'
import { withNavigation } from 'react-navigation'

import HeaderButton from './HeaderButton'
import SearchControl from '../SearchControl'
import { StyledHeaderContainer } from '../../Styled'

const flex = new Animated.Value(12)

const HeaderContainer = ({ navigation }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const animateFlex = toValue => Animated.timing(flex, {
    toValue,
    duration: 300
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
    ? <HeaderButton
      title="Cancel"
      onPress={() => {
        Keyboard.dismiss()
        onBlur()
      }} />
    : <Button
      title="+"
      onPress={() => navigation.navigate('AddEmployee')} />
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

export default withNavigation(HeaderContainer)