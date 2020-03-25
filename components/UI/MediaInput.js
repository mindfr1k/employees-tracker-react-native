import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react'
import ImagePicker from 'react-native-image-picker'

import { StyledInput, placeholderColor } from '../Styled'

const MediaInput = ({ id, placeholder, validation, onImageUploaded, onSubmitEditing, ...config }, ref) => {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  useImperativeHandle(ref, () => inputRef.current)

  const uploadImage = () => {
    setValue('Uploading...')
    ImagePicker.showImagePicker({
      title: 'Select employee photo'
    }, ({ didCancel, error, uri }) => {
      if (error)
        console.log(error)
      if (didCancel) {
        setValue('')
        return onSubmitEditing()
      }
      setValue(uri)
      onImageUploaded(uri, id)
      onSubmitEditing()
    })
  }

  return (
    <StyledInput
      ref={inputRef}
      id={id}
      placeholder={placeholder}
      value={value}
      onFocus={uploadImage}
      placeholderTextColor={placeholderColor}
      autoCorrect={false}
      validation={validation}
      {...config} />
  )
}

export default forwardRef(MediaInput)