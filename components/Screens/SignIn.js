import React, { useEffect } from 'react'
import { View, ActivityIndicator, Alert } from 'react-native'
import { connect } from 'react-redux'

import { authRequest } from '../../store/actions'
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
  useEffect(() => {
    if (token)
      navigation.navigate('EmployeeInfo')
  }, [token])
  return (
    <CenteredContainer>
      {error && Alert.alert(error, 'Please, try again.')}
      {loading
        ? <ActivityIndicator />
        : (
          <>
            <View>
              <StyledText>Please, log in.</StyledText>
            </View>
            <Form
              inputs={signInInputs}
              action="Log In"
              onSubmit={formData => authRequest(formData)} />
          </>)}
    </CenteredContainer>
  )
}

const mapStateToProps = ({ authReducer: { loading, error, token } }) => ({ loading, error, token })
const mapDispatchToProps = dispatch => ({
  authRequest: formData => dispatch(authRequest(formData))
})

export default connect(mapStateToProps, mapDispatchToProps)(withKeyboardDismiss(SignIn))