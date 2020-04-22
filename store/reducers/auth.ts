import { VERIFY_START, VERIFY_END } from '../actions/action-types'

const initState = {
  loading: false
}

export default (state = initState, { type }) => {
  switch (type) {
    case VERIFY_START:
      return { ...state, loading: true }
    case VERIFY_END:
      return { ...state, loading: false }
    default:
      return state
  }
}