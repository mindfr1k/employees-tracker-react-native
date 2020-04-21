import 'react-native'

import { REQUEST_START, REQUEST_FAIL, REQUEST_SUCCESS } from '../store/actions/action-types'
import requestReducer from '../store/reducers/request'

describe('redux reducer handles requests correctly', () => {
  const store = { error: null, loading: false }
  const reqPayload = { token: '12v345xt', role: 'sample' }
  it('updates error and loading state on request', () => {
    const newState = requestReducer(store, { type: REQUEST_START })
    expect(newState.loading).toBe(true)
  })
  it('updates error and loading state on request fail', () => {
    const newState = requestReducer(store, { type: REQUEST_FAIL, error: new Error('Error') })
    expect(newState.loading).toBe(false)
    expect(newState.error).toBeTruthy()
  })
  it('updates payload and loading state on request success', () => {
    const newState = requestReducer(store, { type: REQUEST_SUCCESS, ...reqPayload })
    expect(newState).toEqual({ error: null, loading: false, ...reqPayload })
  })
})