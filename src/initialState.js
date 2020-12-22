/* eslint-disable quote-props */
import readCookie from './_utils/readCookie'

const authMethod = () => {
  if (ENV.authMethod === 'cookies') {
    if (readCookie('connect.sid')) { return true } else { return false }
  } else {
    if (window.localStorage.getItem('token')) { return true } else { return false }
  }
}

export default {
  'userSession': () => authMethod(),
  'userData': {},
  'token': window.localStorage.getItem('token')
}
