import React from 'react'

import { authSignIn } from '../../store/actions'
import Form from '../UI/Form'
import TextInput from '../UI/TextInput'
import withKeyboardDismiss from '../hoc/withKeyboardDismiss'
import { CenteredContainer } from '../Styled'

const SignIn = () => {
  return (
    <CenteredContainer>
      <Form caption="Log In" action={authSignIn}>
        <TextInput id="username" placeholder="Username" validation={{ required: true }}
          autoCapitalize="none" />
        <TextInput id="password" placeholder="Password" validation={{ required: true }} />
      </Form>
    </CenteredContainer>
  )
}

export default withKeyboardDismiss(SignIn)