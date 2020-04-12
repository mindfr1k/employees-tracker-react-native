import React, { useState, useRef } from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { authVerify } from '../../store/actions'
import ActionButton from './ActionButton'
import { StyledForm } from '../Styled'

const Form = ({ caption, action, onSubmitCb, children }) => {
  const [isRequestIdle, setIsRequestIdle] = useState(true)
  const { loading, error } = useSelector(({ requestReducer: { loading, error } }) => ({ loading, error }))
  const dispatch = useDispatch()

  const [formTextData, setFormTextData] = useState(children
    .filter(({ props: { type } }) => type !== 'file')
    .reduce((acc, { props: { id } }) => ({ ...acc, [id]: '' }), {}))
  const [formMediaData, setFormMediaData] = useState(children
    .filter(({ props: { type } }) => type === 'file')
    .reduce((acc, { props: { id } }) => ({ ...acc, [id]: '' }), {}))
  const inputRefs = useRef({})

  const submitHandler = () => {
    const invalidField = children
      .filter(({ props: { validation, type } }) => validation && validation.required && type !== 'file')
      .find(({ props: { id } }) => formTextData[id].trim() === '')
    if (invalidField) {
      const { props: { id, placeholder } } = invalidField
      return Alert.alert(`${placeholder} is required!`, `Please, fix this error.`, [{
        text: 'OK',
        onPress: () => inputRefs.current[id].focus()
      }])
    }
    const requestData = new FormData()
    Object.entries(formTextData).forEach(([key, value]) => requestData.append(key, value))
    Object.entries(formMediaData).forEach(([key, value]) => requestData.append(key, value))
    dispatch(action(requestData))
    setIsRequestIdle(false)
    setFormTextData(children.filter(({ props: { type } }) => type !== 'file')
      .reduce((acc, { props: { id } }) => ({ ...acc, [id]: '' }), {}))
  }

  const onTextChanged = (data, id) => {
    setFormTextData({ ...formTextData, [id]: data })
  }

  const onImageUploaded = (data, id) => {
    setFormMediaData({ ...formMediaData, [id]: data })
  }

  const inputs = React.Children.map(children, (child, i) => React.cloneElement(child, {
    onTextChanged,
    onImageUploaded,
    ref: input => inputRefs.current[child.props.id] = input,
    onSubmitEditing: i === React.Children.count(children) - 1
      ? undefined
      : () => inputRefs.current[children[i + 1].props.id].focus()
  }))
  const firstInput = React.cloneElement(inputs[0], { autoFocus: true, first: true })
  const lastInput = React.cloneElement(inputs[inputs.length - 1], {
    returnKeyType: 'done',
    last: true
  })
  const formInputs = inputs.slice(1, -1)

  return (
    <StyledForm>
      {loading
        ? <ActivityIndicator />
        : isRequestIdle
          ? (
            <>
              {firstInput}
              {formInputs}
              {lastInput}
              <ActionButton title={caption} onPress={submitHandler} />
            </>
          )
          : !error && onSubmitCb && onSubmitCb()}
      {error && !isRequestIdle && Alert.alert(error.message, 'Please, try again.', [{
        text: 'OK',
        onPress: () => {
          setIsRequestIdle(true)
          if (error.unauthorized)
            dispatch(authVerify())
        }
      }])}
    </StyledForm>
  )
}

export default Form