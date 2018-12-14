import axios from 'axios';

import dummy from './JsonGenerator/Shoppinglists.json';

function getShoppinglistsList() {
  return dummy;
  /*
  return axios({
    method: 'get',
    url: 'https://www.mocky.io/v2/5c0965e12f00007b38637e18',
    timeout: 8000,
  })
    .then(res => {
      if (res.status === 200) return res.data;
      return undefined;
    });
  */
}

export default {
  getShoppinglistsList,
};
