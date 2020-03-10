import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from '../actions/action-types'

const initState = {
  token: null,
  role: null,
  error: null,
  loading: false
}

export default (state = initState, { type, error, token, role }) => {
  switch (type) {
    case AUTH_START:
      return { ...state, loading: true, error: null }
    case AUTH_SUCCESS:
      return { ...state, token, role }
    case AUTH_FAIL:
      return { ...state, loading: false, error }
    default:
      return state
  }
}