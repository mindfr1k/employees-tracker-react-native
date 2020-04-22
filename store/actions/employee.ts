import { EMPLOYEE_ADD, EMPLOYEE_GET, EMPLOYEE_UPDATE, EMPLOYEE_DELETE } from './action-types'
import { FormData } from '../../common-interfaces'

export const employeeAdd = (formData: FormData) => ({ type: EMPLOYEE_ADD, formData })
export const employeeGet = (query: string) => ({ type: EMPLOYEE_GET, query })
export const employeeUpdate = (formData: FormData, id: string) => ({ type: EMPLOYEE_UPDATE, formData, id })
export const employeeDelete = (id: string) => ({ type: EMPLOYEE_DELETE, id })