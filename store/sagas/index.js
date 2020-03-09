import { takeEvery } from 'redux-saga/effects'

import { AUTH_REQUEST } from '../actions/action-types'
import { auth } from './auth'

export function* watchAuth() {
  yield takeEvery(AUTH_REQUEST, auth)
}