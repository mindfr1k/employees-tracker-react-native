import React, { useState } from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { authVerify } from '../../store/actions'

export default (component, onSubmit) => {
  const [isRequestIdle, setIsRequestIdle] = useState(true)
  const { loading, error } = useSelector(({ requestReducer: { loading, error } }) => ({ loading, error }))
  const dispatch = useDispatch()
  const Form = React.cloneElement(React.Children.only(component), {
    onSubmit: formData => {
      dispatch(onSubmit(formData))
      setIsRequestIdle(false)
    }
  })
  return () => (
    <>
      {loading
        ? <ActivityIndicator />
        : isRequestIdle && Form
      }
      {error && !isRequestIdle && Alert.alert(error.message, 'Please, try again.', [{
        text: 'OK',
        onPress: () => {
          setIsRequestIdle(true)
          if (error.unauthorized)
            dispatch(authVerify())
        }
      }])}
    </>
  )
}