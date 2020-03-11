import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import SignIn from './Screens/SignIn'
import AddEmployee from './Screens/AddEmployee'
import UpdateEmployee from './Screens/UpdateEmployee'
import EmployeeInfo from './Screens/EmployeeInfo'
import HeaderContainer from './UI/Header/HeaderContainer'

const Stack = createStackNavigator()

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EmployeeInfo" screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="AddEmployee" component={AddEmployee} options={{ headerShown: false }} />
        <Stack.Screen name="UpdateEmployee" component={UpdateEmployee} options={{ headerShown: false }} />
        <Stack.Screen name="EmployeeInfo" component={EmployeeInfo} options={{
          header: () => (
            <SafeAreaView style={{ backgroundColor: '#fff' }}>
              <HeaderContainer />
            </SafeAreaView>
          )
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
)

export default App