import React, { useState, useRef } from 'react'
import { Button, Animated, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import HeaderButton from './HeaderButton'
import SearchControl from '../SearchControl'
import { StyledHeaderContainer } from '../../Styled'

const flex = new Animated.Value(12)

const HeaderContainer = () => {
  const navigation = useNavigation()
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const searchInput = useRef()
  const animateFlex = toValue => Animated.timing(flex, {
    toValue,
    duration: 200
  })
  const onFocus = () => {
    animateFlex(5).start(() => setIsSearchFocused(true))
  }
  const onBlur = () => {
    setIsSearchFocused(false)
    animateFlex(12).start()
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
      <Animated.View style={{ flex: 1 }}>
        {headerButton}
      </Animated.View>
    </StyledHeaderContainer>
  )
}

export default HeaderContainer