import axios from 'axios';

export const onAuthenticate = payload => {
  const URL = `http://localhost:4000/`;
  return axios(URL, {
    method: 'POST/GET',
    headers: {
      'content-type': 'application/json', // whatever you want
    },
    data: payload,
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};