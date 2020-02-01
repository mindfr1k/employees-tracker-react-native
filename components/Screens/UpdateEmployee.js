import React from 'react'

import Form from '../UI/Form'
import withKeyboardDismiss from '../hoc/withKeyboardDismiss'
import { CenteredContainer } from '../Styled'

const updateEmployeeInputs = [
  {
    id: 'photo',
    placeholder: 'Upload photo',
    value: '',
    returnKeyType: 'next',
    first: true,
    isMediaInput: true
  },
  {
    id: 'surname',
    placeholder: 'Surname',
    value: '',
    autoFocus: true,
    returnKeyType: 'next',
    autoCorrect: false
  },
  {
    id: 'name',
    placeholder: 'Name',
    value: '',
    returnKeyType: 'next',
    autoCorrect: false
  },
  {
    id: 'secondName',
    placeholder: 'Second Name',
    value: '',
    returnKeyType: 'next',
    autoCorrect: false
  },
  {
    id: 'position',
    placeholder: 'Position',
    value: '',
    returnKeyType: 'next',
    autoCorrect: false
  },
  {
    id: 'personnelNumber',
    placeholder: 'Personnel Number',
    value: '',
    last: true,
    returnKeyType: 'done',
    autoCorrect: false
  }
]

const AddEmployee = () => (
  <CenteredContainer>
    <Form action="Update Employee" inputs={updateEmployeeInputs} />
  </CenteredContainer>
)

export default withKeyboardDismiss(AddEmployee)