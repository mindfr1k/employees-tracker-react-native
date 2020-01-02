import React from 'react'
import { createAppContainer } from 'react-navigation'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import { Transition } from 'react-native-reanimated'

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

const routesAnimation = {
  transition: (
    <Transition.Together>
      <Transition.Out type="slide-bottom" durationMs={600} interpolation="easeIn" />
      <Transition.In type="slide-bottom" durationMs={600} interpolation="easeIn" />
    </Transition.Together>
  )
}

export default createAppContainer(createAnimatedSwitchNavigator(routes, routesAnimation))