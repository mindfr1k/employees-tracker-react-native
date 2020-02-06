import React from 'react'
import { TouchableOpacity, Text, Alert } from 'react-native'
import { withNavigation } from 'react-navigation'

import { CardContainer, CardHeader, CardText, CardSeparator, StyledButton } from '../Styled'

const Card = ({ navigation, id, surname, name, personnelName, position }) => {
  return (
    <CardContainer>
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
          fontSize="14">
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
          fontSize="14">
          DELETE
        </StyledButton>
      </TouchableOpacity>
    </CardContainer>
  )
}

export default withNavigation(Card)