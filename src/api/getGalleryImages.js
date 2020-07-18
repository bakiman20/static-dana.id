import axios from 'axios'

export default () =>
  axios
    .get('https://jsonplaceholder.typicode.com/photos')
    .then(resp => resp.data)
