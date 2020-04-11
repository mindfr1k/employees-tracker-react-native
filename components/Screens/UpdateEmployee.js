import React from 'react'

import Form from '../UI/Form'
import TextInput from '../UI/TextInput'
import MediaInput from '../UI/MediaInput'
import useApiForm from '../hooks/form-api-handler'
import withKeyboardDismiss from '../hoc/withKeyboardDismiss'
import { CenteredContainer } from '../Styled'

const UpdateEmployee = () => {
  const form = (
    <Form action="Update Employee">
      <TextInput id="surname" placeholder="Surname" />
      <MediaInput id="profilePic" placeholder="Upload photo" />
      <TextInput id="name" placeholder="Name" />
      <TextInput id="secondName" placeholder="Second name" />
      <TextInput id="position" placeholder="Position" />
      <TextInput id="personnelNumber" placeholder="Personnel number" />
    </Form>
  )
  const ApiForm = useApiForm(form, null)
  return (
    <CenteredContainer>
      <ApiForm />
    </CenteredContainer>
  )
}

export default withKeyboardDismiss(UpdateEmployee)