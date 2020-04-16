import React from 'react'
import { FlatList, ActivityIndicator } from 'react-native'
import { useSelector } from 'react-redux'

import Card from '../UI/Card'
import withKeyboardDismiss from '../hoc/withKeyboardDismiss'
import { TopContainer, StyledText } from '../Styled'

const EmployeeInfo = () => {
  const error = useSelector(({ requestReducer: { error } }) => error)
  const loading = useSelector(({ requestReducer: { loading } }) => loading)
  const employees = useSelector(({ requestReducer: { employees } }) => employees)
  const role = useSelector(({ requestReducer: { role } }) => role)
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

export default withKeyboardDismiss(EmployeeInfo)