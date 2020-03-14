import { takeEvery } from 'redux-saga/effects'

import { AUTH_SIGNIN, AUTH_VERIFY } from '../actions/action-types'
import { authSignIn, authVerify } from './auth'

export function* watchAuth() {
  yield takeEvery(AUTH_SIGNIN, authSignIn)
  yield takeEvery(AUTH_VERIFY, authVerify)
}