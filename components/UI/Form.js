import React, { useState, useRef } from 'react'
import { Alert } from 'react-native'
import ImagePicker from 'react-native-image-picker'

import ActionButton from './ActionButton'
import { StyledForm, StyledInput } from '../Styled'

const placeholderColor = '#777'

const Form = ({ inputs, action, onSubmit, children }) => {
  const [controls, setControls] = useState(inputs)
  const inputRefs = useRef({})

  const focusField = child => child.focus()

  const inputChangedHandler = (text, id) => {
    setControls(controls.map(control => control.id === id ? { ...control, value: text } : control))
  }

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

  const formInputs = controls.map(({ id, ...config }, i) => {
    config['placeholderTextColor'] = placeholderColor
    if (config.isMediaInput)
      config['onTouchStart'] = () => uploadImage(id)
    const inputProps = {
      key: id,
      ref: input => inputRefs.current[`field${i + 1}`] = input,
      onChangeText: text => inputChangedHandler(text, id),
      ...config
    }
    if (i === controls.length - 1)
      return <StyledInput {...inputProps} />
    return <StyledInput {...inputProps} onSubmitEditing={() => focusField(children[0])} />
  })
  return (
    <StyledForm>
      {formInputs}
      <ActionButton title={action} onPress={submitHandler} />
    </StyledForm>
  )
}

export default Form