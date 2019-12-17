import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import { Transition } from 'react-native-reanimated'

import { CenteredContainer, StyledHeader } from './Styled'
import SignIn from './Screens/SignIn'
import AddEmployee from './Screens/AddEmployee'
import UpdateEmployee from './Screens/UpdateEmployee'
import EmployeeInfo from './Screens/EmployeeInfo'

const routes = [
  { title: 'Sign In', component: SignIn, init: true },
  { title: 'Add Employee', component: AddEmployee },
  { title: 'Update Employee', component: UpdateEmployee },
  { title: 'Employee Info', component: EmployeeInfo, style: { height: 70 } }
]

const createNavStack = routes => {
  const config = routes.reduce((acc, { title, component, style, init }) => ({
    ...acc, [title.replace(/ /g, '')]: {
      screen: component,
      navigationOptions: {
        headerTitle: () => (
          <CenteredContainer>
            <StyledHeader>{title}</StyledHeader>
          </CenteredContainer>
        ),
        headerLeft: null,
        gesturesEnabled: false,
        headerStyle: style
      },
      initialRouteName: init ? title.replace(/ /g, '') : null
    }
  }), {})
  return { mainNavigator: createStackNavigator(config) }
}

export default createAppContainer(createAnimatedSwitchNavigator(createNavStack(routes), {
  transition: (
    <Transition.Together>
      <Transition.Out type="slide-left" durationMs={400} interpolation="easeOut" />
      <Transition.In type="slide-left" durationMs={400} interpolation="easeIn" />
    </Transition.Together>
  )
}))