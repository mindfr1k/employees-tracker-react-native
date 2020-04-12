import React from 'react'
import { useNavigation } from '@react-navigation/native'

import Form from '../UI/Form'
import TextInput from '../UI/TextInput'
import MediaInput from '../UI/MediaInput'
import withKeyboardDismiss from '../hoc/withKeyboardDismiss'
import { CenteredContainer } from '../Styled'

const UpdateEmployee = () => {
  const { navigate } = useNavigation()
  return (
    <CenteredContainer>
      <Form caption="Update Employee" onSubmitCb={() => navigate('EmployeeInfo')}>
        <TextInput id="surname" placeholder="Surname" />
        <MediaInput id="profilePic" placeholder="Upload photo" />
        <TextInput id="name" placeholder="Name" />
        <TextInput id="secondName" placeholder="Second name" />
        <TextInput id="position" placeholder="Position" />
        <TextInput id="personnelName" placeholder="Personnel number" />
      </Form>
    </CenteredContainer>
  )
}

export default withKeyboardDismiss(UpdateEmployee)