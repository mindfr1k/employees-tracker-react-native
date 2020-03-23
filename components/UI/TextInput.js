import React, { useState } from 'react'

import { StyledInput, placeholderColor } from '../Styled'

const TextInput = ({ id, placeholder, validation, ...config }) => {
  const [value, setValue ] = useState('')
  return (
    <StyledInput
      id={id}
      placeholder={placeholder}
      value={value}
      onChangeText={text => setValue(text)}
      placeholderTextColor={placeholderColor}
      autoCorrect={false}
      enablesReturnKeyAutomatically
      validation={validation}
      {...config} />
  )
}

export default TextInput