import {ActionType} from '@store/action';
import {Sorting} from '@constants';
import {deleteOffer, getCities, getInitialCity} from '@/utils';

const initialState = {
  currentOffer: null,
  offers: [],
  currentCity: null,
  cities: [],
  nearbyHotels: [],
  favoriteOffers: [],
  sortType: Sorting.POPULAR,
};

const offerData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {
        offers: action.offers,
        cities: getCities(action.offers),
        currentCity: getInitialCity(action.offers),
      });
    case ActionType.CITY_CHANGE:
      return Object.assign({}, state, {
        currentCity: action.city,
      });
    case ActionType.SET_SORT_TYPE:
      return Object.assign({}, state, {
        sortType: action.sortType,
      });
    case ActionType.RESET_SORT_TYPE:
      return Object.assign({}, state, {
        sortType: Sorting.POPULAR,
      });
    case ActionType.GET_FAVORITES:
      return Object.assign({}, state, {
        favoriteOffers: action.data,
      });
    case ActionType.PUSH_FAVORITE:
      return Object.assign({}, state, {
        favoriteOffers: [...state.favoriteOffers, action.data],
      });
    case ActionType.DELETE_FAVORITE:
      return Object.assign({}, state, {
        favoriteOffers: deleteOffer(state, action.data.id),
      });
    case ActionType.GET_OFFER:
      return Object.assign({}, state, {
        currentOffer: action.data,
      });
    case ActionType.GET_NEARBY:
      return Object.assign({}, state, {
        nearbyHotels: action.data,
      });
    default: return state;
  }
};


export {offerData};
