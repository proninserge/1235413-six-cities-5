import offers from '@/mocks/offers';
import reviews from '@/mocks/reviews';
import {ActionType} from '@store/action';
import {Sorting} from '@constants';

const allCities = new Set([...offers.map((offer) => offer.city)]);
const cities = [...allCities];
const initialCity = cities[0];
const initialOffers = offers.filter((offer) => offer.city === initialCity);

const initialState = {
  hoveredOffer: null,
  currentCity: initialCity,
  offersForCity: initialOffers,
  cities,
  offers,
  reviews,
  sortType: Sorting.POPULAR,
  sortedOffers: initialOffers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return Object.assign({}, state, {
        currentCity: action.city,
      });
    case ActionType.RESET_SORT_TYPE:
      return Object.assign({}, state, {
        sortType: Sorting.POPULAR,
      });
    case ActionType.RESET_HOVERED_OFFER:
      return Object.assign({}, state, {
        hoveredOffer: null,
      });
    case ActionType.RESET_SORTED_OFFERS:
      return Object.assign({}, state, {
        sortedOffers: state.offers.filter((offer) => offer.city === state.currentCity),
      });
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {
        offersForCity: state.offers.filter((offer) => offer.city === state.currentCity),
      });
    case ActionType.GET_HOVERED_OFFER:
      return Object.assign({}, state, {
        hoveredOffer: action.offer,
      });
    case ActionType.SORT_OFFERS:
      switch (action.sort) {
        case Sorting.POPULAR:
          return Object.assign({}, state, {
            sortType: Sorting.POPULAR,
            sortedOffers: offers.filter((offer) => offer.city === state.currentCity),
          });
        case Sorting.PRICE_LOW_TO_HIGH:
          return Object.assign({}, state, {
            sortType: Sorting.PRICE_LOW_TO_HIGH,
            sortedOffers: offers.filter((offer) => offer.city === state.currentCity).sort((a, b) => a.price - b.price),
          });
        case Sorting.PRICE_HIGH_TO_LOW:
          return Object.assign({}, state, {
            sortType: Sorting.PRICE_HIGH_TO_LOW,
            sortedOffers: offers.filter((offer) => offer.city === state.currentCity).sort((a, b) => b.price - a.price),
          });
        case Sorting.TOP_RATED:
          return Object.assign({}, state, {
            sortType: Sorting.TOP_RATED,
            sortedOffers: offers.filter((offer) => offer.city === state.currentCity).sort((a, b) => a.rate - b.rate),
          });
        default:
          return Object.assign({}, state, {
            sortType: Sorting.POPULAR,
            sortedOffers: offers.filter((offer) => offer.city === state.currentCity),
          });
      }
    default: return state;
  }
};


export {reducer};
