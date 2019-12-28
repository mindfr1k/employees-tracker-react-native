import React from 'react'

import withKeyboardDismiss from '../hoc/withKeyboardDismiss'
import SearchControl from '../UI/SearchControl'
import { TopContainer } from '../Styled'

const EmployeeInfo = () => {
  return (
    <TopContainer>
      <SearchControl placeholderColor="#888" />
    </TopContainer>
  )
}

export default withKeyboardDismiss(EmployeeInfo)