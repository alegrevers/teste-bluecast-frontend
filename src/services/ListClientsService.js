import axios from 'axios'

export default {
  getAll() {
    return axios.get('/clients').then(res => res.data)
  }
}
