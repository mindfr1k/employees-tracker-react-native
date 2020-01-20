import React, { useState } from 'react'
import ImagePicker from 'react-native-image-picker'
import { withNavigation } from 'react-navigation'

import { StyledForm, StyledInput } from '../Styled'
import ActionButton from './ActionButton'

const Form = ({ inputs, action, navigation }) => {
  const [controls, setControls] = useState(inputs)
  const inputRefs = {}
  const placeholderColor = '#777'

  const focusField = key => inputRefs[key].focus()

  const inputChangedHandler = (text, id) => {
    setControls(controls.map(control => control.id === id ? { ...control, value: text } : control))
  }

  const uploadImage = id => {
    ImagePicker.showImagePicker({ onData: true }, ({ error, fileName }) => {
      if (error)
        console.log(error)
      setControls(controls.map(control => control.id === id ? { ...control, value: fileName } : control))
    })
  }

  const submitHandler = () => {
    const params = controls.reduce((acc, { id, value }) => ({ ...acc, [id]: value }), {})
    navigation.navigate('EmployeeInfo', params)
  }

  const formInputs = controls.map(({ id, ...config }, i) => {
    config['placeholderTextColor'] = placeholderColor
    if (config.isMediaInput)
      config['onTouchStart'] = () => uploadImage(id)
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
        ref={input => inputRefs[`field${i + 1}`] = input}
        onChangeText={text => inputChangedHandler(text, id)} />
    return <StyledInput
      key={id}
      {...config}
      onSubmitEditing={() => focusField(`field${i + 2}`)}
      ref={input => inputRefs[`field${i + 1}`] = input}
      onChangeText={text => inputChangedHandler(text, id)} />
  })
  return (
    <StyledForm>
      {formInputs}
      <ActionButton title={action} color="#008bd1" onPress={submitHandler} />
    </StyledForm>
  )
}

export default withNavigation(Form)