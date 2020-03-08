import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from '../actions/action-types'

const initState = {
  token: null,
  role: null
}

export default (state = initState, { type }) => {
  switch (type) {
    case AUTH_START:
      return state
    case AUTH_SUCCESS:
      return state
    case AUTH_FAIL:
      return state
  }
}