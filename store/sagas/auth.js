import { put } from 'redux-saga/effects'
import AsyncStorage from '@react-native-community/async-storage'
import jwtDecode from 'jwt-decode'

import { authStart, authSuccess, authFail } from '../actions'

const baseUrl = 'http://localhost:3502/api'

export function* authRequest({ formData }) {
  yield put(authStart())
  const response = yield fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  const { status } = response
  if (status === 404)
    return yield put(authFail('User was not found'))
  if (status === 401)
    return yield put(authFail('Incorrect username and/or password'))
  if (status === 400) {
    const [{ dataPath, message }] = JSON.parse((yield response.json()).message)
    return yield put(authFail(`${dataPath.slice(1)} ${message}`))
  }
  if (status === 200) {
    const res = yield response.json()
    const { token, role } = res
    yield AsyncStorage.setItem('@employeesTracker:token', token)
    yield AsyncStorage.setItem('@emplyeesTracker:role', role)
    return yield put(authSuccess(token, role))
  }
  const { message } = yield response.json()
  return yield put(authFail(message))
}

export function* isAuthVerified() {
  const token = yield AsyncStorage.getItem('@employeesTracker:token')
  const { exp } = jwtDecode(token)
  return exp - Date.now() / 1000 ? true : false
}