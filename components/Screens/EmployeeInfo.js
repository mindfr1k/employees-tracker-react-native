import React from 'react'
import { FlatList } from 'react-native'

import withKeyboardDismiss from '../hoc/withKeyboardDismiss'
import Card from '../UI/Card'
import { TopContainer } from '../Styled'

const data = [
  {
    id: 1,
    text: 'Rofl'
  }
]

const EmployeeInfo = () => {
  return (
    <TopContainer>
      <FlatList 
      data={data}
      renderItem={({ item: { text } }) => <Card title={text} />}
      keyExtractor={({ id }) => id} />
    </TopContainer>
  )
}

export default withKeyboardDismiss(EmployeeInfo)