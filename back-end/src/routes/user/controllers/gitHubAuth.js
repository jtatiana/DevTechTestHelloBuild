'use strict'
import axios from 'axios'

async function gitHubAuth (req, res, next) {
  try {
    const { code } = req.body
    const config = {
      method: 'get',
      url: 'https://github.com/login/oauth/access_token',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        client_id: process.env.GIT_CLIENT_ID,
        client_secret: process.env.GIT_CLIENT_SECRET,
        code
      }
    }
    const response = await axios(config)
    return res.status(200).send({ token: response.data.access_token })
  } catch (e) {
    e.error = e
    next(e)
  }
}
export { gitHubAuth }
