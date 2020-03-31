import { REQUEST_START, REQUEST_SUCCESS, REQUEST_FAIL, CLEAR_REQUEST_ERROR } from '../actions/action-types'

const initState = {
  error: null,
  loading: false
}

export default (state = initState, { type, ...payload }) => {
  switch (type) {
    case REQUEST_START:
      return { ...state, loading: true, error: null }
    case REQUEST_SUCCESS:
      return { ...state, loading: false, ...payload }
    case REQUEST_FAIL:
      const { error } = payload
      return { ...state, loading: false, error }
    case CLEAR_REQUEST_ERROR:
      return { ...state, error: null }
    default:
      return state
  }
}