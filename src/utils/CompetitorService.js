import axios from 'axios';

import dummy from './JsonGenerator/Competitors.json';

function getCompetitorsList() {
  return dummy;
  /*
  return axios({
    method: 'get',
    url: 'https://www.mocky.io/v2/5c0952d12f00007d41637da2',
    timeout: 8000,
  })
    .then(res => {
      if (res.status === 200) return res.data;
      return undefined;
    });
  */
}

export default {
  getCompetitorsList,
};
