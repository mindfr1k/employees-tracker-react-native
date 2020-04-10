import React, { useState } from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { authVerify } from '../../store/actions'

export default (Form, onSubmit) => {
  const [isRequestIdle, setIsRequestIdle] = useState(true)
  const { loading, error } = useSelector(({ requestReducer: { loading, error } }) => ({ loading, error }))
  const dispatch = useDispatch()
  return (
    <>
      {loading
        ? <ActivityIndicator />
        : isRequestIdle && (
          <Form
            onSubmit={formData => {
              dispatch(onSubmit(formData))
              setIsRequestIdle(false)
            }} />)
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