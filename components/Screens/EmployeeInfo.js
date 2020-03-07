import React from 'react'
import { FlatList } from 'react-native'

import Card from '../UI/Card'
import { TopContainer } from '../Styled'

const data = [
  {
    id: '12839812938',
    personnelName: '1',
    surname: 'Simple',
    name: 'Guy',
    secondName: 'Redundant',
    position: 'Factory worker',
    profilePic: 'https://picsum.photos/500/400'
  },
  {
    id: '12839812939',
    personnelName: '2',
    surname: 'Eloquent',
    name: 'Dude',
    secondName: 'Redundant',
    position: 'Packager',
    profilePic: 'https://picsum.photos/1000/700'
  }
]

const EmployeeInfo = () => {
  return (
    <TopContainer>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          const { secondName, ...rest } = item
          return <Card {...rest} />
        }}
        keyExtractor={({ id }) => id}
        contentContainerStyle={{ flexGrow: 1 }} />
    </TopContainer>
  )
}

export default EmployeeInfo