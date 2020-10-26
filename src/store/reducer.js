import offers from '@/mocks/offers';
import reviews from '@/mocks/reviews';
import {ActionType} from '@store/action';
import {Sorting} from '@constants';

const allCities = new Set([...offers.map((offer) => offer.city)]);
const cities = [...allCities];
const initialCity = cities[0];

const initialState = {
  offers,
  reviews,
  currentCity: initialCity,
  cities,
  sortType: Sorting.POPULAR,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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


export {reducer};
