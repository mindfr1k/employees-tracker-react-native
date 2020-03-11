import { takeEvery } from 'redux-saga/effects'

import { AUTH_REQUEST, AUTH_VERIFY } from '../actions/action-types'
import { authRequest, isAuthVerified } from './auth'

export function* watchAuth() {
  yield takeEvery(AUTH_REQUEST, authRequest)
  yield takeEvery(AUTH_VERIFY, isAuthVerified)
}