import axios from 'axios';

axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries';

const DictionaryServices = {
  fetchDictionary: (keyword) => {
    // eslint-disable-next-line no-empty
    try {
      return axios
        .get(`/en/${keyword}`)
        .then((res) => res.data)
        .catch((error) => {
          return error.response.data;
        });
      // eslint-disable-next-line no-empty
    } catch (error) {}
  },
};

export default DictionaryServices;
