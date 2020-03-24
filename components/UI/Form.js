import React, { useRef } from 'react'
import { Alert } from 'react-native'
import ImagePicker from 'react-native-image-picker'

import ActionButton from './ActionButton'
import { StyledForm } from '../Styled'

const Form = ({ action, onSubmit, children }) => {
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
    const invalidControl = controls
      .filter(({ validation }) => validation)
      .find(({ placeholder, value, validation }, i) => {
        const { required } = validation
        if (required && value.trim() === '') {
          validation['errorMessage'] = `${placeholder} is required!`
          validation['errorRef'] = `field${i + 1}`
          return true
        }
      })
    invalidControl
      ? Alert.alert(invalidControl.validation.errorMessage, `Please, fix this error.`, [{
        text: 'OK',
        onPress: () => !invalidControl.isMediaInput && focusField(invalidControl.validation.errorRef)
      }])
      : onSubmit(controls.reduce((acc, { id, value }) => ({ ...acc, [id]: value }), {}))
  }

  const formInputs = React.Children
    .map(children, (child, i) => {
      if (i === 0)
        return React.cloneElement(child, { autoFocus: true, first: true })
      if (i === React.Children.count(children) - 1)
        return React.cloneElement(child, { returnKeyType: 'done', last: true })
      return child
    })
    .map((child, i, children) => {
      if (i === React.Children.count(children) - 1)
        return React.cloneElement(child, { ref: input => inputRefs.current.push(input) })
      return React.cloneElement(child, {
        ref: input => inputRefs.current.push(input),
        onSubmitEditing: () => inputRefs.current[i + 1].focus()
      })
    })

  return (
    <StyledForm>
      {formInputs}
      <ActionButton title={action} onPress={submitHandler} />
    </StyledForm>
  )
}

export default Form