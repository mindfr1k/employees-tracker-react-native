import React from 'react'
import { TouchableOpacity, Text, Alert, Animated } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux'

import { CardContainer, CardImage, CardHeader, CardText, CardSeparator, StyledButton } from '../Styled'

const cardFontSize = 16
const opacity = new Animated.Value(0)

const Card = ({ profilePic, surname, name, personnelName, position, role }) => {
  const navigation = useNavigation()
  return (
    <CardContainer>
      <CardImage
        style={{ opacity }}
        source={{ uri: profilePic }}
        onLoad={() => {
          Animated.timing(opacity, { toValue: 1, duration: 500 }).start()
        }}
      />
      <CardHeader>{`${surname} ${name}`}</CardHeader>
      <CardText>
        Personnel number:<Text style={{ fontWeight: 'bold' }}>{` ${personnelName}`}</Text>
        {`\n${position}`}
      </CardText>
      <CardSeparator />
      {role === 'guard' && (
        <TouchableOpacity>
          <StyledButton
            color="#0f0"
            fontSize={cardFontSize}>
            ARRIVED
            </StyledButton>
        </TouchableOpacity>
      )}
      {role === 'hr' && (
        <>
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
        </>
      )}
    </CardContainer>
  )
}

const mapStateToProps = ({ requestReducer: { role } }) => ({ role })

export default connect(mapStateToProps)(Card)