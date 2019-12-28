import React from 'react'

import Form from '../UI/Form'
import withKeyboardDismiss from '../hoc/withKeyboardDismiss'
import { CenteredContainer, StyledHeader } from '../Styled'

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
    <StyledHeader>Please, log in.</StyledHeader>
    <Form action="Log In" inputs={signInInputs} onSubmit={() => navigation.navigate('EmployeeInfo')} />
  </CenteredContainer>
)

export default withKeyboardDismiss(SignIn)