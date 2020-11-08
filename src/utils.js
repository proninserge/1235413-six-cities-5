
import {ActionCreator} from '@store/action';
import {adaptOfferToClient} from '@store/adapters';
import {HotelType, AuthorizationStatus, ResponseCode} from '@constants';
import {adaptReviewToClient} from '@store/adapters';
import moment from 'moment';

const getType = (type) => {
  switch (type) {
    case HotelType.APARTMENT:
      return `Apartment`;
    case HotelType.PRIVATE_ROOM:
      return `Private Room`;
    case HotelType.HOUSE:
      return `House`;
    case HotelType.HOTEL:
      return `Hotel`;
    default:
      return `Apartment`;
  }
};

const getStars = (rating) => {
  switch (Math.round(rating)) {
    case 5:
      return `100%`;
    case 4:
      return `80%`;
    case 3:
      return `60%`;
    case 2:
      return `40%`;
    case 1:
      return `20%`;
    case 0:
      return `0%`;
    default:
      return `0%`;
  }
};

const handleNavigationClick = (history, authorizationStatus) => {
  if (authorizationStatus) {
    history.push(`/favorites`);
    return;
  }
  history.push(`/login`);
};

const getAuthorization = (dispatch, {status, data}) => {
  if (status === ResponseCode.SUCCESS) {
    dispatch(ActionCreator.getAuthorization(AuthorizationStatus.AUTH));
    dispatch(ActionCreator.getCredentials(data));
  }
};

const getNearbyHotels = (data) => data.map((datum) => adaptOfferToClient(datum));

const getOffer = (data) => adaptOfferToClient(data);

const getAdaptedOffers = (offers) => offers.map((offer) => adaptOfferToClient(offer));

const deleteOffer = (state, id) => {
  const index = state.favoriteOffers.findIndex((offer) => id === offer.id);
  return [
    ...state.favoriteOffers.slice(0, index),
    ...state.favoriteOffers.slice(index + 1)
  ];
};

const getCities = (offers) => {
  const allCities = new Set([...offers.map((offer) => offer.hotelCity.name)]);
  return [...allCities];
};

const getInitialCity = (offers) => getCities(offers)[0];

const getAdaptedReviews = (reviews) => reviews.length !== 0 ? reviews.map((review) => adaptReviewToClient(review)) : [];

const getReadableDate = (date) => moment(date, `YYYY/MM/DD H:mm Z`).format(`MMMM YYYY`);

export {getType, getReadableDate, getStars, handleNavigationClick, getOffer, getNearbyHotels, getAuthorization, getAdaptedOffers, deleteOffer, getCities, getInitialCity, getAdaptedReviews};
