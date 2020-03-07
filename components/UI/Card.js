import React from 'react'
import { Image, TouchableOpacity, Text, Alert } from 'react-native'
import { withNavigation } from 'react-navigation'

import { CardContainer, CardImage, CardHeader, CardText, CardSeparator, StyledButton } from '../Styled'

const cardFontSize = 14

const Card = ({ navigation, profilePic, surname, name, personnelName, position }) => {
  return (
    <CardContainer>
      <CardImage
        source={{ uri: profilePic }} />
      <CardHeader>{`${surname} ${name}`}</CardHeader>
      <CardText>Personnel number:
        <Text style={{ fontWeight: 'bold' }}>
          {` ${personnelName}`}
        </Text>
        {`\n${position}`}
      </CardText>
      <CardSeparator />
      <TouchableOpacity
        onPress={() => navigation.navigate('UpdateEmployee')}>
        <StyledButton
          color="#008bd1"
          fontSize={cardFontSize}>
          EDIT
        </StyledButton>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Alert.alert(`Delete ${surname} ${name}`,
          'Do you want to delete info about this employee?',
          [{
            text: 'Cancel'
          }, {
            text: 'OK',
            style: 'destructive'
          }])}>
        <StyledButton
          color="#f00"
          fontSize={cardFontSize}>
          DELETE
        </StyledButton>
      </TouchableOpacity>
    </CardContainer>
  )
}

export default withNavigation(Card)