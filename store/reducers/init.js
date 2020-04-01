import { VERIFY_START, VERIFY_END } from '../actions/action-types'

const initState = {
  initLoading: false
}

export default (state = initState, { type }) => {
  switch (type) {
    case VERIFY_START:
      return { ...state, initLoading: true }
    case VERIFY_END:
      return { ...state, initLoading: false }
    default:
      return state
  }
}