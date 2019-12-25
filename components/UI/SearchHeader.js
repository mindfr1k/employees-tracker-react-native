import React from 'react'
import { withNavigation } from 'react-navigation'
import Animated from 'react-native-reanimated'

import SearchControl from './SearchControl'
import { CenteredContainer, StyledHeader } from '../Styled'

const SearchHeader = ({ title, placeholderColor, navigation }) => {
  const rofl = () => console.log(navigation.state)
  return (
    <CenteredContainer>
      <StyledHeader>{title}</StyledHeader>
      <SearchControl placeholderColor={placeholderColor} onFocus={rofl} />
    </CenteredContainer>
  )
}

export default withNavigation(SearchHeader)