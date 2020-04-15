import { EMPLOYEE_ADD, EMPLOYEE_GET, EMPLOYEE_UPDATE, EMPLOYEE_DELETE } from './action-types'

export const employeeAdd = formData => ({ type: EMPLOYEE_ADD, formData })
export const employeeGet = query => ({ type: EMPLOYEE_GET, query })
export const employeeUpdate = (formData, id) => ({ type: EMPLOYEE_UPDATE, formData, id })
export const employeeDelete = id => ({ type: EMPLOYEE_DELETE, id })