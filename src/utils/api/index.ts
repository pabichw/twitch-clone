import axios from 'axios';
import { toast } from 'react-toastify';

const options = {};

const api = axios.create(options);

const CONNECTION_ERRORS = {
  REFUSED: 'net::ERR_CONNECTION_REFUSED',
};

const importantErrorStatusCodes = [
  400,
  403,
  404,
  500,
  CONNECTION_ERRORS.REFUSED,
];
const isErrorStatusImportant = (errCode: number): boolean =>
  importantErrorStatusCodes.includes(errCode);

api.interceptors.response.use(
  response => {
    if (isErrorStatusImportant(response.data.status)) {
      toast(`Twitch Error: ${response.data.message}`);
    }
    return response;
  },
  error => {
    if (
      !error.response &&
      importantErrorStatusCodes.includes(CONNECTION_ERRORS.REFUSED)
    ) {
      toast(
        `Oh dear... There is a connection error 🤦‍♂️\nCheck your internet connection or try again later`,
      );
    }
    return error;
  },
);

export default api;
