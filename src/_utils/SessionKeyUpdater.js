import { getNewSessionKey } from '../_services/user_service'
import AuthMethod from '../AuthMethod'
import RedirectTo from './RedirectTo'

export default (getUserSession, setUserSession, logOutUser) => {
  const [isRunningKeySessionUpdater, setIsRunningKeySessionUpdater] = window.React.useState(false)
  const [timeOutId, setTimeOutId] = window.React.useState(null)

  const start = () => getUserSession() ? runSessionKeyUpdater() : setIsRunningKeySessionUpdater(false)

  const runSessionKeyUpdater = () => {
    const token = window.localStorage.getItem('token')
    setIsRunningKeySessionUpdater(true)
    getNewSessionKey(token)
      .then(response => {
        AuthMethod((payload) => setUserSession(payload), ENV.authMethod === 'jwt' ? response.data.message.key : null)
        setTimeOutId(window.setTimeout(runSessionKeyUpdater, 300000))
      })
      .catch(() => {
        window.localStorage.removeItem('token')
        logOutUser(false)
        window.clearTimeout(timeOutId)
      })
  }

  const stop = () => {
    window.clearTimeout(timeOutId)
  }

  return {
    start: start,
    stop: stop,
    isRunningKeySessionUpdater: () => isRunningKeySessionUpdater
  }
}
