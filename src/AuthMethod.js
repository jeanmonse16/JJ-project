import readCookie from './_utils/readCookie'

export default (action, jwt = null) => {
  if (ENV.authMethod === 'cookies') {
    const sessionCookie = readCookie('connect.sid')
    return action(sessionCookie)
  } else {
    window.sessionStorage.setItem('token', jwt)
    return action(window.sessionStorage.getItem('token'))
  }
}
