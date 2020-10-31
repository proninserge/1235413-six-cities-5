import {createSelector} from 'reselect';

const getOffers = (state) => state.offers;

const getCity = (state) => state.currentCity;

const getOffersForCity = createSelector(
    getOffers,
    getCity,
    (offers, city) => {
      return offers.filter((offer) => offer.hotelCity.name === city);
    }
);

export {getOffers, getCity, getOffersForCity};
