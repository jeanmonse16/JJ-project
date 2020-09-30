import Axios from 'axios'
import RedirectTo from '../_utils/RedirectTo'

export function signUp (user) {
  return Axios({
    method: 'post',
    // eslint-disable-next-line no-undef
    url: `${USERS_API}auth/signup`,
    headers: {
      'Content-type': 'application/json'
    },
    data: JSON.stringify({
      user: {
        email: user.email,
        password: user.password
      }
    })
  })
}

export function checkForAccountVerification (email) {
  return Axios({
    method: 'get',
    // eslint-disable-next-line no-undef
    url: `${USERS_API}auth/checkForAccountVerification?email=${email}`,
    headers: { 'Content-type': 'application/json' }
  })
}

export function resendEmailForVerification (email) {
  return Axios({
    method: 'get',
    // eslint-disable-next-line no-undef
    url: `${USERS_API}auth/resendEmailForActivation/${email}`,
    headers: { 'Content-type': 'application/json' }
  })
}

export function activateAccount (hash) {
  return Axios({
    method: 'put',
    url: `${USERS_API}auth/activate-account/${hash}`
  })
}

export function signIn (user) {
  return Axios({
    method: 'post',
    // eslint-disable-next-line no-undef
    url: `${USERS_API}auth/login`,
    headers: {
      'Content-type': 'application/json'
    },
    data: JSON.stringify({
      user: {
        email: user.email,
        password: user.password
      }
    })
  })
}

export function sendEmailForPasswordUpdate (email) {
  return Axios({
    method: 'post',
    // eslint-disable-next-line no-undef
    url: `${USERS_API}auth/sendEmailForPasswordUpdate`,
    headers: {
      'Content-type': 'application/json'
    },
    data: JSON.stringify({
      email: email
    })
  })
}

export function facebookSignIn (user) {
  return Axios({
    method: 'post',
    // eslint-disable-next-line no-undef
    url: `${USERS_API}socialauth/facebook`,
    headers: {
      'Content-type': 'application/json'
    },
    data: JSON.stringify({ user: user })
  })
}

export function googleSignIn (user) {
  return Axios({
    method: 'post',
    // eslint-disable-next-line no-undef
    url: `${USERS_API}socialauth/google`,
    headers: {
      'Content-type': 'application/json'
    },
    data: JSON.stringify({ user: user })
  })
}
