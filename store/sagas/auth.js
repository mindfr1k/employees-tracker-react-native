import { put } from 'redux-saga/effects'

import { authStart, authSuccess, authFail } from '../actions'

export function* auth() {
  yield put(authStart())
}