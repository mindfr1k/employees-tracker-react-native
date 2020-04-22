export const baseUrl = 'http://localhost:3502/api'

interface ErrorPayload {
  payload: [
    {
      dataPath: string,
      message: string
    }
  ]
}

export const handleBadRequest = (payload: ErrorPayload | string) => {
  if (Array.isArray(payload)) {
    const [{ dataPath, message }] = payload
    return { message: `${dataPath.slice(1)} ${message}` }
  }
  return { message: payload as string }
}