import React, { useState, useRef } from 'react'
import { Alert } from 'react-native'
import ImagePicker from 'react-native-image-picker'

import ActionButton from './ActionButton'
import { StyledForm } from '../Styled'

const Form = ({ action, onSubmit, children }) => {
  const [inputState, setInputState] = useState(React.Children.map(children, ({ props: { id } }) => ({
    id,
    value: ''
  })))
  const inputRefs = useRef([])

  const uploadImage = id => {
    setControls(controls.map(control => control.id === id ? { ...control, value: 'Loading...' } : control))
    ImagePicker.showImagePicker({
      title: 'Select employee photo'
    }, ({ didCancel, error, fileName }) => {
      if (error)
        console.log(error)
      didCancel
        ? setControls(controls.map(control => control.id === id ? { ...control, value: '' } : control))
        : setControls(controls.map(control => {
          return control.id === id ? { ...control, value: fileName } : control
        }))
    })
  }

  const submitHandler = () => {
    const inputs = [firstInput, ...formInputs, lastInput]
    const invalidControl = inputs.filter(({ validation }) => validation)
      .find(({ props: { placeholder, value, validation } }, i) => {
        const { required } = validation
        if (required && value.trim() === '') {
          validation.errorMessage = `${placeholder} is required!`
          validation.errorRef = inputRefs.current[i]
          return true
        }
      })
    if (invalidControl)
      return Alert.alert(invalidControl.validation.errorMessage, `Please, fix this error.`, [{
        text: 'OK',
        onPress: () => invalidControl.validation.errorRef.focus()
      }])
    onSubmit(inputs.reduce((acc, { props: { id, value } }) => ({ ...acc, [id]: value }), {}))
  }

  const changeTextHandler = (text, id) => {
    setInputState(inputState.map(control => control.id === id ? { ...control, value: text } : control))
  }

  const inputs = React.Children.map(children, (child, i) => React.cloneElement(child, {
    value: inputState[i].value,
    onChangeText: changeTextHandler,
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