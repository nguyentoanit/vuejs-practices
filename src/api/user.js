import axios from 'axios';
import endpoints from './endpoints';

export default {
  getUsers() {
    return axios.get(endpoints.reqres + 'users');
  }
};
