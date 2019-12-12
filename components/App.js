import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import SignIn from './Screens/SignIn'
import AddEmployee from './Screens/AddEmployee'
import UpdateEmployee from './Screens/UpdateEmployee'

const mainNavigator = createStackNavigator({
  SignIn: { screen: SignIn, navigationOptions: { title: 'Log In' } },
  AddEmployee: { screen: AddEmployee, navigationOptions: { title: 'Add Employee' } },
  UpdateEmployee: { screen: UpdateEmployee, navigationOptions: { title: 'Update Employee' } }
})

export default createAppContainer(mainNavigator)