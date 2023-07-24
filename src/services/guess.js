import axios from 'axios'

const baseUrl = '/api/guess'

const getSchedule = () => {
  // userUUID ? 什么的 带token
  // 10个 ?
  axios.get(baseUrl)
}

const postUserAnswerings = () => {

}

const submitUserAnswer = () => {

}

const oneCard = async () => {
  const res = await axios.get('http://localhost:3001/deck') // json-server db.json -p 3001 --watch
  return res.data
}

export default { getSchedule, postUserAnswerings, oneCard }
