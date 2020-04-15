import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { employeeAdd } from '../../store/actions'
import Form from '../UI/Form'
import TextInput from '../UI/TextInput'
import MediaInput from '../UI/MediaInput'
import withKeyboardDismiss from '../hoc/withKeyboardDismiss'
import { CenteredContainer } from '../Styled'

const AddEmployee = () => {
  const { navigate } = useNavigation()
  return (
    <CenteredContainer>
      <Form caption="Add Employee" action={employeeAdd} onSubmitCb={() => navigate('EmployeeInfo')}>
        <TextInput id="surname" placeholder="Surname" validation={{ required: true }} />
        <MediaInput id="profilePic" placeholder="Upload photo" type="file" />
        <TextInput id="name" placeholder="Name" validation={{ required: true }} />
        <TextInput id="secondName" placeholder="Second name" validation={{ required: true }} />
        <TextInput id="position" placeholder="Position" validation={{ required: true }} />
        <TextInput id="personnelName" placeholder="Personnel number" validation={{ required: true }} />
      </Form>
    </CenteredContainer>
  )
}

export default withKeyboardDismiss(AddEmployee)