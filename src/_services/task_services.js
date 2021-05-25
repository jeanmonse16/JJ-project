import Axios from 'axios'

export function createTask (token, task) {
  return Axios({
    method: 'POST',
    // eslint-disable-next-line no-undef
    url: `${ENV.USERS_API}tasks`,
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: task
  })
}

export function updateTask (token, task) {
  return Axios({
    method: 'PUT',
    // eslint-disable-next-line no-undef
    url: `${ENV.USERS_API}tasks/${task.id}`,
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: task
  })
}

export function uploadFiles (token, files, send = true) {
  return send
    ? Axios({
      method: 'POST',
      // eslint-disable-next-line no-undef
      url: `${ENV.USERS_API}tasks/upload`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: files
    })
    : Promise.resolve({})
}

export function removeTask (token, taskId) {
  return Axios({
    method: 'DELETE',
    url: `${ENV.USERS_API}tasks/${taskId}`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
