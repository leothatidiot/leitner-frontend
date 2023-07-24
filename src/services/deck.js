import axios from 'axios'

const baseUrl = '/api/decks'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAllDecks = async () => {
  const config = {
    headers: { Authorization: `bearer ${window.localStorage.getItem('authToken')}` }
  }

  const res = await axios.get(baseUrl, config)
  return res.data
}

const getDeckById = async (deckId) => {
  const config = {
    headers: { Authorization: token }
  }

  const res = await axios.get(`${baseUrl}/${deckId}`, config)
  return res.data
}

export default { setToken, getAllDecks, getDeckById }
