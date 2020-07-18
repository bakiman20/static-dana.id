import axios from 'axios'

export default () =>
  axios
    .all([
      axios.get('https://api.chucknorris.io/jokes/random'),
      axios.get('https://api.chucknorris.io/jokes/random'),
      axios.get('https://api.chucknorris.io/jokes/random'),
    ])
    .then(
      axios.spread((first, second, third) => {
        return [first.data, second.data, third.data]
      })
    )
    .catch(error => console.log(error))
