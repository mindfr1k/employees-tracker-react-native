import React from 'react'
import { View } from 'react-native'

import { StyledHeader } from '../Styled'

const InfoHeader = ({ text }) => (
  <View>
    <StyledHeader>{text}</StyledHeader>
  </View>
)

export default InfoHeader