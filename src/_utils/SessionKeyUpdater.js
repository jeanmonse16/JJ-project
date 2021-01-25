import { getNewSessionKey } from '../_services/user_service'
import AuthMethod from '../AuthMethod'
import RedirectTo from './RedirectTo'

export default (getUserSession, setUserSession, logOutUser) => {
  const [isRunningKeySessionUpdater, setIsRunningKeySessionUpdater] = window.React.useState(false)
  const [timeOutId, setTimeOutId] = window.React.useState(null)

  const start = () => getUserSession() ? setTimeOutId(window.setInterval(runSessionKeyUpdater, 300000)) : setIsRunningKeySessionUpdater(false)

  const runSessionKeyUpdater = () => {
    const token = window.localStorage.getItem('token')
    setIsRunningKeySessionUpdater(true)
    getNewSessionKey(token)
      .then(response => {
        AuthMethod((payload) => setUserSession(payload), ENV.authMethod === 'jwt' ? response.data.message.key : null)
      })
      .catch(() => {
        window.localStorage.removeItem('token')
        logOutUser(false)
        window.clearInterval(timeOutId)
      })
  }

  const stop = () => {
    window.clearInterval(timeOutId)
  }

  return {
    start: start,
    stop: stop,
    isRunningKeySessionUpdater: () => isRunningKeySessionUpdater
  }
}
