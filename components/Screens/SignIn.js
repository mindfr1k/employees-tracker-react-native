import React from 'react'
import { View } from 'react-native'

import Form from '../UI/Form'
import withKeyboardDismiss from '../hoc/withKeyboardDismiss'
import { CenteredContainer, StyledText } from '../Styled'

const signInInputs = [
  {
    id: 'username',
    placeholder: 'Username',
    value: '',
    autoFocus: true,
    first: true,
    returnKeyType: 'next',
    autoCorrect: false,
    enablesReturnKeyAutomatically: true,
    validation: {
      required: true
    }
  },
  {
    id: 'password',
    placeholder: 'Password',
    value: '',
    last: true,
    returnKeyType: 'done',
    autoCorrect: false,
    enablesReturnKeyAutomatically: true,
    validation: {
      required: true
    }
  }
]

const SignIn = () => (
  <CenteredContainer>
    <View>
      <StyledText>Please, log in.</StyledText>
    </View>
    <Form
      action="Log In"
      inputs={signInInputs} />
  </CenteredContainer>
)

export default withKeyboardDismiss(SignIn)