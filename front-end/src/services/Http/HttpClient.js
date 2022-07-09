import ResponseHandlingService from './ResponseHandlingService'
const API_URL = 'http://localhost:3002/api'


const post = async (url, body, headers) => {
  const res = await fetch(`${API_URL}/${url}`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(body)
  })
  return await ResponseHandlingService(res)
}
export default {
  post
}
