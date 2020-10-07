import axios from 'axios';
import { toast } from 'react-toastify';
import { LS_KEYS } from '../../config/localStorageKeys';

const options = {};

const api = axios.create(options);

api.defaults.headers.common['authorization'] = `bearer ${localStorage.getItem(
  LS_KEYS.APP_TOKEN,
)}`;

const importantErrorStatusCodes = [400, 403];
const isErrorStatusImportant = (errCode: number): boolean =>
  importantErrorStatusCodes.includes(errCode);

api.interceptors.response.use(
  response => {
    if (isErrorStatusImportant(response.data.status)) {
      toast(`Twitch Error: ${response.data.message}`);
    }
    return response;
  },
  error => error,
);

export default api;
