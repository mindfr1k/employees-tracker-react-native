import React from 'react'
import { FlatList } from 'react-native'

import withKeyboardDismiss from '../hoc/withKeyboardDismiss'
import Card from '../UI/Card'
import { TopContainer } from '../Styled'

const data = [
  {
    id: '12839812938',
    personnelName: '1',
    surname: 'Simple',
    name: 'Guy',
    secondName: 'Redundant',
    position: 'Factory worker'
  },
  {
    id: '12839812939',
    personnelName: '2',
    surname: 'Eloquent',
    name: 'Dude',
    secondName: 'Redundant',
    position: 'Packager'
  }
]

const EmployeeInfo = () => {
  return (
    <TopContainer>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          const { id, secondName, ...rest } = item
          return <Card {...rest} />
        }}
        keyExtractor={({ id }) => id} />
    </TopContainer>
  )
}

export default withKeyboardDismiss(EmployeeInfo)