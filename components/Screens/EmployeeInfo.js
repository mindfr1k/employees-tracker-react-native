import React from 'react'

import withKeyboardDismiss from '../hoc/withKeyboardDismiss'
import SearchControl from '../UI/SearchControl'
import { TopContainer, StyledHeader } from '../Styled'

const EmployeeInfo = ({ navigation: { state: { params } } }) => {
  const msg = Object.keys(params).map(key => `${key}: ${params[key]}`).join(', ')
  return (
    <TopContainer>
      <SearchControl placeholderColor="#888" />
      <StyledHeader>{msg}</StyledHeader>
    </TopContainer>
  )
}

export default withKeyboardDismiss(EmployeeInfo)