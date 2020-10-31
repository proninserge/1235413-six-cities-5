import {ActionType} from '@store/action';
import {adaptToClient} from '@store/adapters';
import {Sorting} from '@constants';

const getAdaptedOffers = (offers) => {
  return offers.map((offer) => adaptToClient(offer));
};

const getCities = (offers) => {
  const allCities = new Set([...offers.map((offer) => offer.hotelCity.name)]);
  return [...allCities];
};

const getInitialCity = (offers) => getCities(offers)[0];

const initialState = {
  offers: [],
  currentCity: null,
  cities: [],
  sortType: Sorting.POPULAR,
};

const offerData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {
        offers: getAdaptedOffers(action.offers),
        cities: getCities(getAdaptedOffers(action.offers)),
        currentCity: getInitialCity(getAdaptedOffers(action.offers)),
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
    default: return state;
  }
};


export {offerData};
