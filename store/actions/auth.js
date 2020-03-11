import { AUTH_REQUEST, AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_VERIFY } from './action-types'

export const authRequest = formData => ({ type: AUTH_REQUEST, formData })
export const authStart = () => ({ type: AUTH_START })
export const authSuccess = (token, role) => ({ type: AUTH_SUCCESS, token, role })
export const authFail = error => ({ type: AUTH_FAIL, error })
export const authVerify = () => ({ type: AUTH_VERIFY })