import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAIL } from '../actions/action-types'

const initState = {
  token: null,
  role: null,
  error: null,
  loading: false
}

export default (state = initState, { type }) => {
  switch (type) {
    case AUTH_REQUEST:
      return state
    case AUTH_SUCCESS:
      return state
    case AUTH_FAIL:
      return state
    default:
      return state
  }
}