import React from 'react'
import { View } from 'react-native'

import { CardContainer, CardHeader, CardText } from '../Styled'

const Card = ({ title, text }) => {
  return (
    <CardContainer>
      <CardHeader>{title}</CardHeader>
      <CardText>{text}</CardText>
      <View style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: '#ddd' }} />
    </CardContainer>
  )
}

export default Card