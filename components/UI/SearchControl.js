import React from 'react'
import Icon from 'react-native-ionicons'
import { withNavigation } from 'react-navigation'

import { StyledSearch, SearchInput } from '../Styled'

const SearchControl = ({ placeholderColor, onFocus, onBlur, navigation }) => {

  return (
    <StyledSearch>
      <Icon name="search" size={16} color={placeholderColor} />
      <SearchInput
        placeholderTextColor={placeholderColor}
        placeholder="Search"
        onFocus={onFocus}
        onBlur={onBlur} />
    </StyledSearch>
  )
}

export default withNavigation(SearchControl)