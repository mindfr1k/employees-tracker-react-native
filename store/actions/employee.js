import { EMPLOYEE_ADD, EMPLOYEE_GET, EMPLOYEE_UPDATE } from './action-types'

export const employeeAdd = formData => ({ type: EMPLOYEE_ADD, formData })
export const employeeGet = query => ({ type: EMPLOYEE_GET, query })
export const employeeUpdate = (formData, id) => ({ type: EMPLOYEE_UPDATE, formData, id })