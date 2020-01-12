import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import SignIn from './Screens/SignIn'
import AddEmployee from './Screens/AddEmployee'
import UpdateEmployee from './Screens/UpdateEmployee'
import EmployeeInfo from './Screens/EmployeeInfo'
import SearchControl from './UI/SearchControl'
import AddButton from './UI/AddButton'

const components = {
  SignIn: { screen: SignIn, navigationOptions: { header: null } },
  AddEmployee: { screen: AddEmployee, navigationOptions: { header: null } },
  UpdateEmployee: { screen: UpdateEmployee, navigationOptions: { header: null } },
  EmployeeInfo: {
    screen: EmployeeInfo,
    navigationOptions: {
      headerLeft: null,
      headerTitle: () => <SearchControl placeholderColor="#888" />,
      // headerRight: () => <AddButton placeholderColor="#888" />
    }
  }
}

const App = createAppContainer(createStackNavigator(components, {
  defaultNavigationOptions: {
    gesturesEnabled: false
  },
  headerLayoutPreset: 'left'
}))

export default App