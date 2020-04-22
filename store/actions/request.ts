import { REQUEST_START, REQUEST_SUCCESS, REQUEST_FAIL } from './action-types'
import { ApiError } from '../../common-interfaces'

export const requestStart = () => ({ type: REQUEST_START })
export const requestSuccess = (payload = {}) => ({ type: REQUEST_SUCCESS, ...payload })
export const requestFail = (error: ApiError) => ({ type: REQUEST_FAIL, error })