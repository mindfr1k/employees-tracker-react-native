import { put } from 'redux-saga/effects'
import AsyncStorage from '@react-native-community/async-storage'

import { baseUrl } from './util'
import { requestStart, requestSuccess, requestFail } from '../actions'

export function* scheduleUpdate({ id }) {
  yield put(requestStart())
  const response = yield fetch(`${baseUrl}/schedule/${id}`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${yield AsyncStorage.getItem('@employeesTracker:token')}`
    }
  })
  const { status } = response
  if (status === 200) {
    const scheduleUpdated = yield response.json()
    return yield put(requestSuccess({ scheduleUpdated }))
  }
  const { message } = yield response.json()
  return yield put(requestFail({ message }))
}