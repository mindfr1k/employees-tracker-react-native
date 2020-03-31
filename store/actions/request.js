import { REQUEST_START, REQUEST_SUCCESS, REQUEST_FAIL, CLEAR_REQUEST_ERROR } from './action-types'

export const requestStart = () => ({ type: REQUEST_START })
export const requestSuccess = (payload = {}) => ({ type: REQUEST_SUCCESS, ...payload })
export const requestFail = error => ({ type: REQUEST_FAIL, error })
export const clearRequestError = () => ({ type: CLEAR_REQUEST_ERROR })