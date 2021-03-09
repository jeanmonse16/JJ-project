import { getNewSessionKey } from '../_services/user_service'
import AuthMethod from '../AuthMethod'
import RedirectTo from './RedirectTo'

export default (getUserSession, setUserSession, logOutUser) => {
  const [isRunningKeySessionUpdater, setIsRunningKeySessionUpdater] = window.React.useState(false)
  const [timeOutId, setTimeOutId] = window.React.useState(null)

  const start = () => setTimeOutId(window.setInterval(runSessionKeyUpdater, 180000))

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
    setIsRunningKeySessionUpdater(false)
  }

  return {
    start: start,
    stop: stop,
    isRunningKeySessionUpdater: () => isRunningKeySessionUpdater
  }
}
