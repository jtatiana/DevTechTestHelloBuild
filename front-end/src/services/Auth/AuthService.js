import storageService from '../Storage/StorageService'
import HttpClient from '../Http/HttpClient'
const OWN_TOKEN_KEY = 'ownToken'
const GITHUB_TOKEN_KEY = 'gitHubToken'

const setOwnToken = (token) => {
  storageService.setData(OWN_TOKEN_KEY, token)
}
const getOwnToken = () => {
  return storageService.getDataByKey(OWN_TOKEN_KEY)
}
const setGitToken = (token) => {
  storageService.setData(GITHUB_TOKEN_KEY, token)
}
const getGitToken = () => {
  return storageService.getDataByKey(GITHUB_TOKEN_KEY)
}

const setGitTokenBackend = async (code) => {
  const res = await HttpClient.post('user/gitHubAuth', { code }, {
    authorization: `Bearer ${getOwnToken()}`
  })
  setGitToken(res.token)
}
const isAuthenticated = () => getGitToken()
const logOut = () => {
  storageService.clearAll()
  window.location.pathname = '/signIn'
}
export default {
  setOwnToken,
  getOwnToken,
  setGitToken,
  getGitToken,
  setGitTokenBackend,
  isAuthenticated,
  logOut
}
