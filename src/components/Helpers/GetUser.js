import axios from 'axios';

export default function (url) {
  axios.get(`${url}/currentUser`).then((response) => {
    return response.data;
  }).catch(() => {
      console.log('Could not get user from server');
    })
}
