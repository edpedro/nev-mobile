import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.0.112:3333'
  //baseURL: "https://api-server-ts.herokuapp.com"
})
export default api