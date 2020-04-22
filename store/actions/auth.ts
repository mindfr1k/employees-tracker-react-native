import { AUTH_SIGNIN, AUTH_VERIFY } from './action-types'
import { FormData } from '../../common-interfaces'

export const authSignIn = (formData: FormData) => ({ type: AUTH_SIGNIN, formData })
export const authVerify = () => ({ type: AUTH_VERIFY })