import { put } from 'redux-saga/effects'

import { authStart, authSuccess, authFail } from '../actions'

const baseUrl = 'http://localhost:3502/api'

export function* auth ({ formData }) {
  yield put(authStart())
  const apiResponse = yield fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  const response = yield apiResponse.json()
}