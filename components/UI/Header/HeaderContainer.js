import React, { useState, useRef } from 'react'
import { Button, Animated, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import HeaderButton from './HeaderButton'
import SearchControl from '../SearchControl'
import { StyledHeaderContainer } from '../../Styled'

const HeaderContainer = () => {
  const role = useSelector(({ requestReducer: { role } }) => role)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const navigation = useNavigation()
  const searchInput = useRef()
  const initFlexValue = role === 'hr' ? 12 : 200
  const flex = useRef(new Animated.Value(initFlexValue)).current

  const animateFlex = toValue => Animated.timing(flex, {
    toValue,
    duration: 200
  })
  const onFocus = () => {
    animateFlex(5).start(() => {
      setIsSearchFocused(true)
    })
  }
  const onBlur = () => {
    setIsSearchFocused(false)
    animateFlex(initFlexValue).start()
    searchInput.current.clear()
  }
  const headerButton = isSearchFocused
    ? (
      <HeaderButton
        title="Cancel"
        onPress={() => {
          Keyboard.dismiss()
          onBlur()
        }} />
    )
    : role === 'hr' && (
      <Button
        title="+"
        onPress={() => navigation.navigate('AddEmployee')} />
    )
  return (
    <StyledHeaderContainer>
      <Animated.View style={{ flex }}>
        <SearchControl
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