import React from 'react'
import { AppRegistry } from 'react-native'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import requestReducer from './store/reducers/request'
import authReducer from './store/reducers/auth'
import rootSaga from './store/sagas'
import App from './components/App'
import { name } from './app.json'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(combineReducers({ requestReducer, authReducer }),
  composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)
const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
AppRegistry.registerComponent(name, () => AppContainer)