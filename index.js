import React from 'react'
import { AppRegistry } from 'react-native'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import authReducer from './store/reducers/auth'
import { watchAuth } from './store/sagas'
import App from './components/App'
import { name } from './app.json'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(combineReducers({ authReducer }), applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watchAuth)
const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
AppRegistry.registerComponent(name, () => AppContainer)