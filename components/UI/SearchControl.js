import React from 'react'
import Icon from 'react-native-ionicons'
import { withNavigation } from 'react-navigation'

import { StyledSearch, SearchInput } from '../Styled'

const iconSize = 16

const SearchControl = ({ placeholderColor, onFocus, onBlur, reference }) => {
  return (
    <StyledSearch>
      <Icon name="search" size={iconSize} color={placeholderColor} />
      <SearchInput
        ref={reference}
        autoCorrect={false}
        enablesReturnKeyAutomatically
        placeholderTextColor={placeholderColor}
        placeholder="Enter id or surname"
        onFocus={onFocus}
        onBlur={onBlur} />
    </StyledSearch>
  )
}

export default withNavigation(SearchControl)