import React from 'react'
import { AppRegistry } from 'react-native'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import requestReducer from './store/reducers/request'
import verifyReducer from './store/reducers/verify'
import { watchAuth } from './store/sagas'
import App from './components/App'
import { name } from './app.json'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(combineReducers({ requestReducer, verifyReducer }),
  applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watchAuth)
const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
AppRegistry.registerComponent(name, () => AppContainer)