import React from 'react'

import Form from '../UI/Form'
import withKeyboardDismiss from '../hoc/withKeyboardDismiss'
import { CenteredContainer } from '../Styled'

const signInInputs = [
  {
    id: 'username',
    placeholder: 'Username',
    value: '',
    autoFocus: true,
    first: true,
    returnKeyType: 'next',
    blurOnSubmit: false
  },
  {
    id: 'password',
    placeholder: 'Password',
    value: '',
    last: true,
    returnKeyType: 'done'
  }
]

const SignIn = ({ navigation }) => (
  <CenteredContainer>
    <Form action="Log In" inputs={signInInputs} onSubmit={() => navigation.replace('EmployeeInfo')} />
  </CenteredContainer>
)

export default withKeyboardDismiss(SignIn)