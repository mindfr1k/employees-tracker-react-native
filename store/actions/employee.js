import { EMPLOYEE_ADD, EMPLOYEE_GET } from './action-types'

export const employeeAdd = formData => ({ type: EMPLOYEE_ADD, formData })
export const employeeGet = query => ({ type: EMPLOYEE_GET, query })