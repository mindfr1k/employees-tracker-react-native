import React, { useRef } from 'react'
import { TouchableOpacity, Text, Alert, Animated } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'

import { scheduleUpdate, employeeDelete } from '../../store/actions'
import {
  CardContainer, CardImage, CardHeader, CardText, CardSeparator, StyledButton, cardFontSize
} from '../Styled'

const Card = ({ _id, profilePic, surname, name, secondName, personnelName, position, hasArrived,
  lastShift }) => {
  const opacity = useRef(new Animated.Value(0)).current
  const role = useSelector(({ requestReducer: { role } }) => role)
  const dispatch = useDispatch()
  const { navigate } = useNavigation()
  return (
    <CardContainer>
      <CardImage
        style={{ opacity }}
        source={{ uri: profilePic }}
        onLoad={() => {
          Animated.timing(opacity, { toValue: 1, duration: 500, useNativeDriver: true }).start()
        }}
      />
      <CardHeader>{`${surname} ${name} ${secondName}`}</CardHeader>
      <CardText>
        Personnel number: <Text style={{ fontWeight: 'bold' }}>{`${personnelName}`}</Text>
        {'\n'}{position}
        {role === 'guard' && (
          <>
            <Text style={{ fontWeight: 'bold' }}>{`\nLast shift: `}</Text>{lastShift
              ? `${lastShift}`
              : 'absent'}
          </>
        )}
      </CardText>
      <CardSeparator />
      {role === 'guard' && (
        <TouchableOpacity>
          <StyledButton
            color={hasArrived ? "#008bd1" : "#0f0"}
            fontSize={cardFontSize}
            onPress={() => dispatch(scheduleUpdate(_id))}>
            {hasArrived ? 'DEPARTURED' : 'ARRIVED'}
          </StyledButton>
        </TouchableOpacity>
      )}
      {role === 'hr' && (
        <>
          <TouchableOpacity
            onPress={() => navigate('UpdateEmployee', { employeeId: _id })}>
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
                style: 'destructive',
                onPress: () => dispatch(employeeDelete(_id))
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

export default Card