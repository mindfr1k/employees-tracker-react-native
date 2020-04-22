import { VERIFY_START, VERIFY_END } from '../actions/action-types'

interface AuthPayload {
  type: string
}

interface AuthState {
  loading: boolean
}

const initState: AuthState = {
  loading: false
}

export default (state = initState, { type }: AuthPayload): AuthState => {
  switch (type) {
    case VERIFY_START:
      return { ...state, loading: true }
    case VERIFY_END:
      return { ...state, loading: false }
    default:
      return state
  }
}