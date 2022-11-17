const axios = require('axios');

// axios.get('https://random-d.uk/api/v2/random')
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))
  
axios.post('https://ih-crud-api.herokuapp.com/characters', {
  name: 'Harry Yorda',
  occupation: 'Swamp wizard',
  weapon: 'Force and Magic',
  debt: false
})
  .then(res => console.log(res.data))
  .catch(err => console.log(err));

// axios.delete('https://ih-crud-api.herokuapp.com/characters/1')
//   .then(res => console.log(res.data))
//   .catch(err => console.log(err));

axios.put('https://ih-crud-api.herokuapp.com/characters/14', {
  weapon: "fists",
  occupation: "angry"
})
  .then(res => console.log(res.data))
  .catch(err => console.log(err));