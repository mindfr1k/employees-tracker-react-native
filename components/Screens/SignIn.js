import React, { useState } from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import { connect } from 'react-redux'

import { authSignIn } from '../../store/actions'
import Form from '../UI/Form'
import TextInput from '../UI/TextInput'
import withKeyboardDismiss from '../hoc/withKeyboardDismiss'
import { CenteredContainer } from '../Styled'

const SignIn = ({ loading, error, token, authSignIn }) => {
  const [isErrorSubmitted, setIsErrorSubmitted] = useState(true)
  return (
    <CenteredContainer>
      {error && !isErrorSubmitted && Alert.alert(error, 'Please, try again.', [{
        text: 'OK',
        onPress: () => setIsErrorSubmitted(true)
      }])}
      {loading
        ? <ActivityIndicator />
        : (isErrorSubmitted && !token && (
          <Form
            action="Log In"
            onSubmit={formData => {
              authSignIn(formData)
              setIsErrorSubmitted(false)
            }}>
            <TextInput id="username" placeholder="Username" validation={{ required: true }}
              autoCapitalize="none" />
            <TextInput id="password" placeholder="Password" validation={{ required: true }} />
          </Form>
        ))}

    </CenteredContainer>
  )
}

const mapStateToProps = ({ requestReducer: { loading, error, token } }) => ({ loading, error, token })
const mapDispatchToProps = dispatch => ({
  authSignIn: formData => dispatch(authSignIn(formData))
})

export default connect(mapStateToProps, mapDispatchToProps)(withKeyboardDismiss(SignIn))