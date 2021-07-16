import Axios from 'axios';
import {REACT_APP_APIURI} from '../config.json';

const axios = Axios.create({
  baseURL: REACT_APP_APIURI,
});

axios.interceptors.request.use(config => {
  // get token or tokens from AsyncStorage and set it or them.

  return config;
});

export default axios;
