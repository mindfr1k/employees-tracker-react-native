import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Text, SafeAreaView } from 'react-native'

import SignIn from './Screens/SignIn'
import AddEmployee from './Screens/AddEmployee'
import UpdateEmployee from './Screens/UpdateEmployee'
import EmployeeInfo from './Screens/EmployeeInfo'
import SearchControl from './UI/SearchControl'

const components = {
  SignIn: { screen: SignIn, navigationOptions: { header: null } },
  AddEmployee: { screen: AddEmployee, navigationOptions: { header: null } },
  UpdateEmployee: { screen: UpdateEmployee, navigationOptions: { header: null } },
  EmployeeInfo: {
    screen: EmployeeInfo,
    navigationOptions: {
      headerLeft: null,
      headerTitle: () => <SearchControl placeholderColor="#888" />
    }
  }
}


const App = createAppContainer(createStackNavigator(components, {
  defaultNavigationOptions: {
    gesturesEnabled: false
  }
}))

export default App