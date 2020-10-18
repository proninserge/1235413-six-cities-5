import offers from '@/mocks/offers';
import reviews from '@/mocks/reviews';
import {ActionType} from '@store/action';
import {getOffers} from '@/location';

const allCities = new Set([...offers.map((offer) => offer.city)]);
const cities = [...allCities];
const initialCity = cities[0];
const initialOffers = offers.filter((offer) => offer.city === initialCity);

const initialState = {
  currentCity: initialCity,
  offersForCity: initialOffers,
  cities,
  offers,
  reviews,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return Object.assign({}, state, {
        currentCity: action.city
      });
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {
        offersForCity: getOffers(state.offers, state.currentCity),
      });
    default: return state;
  }
};


export {reducer};
