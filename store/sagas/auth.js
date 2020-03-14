import { put, call } from 'redux-saga/effects'
import AsyncStorage from '@react-native-community/async-storage'
import jwtDecode from 'jwt-decode'

import { requestStart, requestSuccess, requestFail, verifyStart, verifyEnd } from '../actions'

const baseUrl = 'http://localhost:3502/api'

export function* authSignIn({ formData }) {
  yield put(requestStart())
  const response = yield fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  const { status } = response
  if (status === 404)
    return yield put(requestFail('User was not found'))
  if (status === 401)
    return yield put(requestFail('Incorrect username and/or password'))
  if (status === 400) {
    const [{ dataPath, message }] = JSON.parse((yield response.json()).message)
    return yield put(requestFail(`${dataPath.slice(1)} ${message}`))
  }
  if (status === 200) {
    const res = yield response.json()
    const { token, role } = res
    yield AsyncStorage.setItem('@employeesTracker:token', token)
    yield AsyncStorage.setItem('@employeesTracker:role', role)
    return yield put(requestSuccess({ token, role }))
  }
  const { message } = yield response.json()
  return yield put(requestFail(message))
}

export function* authVerify() {
  yield put(verifyStart())
  const token = yield AsyncStorage.getItem('@employeesTracker:token')
  if (!token) {
    yield put(verifyEnd())
    return yield put(requestSuccess({ token: null }))
  }
  const { exp } = jwtDecode(token)
  if (exp - Date.now() / 1000 > 0) {
    const role = yield AsyncStorage.getItem('@employeesTracker:role')
    yield put(verifyEnd())
    return yield put(requestSuccess({ token, role }))
  }
  return yield call(logout)
}

function* logout() {
  yield put(verifyStart())
  yield AsyncStorage.removeItem('@employeesTracker:token')
  yield AsyncStorage.removeItem('@employeesTracker:role')
  yield put(verifyEnd())
  return yield put(requestSuccess({ token: null, role: null }))
}