import React from 'react'
import axios from 'axios';



import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/account/20269867',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer 87778000a202b76c67f0b4c4bb21a70b'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
  
const Try = () => {
  return (
    <div>Try




    </div>
  )
}

export default Try