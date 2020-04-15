import { put } from 'redux-saga/effects'
import AsyncStorage from '@react-native-community/async-storage'

import { baseUrl, handleBadRequest } from './util'
import { requestStart, requestSuccess, requestFail } from '../actions'

export function* employeeAdd({ formData }) {
  yield put(requestStart())
  const response = yield fetch(`${baseUrl}/employees`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${yield AsyncStorage.getItem('@employeesTracker:token')}`
    },
    body: formData
  })
  const { status } = response
  if (status === 401)
    return yield put(requestFail({ unauthorized: true, message: 'Log in again to proceed.' }))
  if (status === 400) {
    const errorPayload = JSON.parse((yield response.json()).message)
    return yield put(requestFail(handleBadRequest(errorPayload)))
  }
  if (status === 201) {
    const employeeAdded = yield response.json()
    return yield put(requestSuccess({ employeeAdded }))
  }
  const { message } = yield response.json()
  return yield put(requestFail({ message }))
}

export function* employeeGet({ query }) {
  yield put(requestStart())
  const response = yield fetch(`${baseUrl}/employees?query=${query}`, {
    headers: {
      'Authorization': `Bearer ${yield AsyncStorage.getItem('@employeesTracker:token')}`
    }
  })
  const { status } = response
  if (status === 404)
    return yield put(requestFail({ message: 'Sorry, there is no corresponding employee.' }))
  if (status === 400) {
    const errorPayload = JSON.parse((yield response.json()).message)
    return yield put(requestFail(handleBadRequest(errorPayload)))
  }
  if (status === 200) {
    const employees = yield response.json()
    return yield put(requestSuccess({ employees }))
  }
  const { message } = yield response.json()
  return yield put(requestFail({ message }))
}

export function* employeeUpdate({ id, formData }) {
  yield put(requestStart())
  const response = yield fetch(`${baseUrl}/employee/${id}`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${yield AsyncStorage.getItem('@employeesTracker:token')}`
    },
    body: formData
  })
  const { status } = response
  if (status === 400) {
    const errorPayload = JSON.parse((yield response.json()).message)
    return yield put(requestFail(handleBadRequest(errorPayload)))
  }
  if (status === 200) {
    const employeeUpdated = yield response.json()
    return yield put(requestSuccess({ employeeUpdated }))
  }
  const { message } = yield response.json()
  return yield put(requestFail({ message }))
}

export function* employeeDelete({ id }) {
  yield put(requestStart())
  const response = yield fetch(`${baseUrl}/employee/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${yield AsyncStorage.getItem('@employeesTracker:token')}`
    }
  })
  const { status } = response
  if (status === 400) {
    const errorPayload = JSON.parse((yield response.json()).message)
    return yield put(requestFail(handleBadRequest(errorPayload)))
  }
  if (status === 204) {
    yield response
    return yield put(requestSuccess({ employeeDeleted: true }))
  }
  const { message } = yield response.json()
  return yield put(requestFail({ message }))
}