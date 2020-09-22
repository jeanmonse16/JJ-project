import { navigate } from '@reach/router'

export default (path, event) => {
  if (event) event.preventDefault()
  return navigate(path, { replace: true })
}
