import React, { useState } from 'react'
import Icon from 'react-native-ionicons'
import { useDispatch } from 'react-redux'

import { employeeGet } from '../../store/actions'
import { StyledSearch, SearchInput, placeholderColor } from '../Styled'

const iconSize = 16

const SearchControl = ({ onFocus, onBlur, reference }) => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  return (
    <StyledSearch>
      <Icon name="search" size={iconSize} color={placeholderColor} />
      <SearchInput
        value={value}
        ref={reference}
        autoCorrect={false}
        enablesReturnKeyAutomatically
        placeholderTextColor={placeholderColor}
        placeholder="Enter personnel number or surname"
        onChangeText={text => setValue(text)}
        onSubmitEditing={() => dispatch(employeeGet(value))}
        onFocus={onFocus}
        onBlur={onBlur} />
    </StyledSearch>
  )
}

export default SearchControl