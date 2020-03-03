import React, { useState, useRef } from 'react'
import { withNavigation } from 'react-navigation'
import ImagePicker from 'react-native-image-picker'

import { StyledForm, StyledInput } from '../Styled'
import ActionButton from './ActionButton'

const Form = ({ inputs, action, navigation }) => {
  const [controls, setControls] = useState(inputs)
  const inputRefs = useRef({})
  const placeholderColor = '#777'

  const focusField = key => inputRefs.current[key].focus()

  const inputChangedHandler = (text, id) => {
    setControls(controls.map(control => control.id === id ? { ...control, value: text } : control))
  }

  const uploadImage = id => {
    setControls(controls.map(control => control.id === id ? { ...control, value: 'Loading...' } : control))
    ImagePicker.showImagePicker({
      title: 'Select employee photo'
    }, ({ error, fileName }) => {
      if (error)
        console.log(error)
      setControls(controls.map(control => control.id === id ? { ...control, value: fileName } : control))
    })
  }

  const editingSubmittedHandler = (validationSchema, id) => {
    setControls(controls.map(control => control.id === id
      ? { ...control, valid: validate(control.value, validationSchema) }
      : control))
  }

  const submitHandler = () => {
    navigation.navigate('EmployeeInfo')
  }

  const formInputs = controls.map(({ id, ...config }, i) => {
    config['placeholderTextColor'] = placeholderColor
    if (config.isMediaInput)
      config['onTouchStart'] = () => uploadImage(id)
    const { validation } = config
    if (i === 0)
      return <StyledInput
        key={id}
        {...config}
        onSubmitEditing={() => focusField(`field${i + 2}`)}
        onChangeText={text => inputChangedHandler(text, id)} />
    if (i === controls.length - 1)
      return <StyledInput
        key={id}
        {...config}
        ref={input => inputRefs.current[`field${i + 1}`] = input}
        onChangeText={text => inputChangedHandler(text, id)} />
    return <StyledInput
      key={id}
      {...config}
      onSubmitEditing={() => focusField(`field${i + 2}`)}
      ref={input => inputRefs.current[`field${i + 1}`] = input}
      onChangeText={text => inputChangedHandler(text, id)} />
  })
  return (
    <StyledForm>
      {formInputs}
      <ActionButton title={action} onPress={submitHandler} />
    </StyledForm>
  )
}

export default withNavigation(Form)