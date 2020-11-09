import axios from 'axios';
import {AppRoute, ResponseCode} from '@constants';
import browserHistory from '@/browser-history';

const BACKEND_URL = `https://5.react.pages.academy/six-cities`;
const REQUEST_TIMEOUT = 5000;

const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    if (browserHistory.location.pathname === AppRoute.ERROR) {
      browserHistory.push(AppRoute.ROOT);
    }

    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response.status === ResponseCode.NOT_FOUND || response.status >= ResponseCode.SERVER_ERROR) {
      browserHistory.push(AppRoute.ERROR);
      throw err;
    }

    if (response.status === ResponseCode.UNAUTHORIZED) {
      onUnauthorized();
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {createAPI};
