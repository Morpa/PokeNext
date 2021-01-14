import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pokemon-wrapper-api.herokuapp.com'
})

export default api
