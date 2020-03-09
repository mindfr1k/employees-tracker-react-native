import { AUTH_REQUEST, AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from './action-types'

export const authRequest = () => ({ type: AUTH_REQUEST })
export const authStart = () => ({ type: AUTH_START })
export const authSuccess = (token, role) => ({ type: AUTH_SUCCESS, token, role })
export const authFail = error => ({ type: AUTH_FAIL, error })