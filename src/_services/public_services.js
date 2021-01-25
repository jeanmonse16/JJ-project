import Axios from 'axios'

export function getRandomItems (additionalQuerys = []) {
  return Axios({
    method: 'GET',
    // eslint-disable-next-line no-undef
    url: `${ENV.RANDOM_ITEMS_API}?results=20${additionalQuerys.map(query => `&&${query.key}=${query.value}`)}`,
    headers: {
      'Content-type': 'application/json'
    }
  })
}
