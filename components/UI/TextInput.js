import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react'

import { StyledInput, placeholderColor } from '../Styled'

const TextInput = ({ id, placeholder, validation, onTextChanged, ...config }, ref) => {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  useImperativeHandle(ref, () => inputRef.current)

  const changeTextHandler = (text, id) => {
    setValue(text)
    onTextChanged(text, id)
  }

  return (
    <StyledInput
      ref={inputRef}
      id={id}
      placeholder={placeholder}
      value={value}
      onChangeText={text => changeTextHandler(text, id)}
      placeholderTextColor={placeholderColor}
      autoCorrect={false}
      returnKeyType="next"
      enablesReturnKeyAutomatically
      validation={validation}
      {...config} />
  )
}

export default forwardRef(TextInput)