import { REQUEST_START, REQUEST_SUCCESS, REQUEST_FAIL } from '../actions/action-types'
import { ApiError } from '../../common-interfaces'

interface Employee {
  _id: string
  profilePic: string
  surname: string
  name: string
  secondName: string
  personnelName: string
  position: string
  hasArrived: string,
  lastShift: string
}

interface RequestPayload {
  type: string
  error?: ApiError
  token?: string | null
  role?: string
  employeeAdded?: string
  employeeUpdated?: string
  employeeDeleted?: string
  employees?: Employee[]
}

interface RequestState {
  error: ApiError | null
  loading: boolean
  employees: Employee[] | null
}

const initState: RequestState = {
  error: null,
  loading: false,
  employees: null
}

export default (state = initState, { type, ...payload }: RequestPayload): RequestState => {
  switch (type) {
    case REQUEST_START:
      return { ...state, loading: true, error: null, employees: null }
    case REQUEST_SUCCESS:
      return { ...state, loading: false, ...payload }
    case REQUEST_FAIL:
      const { error } = payload
      return { ...state, loading: false, error }
    default:
      return state
  }
}