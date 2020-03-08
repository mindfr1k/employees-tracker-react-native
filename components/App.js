import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import authReducer from '../store/reducers/auth'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import SignIn from './Screens/SignIn'
import AddEmployee from './Screens/AddEmployee'
import UpdateEmployee from './Screens/UpdateEmployee'
import EmployeeInfo from './Screens/EmployeeInfo'
import HeaderContainer from './UI/Header/HeaderContainer'

const components = {
  SignIn: { screen: SignIn, navigationOptions: { header: null } },
  AddEmployee: { screen: AddEmployee, navigationOptions: { header: null } },
  UpdateEmployee: { screen: UpdateEmployee, navigationOptions: { header: null } },
  EmployeeInfo: {
    screen: EmployeeInfo,
    navigationOptions: {
      headerLeft: null,
      headerTitle: () => <HeaderContainer />
    }
  },
}

const App = createAppContainer(createStackNavigator(components, {
  initialRouteName: 'EmployeeInfo',
  defaultNavigationOptions: {
    gesturesEnabled: false
  },
  headerLayoutPreset: 'left'
}))
const store = createStore(authReducer)

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)