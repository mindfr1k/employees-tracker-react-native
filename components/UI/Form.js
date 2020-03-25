import React, { useState, useRef } from 'react'
import { Alert } from 'react-native'

import ActionButton from './ActionButton'
import { StyledForm } from '../Styled'

const Form = ({ action, onSubmit, children }) => {
  const [formData, setFormData] = useState(React.Children.toArray(children)
    .reduce((acc, { props: { id } }) => ({
      ...acc,
      [id]: ''
    }), {}))
  const inputRefs = useRef([])

  const submitHandler = () => {
    const inputs = [firstInput, ...formInputs, lastInput]
    const invalidControl = inputs.filter(({ props: { validation } }) => validation)
      .find(({ props: { validation, id, placeholder } }, i) => {
        const { required } = validation
        if (required && formData[id].trim() === '') {
          validation.errorMessage = `${placeholder} is required!`
          validation.errorRef = inputRefs.current[i]
          return true
        }
      })
    if (invalidControl)
      return Alert.alert(invalidControl.props.validation.errorMessage, `Please, fix this error.`, [{
        text: 'OK',
        onPress: () => invalidControl.props.validation.errorRef.focus()
      }])
    onSubmit(formData)
  }

  const onTextChanged = (text, id) => {
    setFormData({ ...formData, [id]: text })
  }

  const inputs = React.Children.map(children, (child, i) => React.cloneElement(child, {
    onTextChanged,
    onImageUploaded: onTextChanged,
    ref: input => inputRefs.current.push(input),
    onSubmitEditing: i === React.Children.count(children) - 1
      ? undefined
      : () => inputRefs.current[i + 1].focus()
  }))
  const firstInput = React.cloneElement(inputs[0], { autoFocus: true, first: true })
  const lastInput = React.cloneElement(inputs[inputs.length - 1], {
    returnKeyType: 'done',
    last: true
  })
  const formInputs = inputs.slice(1, -1)

  return (
    <StyledForm>
      {firstInput}
      {formInputs}
      {lastInput}
      <ActionButton title={action} onPress={submitHandler} />
    </StyledForm>
  )
}

export default Form