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
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`

export const StyledOpacity = styled.TouchableOpacity`
  margin: 8px 0;
  background-color: ${({ color }) => color};
  border-radius: 5px;
`

export const StyledButton = styled.Text`
  text-align: center;
  color: white;
  font-size: 18px;
  padding: 10px;
`

export const TitleHeaderContainer = styled.View`
  width: 90%;
`

export const StyledSearch = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 8px;
  padding: 5px;
  background-color: #ededed;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

export const SearchInput = styled.TextInput`
  padding-left: 5px;
  flex: 1;
`

export const RightHeaderContainer = styled.View`
  padding-right: 10px;
  width: 100%;
  text-align: center;
`