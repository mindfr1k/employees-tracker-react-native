import React from 'react'
import { AppRegistry } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import authReducer from './store/reducers/auth'
import App from './components/App'
import { name } from './app.json'

const store = createStore(authReducer)
const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
AppRegistry.registerComponent(name, () => AppContainer)