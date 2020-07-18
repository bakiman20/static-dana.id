import axios from 'axios'

export default () =>
  axios
    .all([
      axios.get('https://swapi.co/api/films/1/?format=json'),
      axios.get('https://swapi.co/api/films/2/?format=json'),
      axios.get('https://swapi.co/api/films/3/?format=json'),
      axios.get('https://swapi.co/api/films/4/?format=json'),
      axios.get('https://swapi.co/api/films/5/?format=json'),
    ])
    .then(
      axios.spread((first, second, third, fourth, fifth) => {
        return {
          main: first.data,
          columns: [second.data, third.data, fourth.data, fifth.data],
        }
      })
    )
    .catch(error => console.log(error))
