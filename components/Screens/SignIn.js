import React from 'react'

import { authSignIn } from '../../store/actions'
import Form from '../UI/Form'
import TextInput from '../UI/TextInput'
import useApiForm from '../hooks/form-api-handler'
import withKeyboardDismiss from '../hoc/withKeyboardDismiss'
import { CenteredContainer } from '../Styled'

const SignIn = () => {
  const form = (
    <Form action="Log In">
      <TextInput id="username" placeholder="Username" validation={{ required: true }}
        autoCapitalize="none" />
      <TextInput id="password" placeholder="Password" validation={{ required: true }} />
    </Form>
  )
  const ApiForm = useApiForm(form, authSignIn)
  return (
    <CenteredContainer>
      <ApiForm />
    </CenteredContainer>
  )
}

export default withKeyboardDismiss(SignIn)