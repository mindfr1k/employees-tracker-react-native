import React from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import { connect } from 'react-redux'

import { authSignIn, clearRequestError } from '../../store/actions'
import Form from '../UI/Form'
import TextInput from '../UI/TextInput'
import withKeyboardDismiss from '../hoc/withKeyboardDismiss'
import { CenteredContainer } from '../Styled'

const SignIn = ({ loading, error, authSignIn, clearRequestError }) => {
  console.log(error)
  const form = (
    <Form
      action="Log In"
      onSubmit={formData => authSignIn(formData)}>
      <TextInput id="username" placeholder="Username" validation={{ required: true }}
        autoCapitalize="none" />
      <TextInput id="password" placeholder="Password" validation={{ required: true }} />
    </Form>
  )
  return (
    <CenteredContainer>
      {error && Alert.alert(error, 'Please, try again.', [{
        text: 'OK',
        onPress: () => clearRequestError()
      }])}
      {loading
        ? <ActivityIndicator />
        : !error && form}

    </CenteredContainer>
  )
}

const mapStateToProps = ({ requestReducer: { loading, error } }) => ({ loading, error })
const mapDispatchToProps = dispatch => ({
  authSignIn: formData => dispatch(authSignIn(formData)),
  clearRequestError: () => dispatch(clearRequestError()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withKeyboardDismiss(SignIn))