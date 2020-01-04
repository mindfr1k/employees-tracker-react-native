import React from 'react'
import { SafeAreaView } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

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

const AppContainer = createAppContainer(createStackNavigator(routes, {
  defaultNavigationOptions: {
    gesturesEnabled: false
  },
  headerMode: 'none'
}))

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <AppContainer />
  </SafeAreaView>
)

export default App