import React from 'react'
import { createAppContainer } from 'react-navigation'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import { Transition } from 'react-native-reanimated'

import SignIn from './Screens/SignIn'
import AddEmployee from './Screens/AddEmployee'
import UpdateEmployee from './Screens/UpdateEmployee'
import EmployeeInfo from './Screens/EmployeeInfo'
import createNavStack from './shared/createNavStack'
import { CenteredContainer, StyledHeader } from './Styled'

const routes = [
  { name: 'Sign In', component: SignIn, init: true },
  { name: 'Add Employee', component: AddEmployee },
  { name: 'Update Employee', component: UpdateEmployee },
  { name: 'Employee Info', component: EmployeeInfo, header: {
    style: { height: 70 },
    title: <StyledHeader>test placeholder</StyledHeader>
    }
  }
]

const routesAnimation = {
  transition: (
    <Transition.Together>
      <Transition.Out type="slide-left" durationMs={400} interpolation="easeOut" />
      <Transition.In type="slide-left" durationMs={400} interpolation="easeIn" />
    </Transition.Together>
  )
}

export default createAppContainer(createAnimatedSwitchNavigator(createNavStack(routes), routesAnimation))