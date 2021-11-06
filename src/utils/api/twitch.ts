import axios from 'axios';
import { toast } from 'react-toastify';
import { LS_KEYS } from '../../config/localStorageKeys';

const options = {};

const twitchApi = axios.create(options);

twitchApi.defaults.headers.common[
  'Authorization'
] = `Bearer ${localStorage.getItem(LS_KEYS.APP_TOKEN)}`;

const CONNECTION_ERRORS = {
  REFUSED: 'net::ERR_CONNECTION_REFUSED',
};

twitchApi.defaults.headers.common['Client-Id'] = process.env
  .REACT_APP_CLIENT_ID as string;

const importantErrorStatusCodes = [
  400,
  403,
  404,
  500,
  CONNECTION_ERRORS.REFUSED,
];
const isErrorStatusImportant = (errCode: number): boolean =>
  importantErrorStatusCodes.includes(errCode);

twitchApi.interceptors.response.use(
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

export default twitchApi;
