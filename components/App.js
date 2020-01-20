import React from 'react'
import { Button } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import SignIn from './Screens/SignIn'
import AddEmployee from './Screens/AddEmployee'
import UpdateEmployee from './Screens/UpdateEmployee'
import EmployeeInfo from './Screens/EmployeeInfo'
import SearchControl from './UI/SearchControl'
import { TitleHeaderContainer, RightHeaderContainer } from './Styled'

const components = {
  SignIn: { screen: SignIn, navigationOptions: { header: null } },
  AddEmployee: { screen: AddEmployee, navigationOptions: { header: null } },
  UpdateEmployee: { screen: UpdateEmployee, navigationOptions: { header: null } },
  EmployeeInfo: {
    screen: EmployeeInfo,
    navigationOptions: {
      headerLeft: null,
      headerTitle: () => (
        <TitleHeaderContainer>
          <SearchControl placeholderColor="#888" />
        </TitleHeaderContainer>
      ),
      headerRight: () => (
        <RightHeaderContainer>
          <Button title="+" color="#0a7aff" onPress={() => console.log('works')}>
          </Button>
        </RightHeaderContainer>
      )
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