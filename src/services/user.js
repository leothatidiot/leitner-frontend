import axios from 'axios'

const baseUrl = '/api/users'

const getAllUsers = async () => {
  // axios.get(baseUrl + '/getAllUsers')
}

const getUserById = async ({ email, password }) => {
  const res = await axios.post(baseUrl, { email, password })
  return res.data
}

const createUser = async ({ email, password }) => {
  const res = await axios.post(baseUrl, { email, password })
  return res.data
}

const updateUser = async (param) => {

}

const deleteUser = async (param) => {

}

const login = async ({ email, password }) => {
  const res = await axios.post(baseUrl + '/login', { email, password })
  return res.data
}

const logout = async (param) => {

}

const getDeckByUser = async () => {
  const config = {
    headers: { Authorization: `bearer ${window.localStorage.getItem('authToken')}` }
  }

  const res = await axios.get(`${baseUrl}/learningDecks`, config)
  return res.data
}

const updateUserDeck = (deckIDs) => {
  const config = {
    headers: { Authorization: `bearer ${window.localStorage.getItem('authToken')}` }
  }

  return axios.post(`${baseUrl}/learningDecks`, { learningDecks: deckIDs }, config)
    .then(res => { return res.data })
    // .catch(err => { return err })
}

export default { getAllUsers, getUserById, createUser, updateUser, deleteUser, login, logout, getDeckByUser, updateUserDeck }
