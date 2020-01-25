import React, { useState } from 'react'

import HeaderButton from './HeaderButton'
import SearchControl from '../SearchControl'
import { StyledHeaderContainer, SearchFieldContainer } from '../../Styled'

const HeaderContainer = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [flexValue, setFlexValue] = useState(12)
  const onFocus = () => {
    setFlexValue(5)
    setIsSearchFocused(true)
  }
  const onBlur = () => {
    setFlexValue(12)
    setIsSearchFocused(false)
  }

  const headerButton = isSearchFocused
    ? <HeaderButton title="Cancel" />
    : <HeaderButton title="+" />
  return (
    <StyledHeaderContainer>
      <SearchFieldContainer flex={flexValue}>
        <SearchControl
          placeholderColor="#888"
          onFocus={onFocus}
          onBlur={onBlur} />
      </SearchFieldContainer>
      {headerButton}
    </StyledHeaderContainer>
  )
}

export default HeaderContainer