export interface ApiError {
  message: string
  unauthorized?: boolean
}

export interface FormData {
  _parts: [string, string][]
}