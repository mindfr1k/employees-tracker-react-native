import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import { connect } from 'react-redux'

import { authRequest } from '../../store/actions'
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
    autoCorrect: false,
    autoCapitalize: 'none',
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

const SignIn = ({ loading, error, authRequest, token, navigation }) => {
  const [isErrorSubmitted, setIsErrorSubmitted] = useState(true)
  useEffect(() => {
    if (token)
      navigation.navigate('EmployeeInfo')
  }, [token])
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
            inputs={signInInputs}
            action="Log In"
            onSubmit={formData => { 
              authRequest(formData)
              setIsErrorSubmitted(false)
            }} />
        ))}
    </CenteredContainer>
  )
}

const mapStateToProps = ({ authReducer: { loading, error, token } }) => ({ loading, error, token })
const mapDispatchToProps = dispatch => ({
  authRequest: formData => dispatch(authRequest(formData))
})

export default connect(mapStateToProps, mapDispatchToProps)(withKeyboardDismiss(SignIn))