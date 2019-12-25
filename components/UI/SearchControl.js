import React from 'react'
import Icon from 'react-native-ionicons'

import { StyledSearch, SearchInput } from '../Styled'

const SearchControl = ({ placeholderColor, onFocus }) => {
  return (
    <StyledSearch>
      <Icon name="search" size={16} color={placeholderColor}></Icon>
      <SearchInput 
      placeholderTextColor={placeholderColor} 
      placeholder="Search"
      onFocus={onFocus}
      onBlur={onFocus} />
    </StyledSearch>
  )
}

export default SearchControl