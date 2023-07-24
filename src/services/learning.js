import axios from 'axios'

const baseUrl = '/api/learningProgress'

export default {
  getSchedule (deckId) {
    const config = {
      headers: { Authorization: `bearer ${window.localStorage.getItem('authToken')}` }
    }

    const req = axios.get(baseUrl + '/schedule', config, { data: { deck: deckId } })
    return req.then(res => res.data)
  },

  submitAnswer () {
    // pass
  }
}
