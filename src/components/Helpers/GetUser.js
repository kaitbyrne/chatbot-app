import axios from 'axios';

export default function (url) {
  axios.get(`${url}/currentUser`).then((result) => {
    return result.data;
  }).catch(() => {
      console.log('Could not get user from server');
    })
}
