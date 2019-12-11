import React from 'react'
import { TouchableWithoutFeedback, Keyboard, View, KeyboardAvoidingView } from 'react-native'

const withKeyboardDismiss = WrappedComponent => props => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View>
      <KeyboardAvoidingView behavior="position">
        <WrappedComponent {...props} />
      </KeyboardAvoidingView>
    </View>
  </TouchableWithoutFeedback>
)

export default withKeyboardDismiss