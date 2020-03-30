import axios from 'axios'

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/arthurpc03/api-rocketshoes',
})

export default api

// https://my-json-server.typicode.com/arthurpc03/api-rocketshoes
// http://localhost:3333
