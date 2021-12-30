import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080'
// axios.defaults.headers['Access-Control-Allow-Origin'] = '*'
// axios.defaults.Authorization =
//   'Basic VXNlcjo5ZWE2ZGIxZS1hZGM0LTQxYmEtYmMzOS0yMmVmOTRkYWFmMDE='

const fetchApi = {
  async get() {
    try {
      const { data } = await axios.get('/trip')
      return data
    } catch (err) {
      return err
    }
  },
  async post(submitObject) {
    try {
      const { data } = await axios.post('/trip', submitObject)
      console.log(data)
      return data
    } catch (err) {
      return err
    }
  },
  async delete(id) {
    try {
      const { data } = await axios.delete(`/trip/${id}`)
      return data
    } catch (err) {
      return err
    }
  },
}

export default fetchApi
