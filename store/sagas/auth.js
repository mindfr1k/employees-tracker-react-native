import { put, call } from 'redux-saga/effects'
import AsyncStorage from '@react-native-community/async-storage'
import jwtDecode from 'jwt-decode'

import { baseUrl, handleBadRequest } from './util'
import { requestStart, requestSuccess, requestFail, verifyStart, verifyEnd } from '../actions'

export function* authSignIn({ formData }) {
  yield put(requestStart())
  const requestData = formData._parts.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
  const response = yield fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  })
  const { status } = response
  if (status === 404)
    return yield put(requestFail({ message: 'User was not found' }))
  if (status === 401)
    return yield put(requestFail({ unauthorized: true, message: 'Incorrect username and/or password' }))
  if (status === 400) {
    const errorPayload = JSON.parse((yield response.json()).message)
    return yield put(requestFail(handleBadRequest(errorPayload)))
  }
  if (status === 200) {
    const res = yield response.json()
    const { token, role } = res
    yield AsyncStorage.setItem('@employeesTracker:token', token)
    yield AsyncStorage.setItem('@employeesTracker:role', role)
    return yield put(requestSuccess({ token, role }))
  }
  const { message } = yield response.json()
  yield put(requestFail({ message }))
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