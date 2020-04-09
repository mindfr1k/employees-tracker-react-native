import React, { useState } from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'

import { authSignIn } from '../../store/actions'
import Form from '../UI/Form'
import TextInput from '../UI/TextInput'
import withKeyboardDismiss from '../hoc/withKeyboardDismiss'
import { CenteredContainer } from '../Styled'

const SignIn = () => {
  const { navigate } = useNavigation()
  const [isRequestIdle, setIsRequestIdle] = useState(true)
  const { loading, error } = useSelector(({ requestReducer: { loading, error } }) => ({ loading, error }))
  const dispatch = useDispatch()
  return (
    <CenteredContainer>
      {loading
        ? <ActivityIndicator />
        : isRequestIdle && (
          <Form
            action="Log In"
            onSubmit={formData => {
              dispatch(authSignIn(formData))
              setIsRequestIdle(false)
            }}>
            <TextInput id="username" placeholder="Username" validation={{ required: true }}
              autoCapitalize="none" />
            <TextInput id="password" placeholder="Password" validation={{ required: true }} />
          </Form>
        )}
      {error && !isRequestIdle && Alert.alert(error.message, 'Please, try again.', [{
        text: 'OK',
        onPress: () => {
          error.unauthorized && navigate('SignIn')
          setIsRequestIdle(true)
        }
      }])}
    </CenteredContainer>
  )
}

export default withKeyboardDismiss(SignIn)