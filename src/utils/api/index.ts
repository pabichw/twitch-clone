import axios from 'axios';
import { toast } from 'react-toastify';

const options = {};

const api = axios.create(options);

api.defaults.headers.common['authorization'] = `bearer ${localStorage.getItem(
  'APP_TOKEN',
)}`;

api.interceptors.response.use(
  response => {
    if (response.data.status === 403) {
      toast(`Twitch Error: ${response.data.message}`);
    }
    return response;
  },
  error => error,
);

export default api;
