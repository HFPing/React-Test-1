import axios from 'axios';

function getCompetitorsList() {
  return axios({
    method: 'get',
    url: 'https://www.mocky.io/v2/5c0952d12f00007d41637da2',
    timeout: 4000,
  })
    .then(res => {
      if (res.status === 200) return res.data;
      return undefined;
    });
}

export default {
  getCompetitorsList,
};
