import styled from 'styled-components/native'

export const CenteredContainer = styled.SafeAreaView`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const TopContainer = styled.SafeAreaView`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const StyledForm = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`

export const StyledInput = styled.TextInput`
  color: #000;
  border: 1px solid #ababab;
  border-top-left-radius: ${({ first }) => first ? '3px' : '0'};
  border-top-right-radius: ${({ first }) => first ? '3px' : '0'};
  border-bottom-left-radius: ${({ last }) => last ? '3px' : '0'};
  border-bottom-right-radius: ${({ last }) => last ? '3px' : '0'};
  width: 100%;
  padding: 10px;
  margin-top: -1px;
`

export const StyledHeader = styled.Text`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`

export const StyledOpacity = styled.TouchableOpacity`
  width: 100%;
  margin-top: 8px;
  background-color: #008bd1;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

export const StyledButton = styled.Text`
  text-align: center;
  color: white;
  font-size: 18px;
  padding: 10px;
`

export const StyledSearch = styled.View`
  display: flex;
  flex-direction: row;
  width: 95%;
  margin: 8px auto;
  padding: 5px;
  background-color: #ededed;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

export const SearchInput = styled.TextInput`
  width: 100%;
  padding: 5px;
  flex: 1;
`