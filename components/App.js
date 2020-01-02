import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { StackViewTransitionConfigs, createStackNavigator } from 'react-navigation-stack'

import SignIn from './Screens/SignIn'
import AddEmployee from './Screens/AddEmployee'
import UpdateEmployee from './Screens/UpdateEmployee'
import EmployeeInfo from './Screens/EmployeeInfo'

const routes = {
  SignIn,
  AddEmployee,
  UpdateEmployee,
  EmployeeInfo
}

export default createAppContainer(createStackNavigator(routes, {
  defaultNavigationOptions: {
    gesturesEnabled: false
  },
  headerMode: 'none',
}))