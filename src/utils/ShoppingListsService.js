import axios from 'axios';

function getShoppinglistsList() {
  return axios({
    method: 'get',
    url: 'https://www.mocky.io/v2/5c0965e12f00007b38637e18',
    timeout: 4000,
  })
    .then(res => {
      if (res.status === 200) return res.data;
      return undefined;
    });
}

export default {
  getShoppinglistsList,
};
