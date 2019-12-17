import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import { CenteredContainer, StyledHeader } from '../Styled'

export default createNavStack = routes => {
  const config = routes.reduce((acc, { name, component, header, init }) => ({
    ...acc, [name.replace(/ /g, '')]: {
      screen: component,
      navigationOptions: {
        headerTitle: () => (
          <CenteredContainer>
            <StyledHeader>{name}</StyledHeader>
            {header && header.title}
          </CenteredContainer>
        ),
        headerLeft: null,
        gesturesEnabled: false,
        headerStyle: header && header.style
      },
      initialRouteName: init ? name.replace(/ /g, '') : null
    }
  }), {})
  return { mainNavigator: createStackNavigator(config) }
}