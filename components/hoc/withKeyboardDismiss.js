import React from 'react'
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native'

const withKeyboardDismiss = WrappedComponent => props => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <WrappedComponent {...props} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default withKeyboardDismiss