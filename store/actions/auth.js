import { AUTH_SIGNIN, AUTH_VERIFY, REQUEST_START, REQUEST_SUCCESS, REQUEST_FAIL } from './action-types'

export const authSignIn = formData => ({ type: AUTH_SIGNIN, formData })
export const authVerify = () => ({ type: AUTH_VERIFY })
export const requestStart = () => ({ type: REQUEST_START })
export const requestSuccess = (token, role) => ({ type: REQUEST_SUCCESS, token, role })
export const requestFail = error => ({ type: REQUEST_FAIL, error })