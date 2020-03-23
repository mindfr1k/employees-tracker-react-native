import React from 'react'

import Form from '../UI/Form'
import withKeyboardDismiss from '../hoc/withKeyboardDismiss'
import { CenteredContainer } from '../Styled'

const addEmployeeInputs = [
  {
    id: 'profilePic',
    placeholder: 'Upload photo',
    value: '',
    returnKeyType: 'next',
    first: true,
    isMediaInput: true,
    validation: { 
      required: true
    }
  },
  {
    id: 'surname',
    placeholder: 'Surname',
    value: '',
    autoFocus: true,
    autoCorrect: false,
    enablesReturnKeyAutomatically: true,
    returnKeyType: 'next',
    validation: {
      required: true
    }
  },
  {
    id: 'name',
    placeholder: 'Name',
    value: '',
    autoCorrect: false,
    enablesReturnKeyAutomatically: true,
    returnKeyType: 'next',
    validation: {
      required: true
    }
  },
  {
    id: 'secondName',
    placeholder: 'Second Name',
    value: '',
    autoCorrect: false,
    enablesReturnKeyAutomatically: true,
    returnKeyType: 'next',
    validation: {
      required: true
    }
  },
  {
    id: 'position',
    placeholder: 'Position',
    value: '',
    autoCorrect: false,
    enablesReturnKeyAutomatically: true,
    returnKeyType: 'next',
    validation: {
      required: true
    }
  },
  {
    id: 'personnelNumber',
    placeholder: 'Personnel Number',
    value: '',
    last: true,
    autoCorrect: false,
    enablesReturnKeyAutomatically: true,
    returnKeyType: 'done',
    validation: {
      required: true
    }
  }
]

const AddEmployee = () => (
  <CenteredContainer>
    <Form action="Add Employee" inputs={addEmployeeInputs} />
  </CenteredContainer>
)

export default withKeyboardDismiss(AddEmployee)