import HttpClient from '../Http/HttpClient'
const url = 'user'
const signIn = async (body) => {
  return await HttpClient.post(`${url}/signIn`, body)
}
export default {
  signIn
}
