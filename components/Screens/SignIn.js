import React from 'react'
import { View } from 'react-native'
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

const SignIn = ({ loading, authRequest }) => (
  <CenteredContainer>
    <View>{loading && <StyledText>Rofl!</StyledText>}</View>
    <View>
      <StyledText>Please, log in.</StyledText>
    </View>
    <Form
      inputs={signInInputs}
      action="Log In"
      onSubmit={authRequest} />
  </CenteredContainer>
)

const mapStateToProps = ({ authReducer: { loading, error } }) => ({ loading, error })
const mapDispatchToProps = { authRequest }

export default connect(mapStateToProps, mapDispatchToProps)(withKeyboardDismiss(SignIn))