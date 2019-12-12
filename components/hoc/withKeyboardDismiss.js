import React from 'react'
import { TouchableWithoutFeedback, Keyboard, View, KeyboardAvoidingView } from 'react-native'

const withKeyboardDismiss = WrappedComponent => props => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <KeyboardAvoidingView behavior="padding">
          <WrappedComponent {...props} />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default withKeyboardDismiss