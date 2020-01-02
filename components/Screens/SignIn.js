import React from 'react'

import InfoHeader from '../UI/InfoHeader'
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

const SignIn = () => (
  <CenteredContainer>
    <InfoHeader text="Please, log in." />
    <Form
      action="Log In"
      inputs={signInInputs} />
  </CenteredContainer>
)

export default withKeyboardDismiss(SignIn)