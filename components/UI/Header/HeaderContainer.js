import React, { useState, useRef } from 'react'
import { TouchableOpacity, Button, Animated, Keyboard } from 'react-native'

import HeaderButton from './HeaderButton'
import SearchControl from '../SearchControl'
import { StyledHeaderContainer } from '../../Styled'

const flex = new Animated.Value(15)

const HeaderContainer = ({ navigation }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const searchInput = useRef()
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
    animateFlex(15).start()
    searchInput.current.clear()
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
          onBlur={onBlur}
          reference={searchInput} />
      </Animated.View>
      <TouchableOpacity style={{ flex: 1 }}>
        {headerButton}
      </TouchableOpacity>
    </StyledHeaderContainer>
  )
}

export default HeaderContainer