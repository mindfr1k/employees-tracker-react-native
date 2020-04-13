import React from 'react'
import { FlatList, ActivityIndicator } from 'react-native'
import { useSelector } from 'react-redux'

import Card from '../UI/Card'
import { TopContainer, StyledText } from '../Styled'

const EmployeeInfo = () => {
  const { error, loading, employees, role } = useSelector(({
    requestReducer: { error, loading, employees, role }
  }) => ({ error, loading, employees, role }))
  const welcomeMessage = `Please, start searching${role === 'hr'
    ? ' or press "+" button to add employee'
    : ''}.`
  return (
    <TopContainer>
      {loading
        ? <ActivityIndicator />
        : error
          ? <StyledText style={{ padding: 20 }}>{error.message}</StyledText>
          : employees
            ? (
              <FlatList
                data={employees.employee}
                renderItem={({ item }) => <Card {...item} />}
                keyExtractor={({ _id }) => _id} />
            )
            : <StyledText style={{ padding: 20 }}>{welcomeMessage}</StyledText>}
    </TopContainer>
  )
}

export default EmployeeInfo