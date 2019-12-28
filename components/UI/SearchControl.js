import React from 'react'
import Icon from 'react-native-ionicons'
import { withNavigation } from 'react-navigation'
import { StyledSearch, SearchInput } from '../Styled'

const SearchControl = ({ placeholderColor, navigation }) => (
  <StyledSearch>
    <Icon name="search" size={16} color={placeholderColor}></Icon>
    <SearchInput
      placeholderTextColor={placeholderColor}
      placeholder="Search"
      onFocus={() => navigation.navigate('SignIn')} />
  </StyledSearch>
)

export default withNavigation(SearchControl)