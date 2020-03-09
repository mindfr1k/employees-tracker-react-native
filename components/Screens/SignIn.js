import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import Form from '../UI/Form'
import withKeyboardDismiss from '../hoc/withKeyboardDismiss'
import { CenteredContainer, StyledText } from '../Styled'
import { authRequest } from '../../store/actions'

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

const SignIn = () => (
  <CenteredContainer>
    <View>
      <StyledText>Please, log in.</StyledText>
    </View>
    <Form
      inputs={signInInputs}
      action="Log In" />
  </CenteredContainer>
)

const mapStateToProps = ({ loading, error }) => ({ loading, error })
const mapDispatchToProps = { authRequest }

export default connect(mapStateToProps, mapDispatchToProps)(withKeyboardDismiss(SignIn))