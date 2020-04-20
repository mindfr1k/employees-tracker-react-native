import { takeEvery, all } from 'redux-saga/effects'

import {
  AUTH_SIGNIN, AUTH_VERIFY, EMPLOYEE_ADD, EMPLOYEE_GET, EMPLOYEE_UPDATE, EMPLOYEE_DELETE, SCHEDULE_UPDATE
} from '../actions/action-types'
import { authSignIn, authVerify } from './auth'
import { employeeAdd, employeeGet, employeeUpdate, employeeDelete } from './employee'
import { scheduleUpdate } from './schedule'

function* watchAuth() {
  yield takeEvery(AUTH_SIGNIN, authSignIn)
  yield takeEvery(AUTH_VERIFY, authVerify)
}

function* watchEmployee() {
  yield takeEvery(EMPLOYEE_ADD, employeeAdd)
  yield takeEvery(EMPLOYEE_GET, employeeGet)
  yield takeEvery(EMPLOYEE_UPDATE, employeeUpdate)
  yield takeEvery(EMPLOYEE_DELETE, employeeDelete)
}

function* watchSchedule() {
  yield takeEvery(SCHEDULE_UPDATE, scheduleUpdate)
}

export default function* rootSaga() {
  yield all([
    watchAuth(),
    watchEmployee(),
    watchSchedule()
  ])
}