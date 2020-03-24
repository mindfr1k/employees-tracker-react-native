import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react'

import { StyledInput, placeholderColor } from '../Styled'

const TextInput = ({ id, placeholder, validation, ...config }, ref) => {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  useImperativeHandle(ref, () => inputRef.current)
  return (
    <StyledInput
      ref={inputRef}
      id={id}
      placeholder={placeholder}
      value={value}
      onChangeText={text => setValue(text)}
      placeholderTextColor={placeholderColor}
      autoCorrect={false}
      returnKeyType="next"
      enablesReturnKeyAutomatically
      validation={validation}
      {...config} />
  )
}

export default forwardRef(TextInput)