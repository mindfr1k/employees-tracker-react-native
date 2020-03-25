import React from 'react'

import Form from '../UI/Form'
import TextInput from '../UI/TextInput'
import MediaInput from '../UI/MediaInput'
import withKeyboardDismiss from '../hoc/withKeyboardDismiss'
import { CenteredContainer } from '../Styled'

const AddEmployee = () => (
  <CenteredContainer>
    <Form action="Add Employee">
      <TextInput id="surname" placeholder="Surname" validation={{ required: true }} />
      <MediaInput id="profilePic" placeholder="Upload photo" validation={{ required: true }} />
      <TextInput id="name" placeholder="Name" validation={{ required: true }} />
      <TextInput id="secondName" placeholder="Second name" validation={{ required: true }} />
      <TextInput id="position" placeholder="Position" validation={{ required: true }} />
      <TextInput id="personnelNumber" placeholder="Personnel number" validation={{ required: true }} />
    </Form>
  </CenteredContainer>
)

export default withKeyboardDismiss(AddEmployee)