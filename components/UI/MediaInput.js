import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react'
import ImagePicker from 'react-native-image-picker'

import { StyledInput, placeholderColor } from '../Styled'

const MediaInput = ({ id, placeholder, validation, onSubmitEditing, onImageUploaded, ...config }, ref) => {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  useImperativeHandle(ref, () => inputRef.current)

  const uploadImage = () => {
    setValue('Uploading...')
    ImagePicker.showImagePicker({
      title: 'Select employee photo',
      noData: true,
      quality: 0.1,
      maxHeight: 200,
      maxWidth: 200
    }, ({ didCancel, error, uri, type, fileName }) => {
      if (error)
        console.log(error)
      if (didCancel) {
        setValue('')
        onImageUploaded('', id)
        return onSubmitEditing()
      }
      setValue(uri)
      onImageUploaded({ uri, type, name: fileName }, id)
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