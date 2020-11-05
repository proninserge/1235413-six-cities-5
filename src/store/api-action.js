import {ActionCreator} from '@store/action';
import {AuthorizationStatus} from '@constants';
import {adaptOfferToClient} from '@store/adapters';
import {getOffer, getNearbyHotels, getAuthorization, getAdaptedReviews, getAdaptedOffers} from '@/utils';

const ApiActionCreator = {
  fetchOffers: () => (dispatch, _getState, api) => (
    api.get(`/hotels`)
      .then(({data}) => dispatch(ActionCreator.getOffers(getAdaptedOffers(data))))
  ),
  checkAuth: () => (dispatch, _getState, api) => (
    api.get(`/login`)
      .then(({status, data}) => {
        getAuthorization(dispatch, {status, data});
      })
      .catch(() => dispatch(ActionCreator.getAuthorization(AuthorizationStatus.NO_AUTH)))
  ),
  login: ({email, password}) => (dispatch, _getState, api) => (
    api.post(`/login`, {email, password})
      .then(({status, data}) => {
        getAuthorization(dispatch, {status, data});
      })
      .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
  ),
  getNearbyHotels: (id) => (dispatch, _getState, api) => (
    api.get(`/hotels/${id}/nearby`)
      .then(({data}) => {
        return getNearbyHotels(dispatch, data);
      })
      .catch(() => dispatch(ActionCreator.redirectToRoute(`/error`)))
  ),
  fetchFavorites: () => (dispatch, _getState, api) => (
    api.get(`/favorite`)
      .then(({data}) => {
        return dispatch(ActionCreator.getFavorites(getAdaptedOffers(data)));
      })
      .catch(() => dispatch(ActionCreator.getFavorites([])))
  ),
  handleFavorites: (id, mark) => (dispatch, _getState, api) => (
    api.post(`/favorite/${id}/${mark}`)
      .then(({data}) => {
        return mark === 1 ? dispatch(ActionCreator.pushFavorite(adaptOfferToClient(data))) : dispatch(ActionCreator.deleteFavorite(data));
      })
  ),
  getCurrentOffer: (id) => (dispatch, _getState, api) => (
    api.get(`/hotels/${id}`)
      .then(({data}) => {
        return getOffer(dispatch, data);
      })
      .catch(() => dispatch(ActionCreator.redirectToRoute(`/error`)))
  ),
  getReviewsForHotel: (id) => (dispatch, _getState, api) => (
    api.get(`/comments/${id}`)
      .then(({data}) => dispatch(ActionCreator.getReviews(getAdaptedReviews(data))))
  ),
  pushReviewForHotel: (id, {comment, rating}) => (dispatch, _getState, api) => (
    api.post(`/comments/${id}`, {comment, rating})
      .then(({data}) => dispatch(ActionCreator.getReviews(getAdaptedReviews(data))))
  ),
};

export {ApiActionCreator};
