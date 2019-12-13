import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { CenteredContainer, StyledHeader } from './Styled'
import SignIn from './Screens/SignIn'
import AddEmployee from './Screens/AddEmployee'
import UpdateEmployee from './Screens/UpdateEmployee'
import EmployeeInfo from './Screens/EmployeeInfo'

const mainNavigator = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      headerTitle: () => (
      <CenteredContainer>
        <StyledHeader>Sign In</StyledHeader>
      </CenteredContainer>
      ),
      headerStyle: { height: 70}
    }
  },
  AddEmployee: {
    screen: AddEmployee, navigationOptions: {
      headerTitle: () => <StyledHeader>Add Employee</StyledHeader>
    }
  },
  UpdateEmployee: {
    screen: UpdateEmployee, navigationOptions: {
      headerTitle: () => <StyledHeader>Update Employee</StyledHeader>
    }
  },
  EmployeeInfo: {
    screen: EmployeeInfo, navigationOptions: {
      headerTitle: () => <StyledHeader>Employee Info</StyledHeader>
    }
  }
})

export default createAppContainer(mainNavigator)