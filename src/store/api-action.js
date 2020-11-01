import {ActionCreator} from '@store/action';
import {AuthorizationStatus} from '@constants';

const ApiActionCreator = {
  fetchOffers: () => (dispatch, _getState, api) => (
    api.get(`/hotels`)
      .then(({data}) => dispatch(ActionCreator.getOffers(data)))
  ),
  checkAuth: () => (dispatch, _getState, api) => (
    api.get(`/login`)
      .then(() => dispatch(ActionCreator.getAuthorization(AuthorizationStatus.AUTH)))
      .catch((err) => {
        throw err;
      })
  ),
  login: ({login: email, password}) => (dispatch, _getState, api) => (
    api.post(`/login`, {email, password})
      .then(() => dispatch(ActionCreator.getAuthorization(AuthorizationStatus.AUTH)))
  )
};

export {ApiActionCreator};
