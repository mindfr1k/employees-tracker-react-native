export const baseUrl = 'http://localhost:3502/api'

export const handleBadRequest = payload => {
  if (Array.isArray(payload)) {
    const [{ dataPath, message }] = payload
    return { message: `${dataPath.slice(1)} ${message}` }
  }
  return { message: payload }
}