import axios from 'axios'

const baseUrl = '/api/cards'

export default {
  getCardById (cardId) {
    const config = {
      headers: { Authorization: `bearer ${window.localStorage.getItem('authToken')}` }
    }

    const req = axios.get(baseUrl + '/' + cardId, config)
    return req.then(res => res.data)
  }
}
