import {Sorting} from '@constants';
import {getOffers, getCity} from '@components/main-screen/selectors/get-offers-for-city';
import {createSelector} from 'reselect';

const getSortType = (state) => state.sortType;

const getSortedOffers = createSelector(
    getOffers,
    getSortType,
    getCity,
    (offers, sortType, city) => {
      const offersForCity = offers.filter((offer) => offer.hotelCity.name === city);
      switch (sortType) {
        case Sorting.POPULAR:
          return offersForCity;
        case Sorting.PRICE_LOW_TO_HIGH:
          return offersForCity.sort((a, b) => a.price - b.price);
        case Sorting.PRICE_HIGH_TO_LOW:
          return offersForCity.sort((a, b) => b.price - a.price);
        case Sorting.TOP_RATED:
          return offersForCity.sort((a, b) => a.rating - b.rating);
        default:
          return offersForCity;
      }
    }
);

export {getSortedOffers};
