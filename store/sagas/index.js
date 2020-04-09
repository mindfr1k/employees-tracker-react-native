import { takeEvery, all } from 'redux-saga/effects'

import { AUTH_SIGNIN, AUTH_VERIFY, EMPLOYEE_ADD } from '../actions/action-types'
import { authSignIn, authVerify } from './auth'
import { employeeAdd } from './employee'

function* watchAuth() {
  yield takeEvery(AUTH_SIGNIN, authSignIn)
  yield takeEvery(AUTH_VERIFY, authVerify)
}

function* watchEmployee() {
  yield takeEvery(EMPLOYEE_ADD, employeeAdd)
}

export default function* rootSaga() {
  yield all([
    watchAuth(),
    watchEmployee()
  ])
}