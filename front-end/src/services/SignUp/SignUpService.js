import HttpClient from '../Http/HttpClient'
const url = 'user'
const signUp = async (body) => {
  return await HttpClient.post(`${url}/signUp`, body)
}
export default {
  signUp
}
