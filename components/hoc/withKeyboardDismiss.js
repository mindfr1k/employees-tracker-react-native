import React from 'react'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'

const withKeyboardDismiss = WrappedComponent => props => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="padding">
        <WrappedComponent {...props} />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default withKeyboardDismiss