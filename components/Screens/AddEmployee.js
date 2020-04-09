import React, { useState } from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { employeeAdd, authVerify } from '../../store/actions'
import Form from '../UI/Form'
import TextInput from '../UI/TextInput'
import MediaInput from '../UI/MediaInput'
import withKeyboardDismiss from '../hoc/withKeyboardDismiss'
import { CenteredContainer } from '../Styled'

const AddEmployee = () => {
  const [isRequestIdle, setIsRequestIdle] = useState(true)
  const { loading, error } = useSelector(({ requestReducer: { loading, error } }) => ({ loading, error }))
  const dispatch = useDispatch()
  return (
    <CenteredContainer>
      {loading
        ? <ActivityIndicator />
        : isRequestIdle && (
          <Form
            action="Add Employee"
            onSubmit={formData => {
              dispatch(employeeAdd(formData))
              setIsRequestIdle(false)
            }}>
            <TextInput id="surname" placeholder="Surname" validation={{ required: true }} />
            <MediaInput id="profilePic" placeholder="Upload photo" validation={{ required: true }} />
            <TextInput id="name" placeholder="Name" validation={{ required: true }} />
            <TextInput id="secondName" placeholder="Second name" validation={{ required: true }} />
            <TextInput id="position" placeholder="Position" validation={{ required: true }} />
            <TextInput id="personnelNumber" placeholder="Personnel number" validation={{ required: true }} />
          </Form>
        )}
      {error && !isRequestIdle && Alert.alert(error.message, 'Please, try again.', [{
        text: 'OK',
        onPress: () => {
          setIsRequestIdle(true)
          if (error.unauthorized)
            dispatch(authVerify())
        }
      }])}
    </CenteredContainer>
  )
}

export default withKeyboardDismiss(AddEmployee)