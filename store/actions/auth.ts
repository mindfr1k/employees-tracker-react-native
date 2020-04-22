import { AUTH_SIGNIN, AUTH_VERIFY } from './action-types'

export const authSignIn = formData => ({ type: AUTH_SIGNIN, formData })
export const authVerify = () => ({ type: AUTH_VERIFY })