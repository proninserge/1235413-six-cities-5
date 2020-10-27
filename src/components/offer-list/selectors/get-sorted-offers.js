import {Sorting} from '@constants';

const getSortedOffers = (state) => {
  const offersForCity = state.offers.filter((offer) => offer.city === state.currentCity);
  switch (state.sortType) {
    case Sorting.POPULAR:
      return offersForCity;
    case Sorting.PRICE_LOW_TO_HIGH:
      return offersForCity.sort((a, b) => a.price - b.price);
    case Sorting.PRICE_HIGH_TO_LOW:
      return offersForCity.sort((a, b) => b.price - a.price);
    case Sorting.TOP_RATED:
      return offersForCity.sort((a, b) => a.rate - b.rate);
    default:
      return offersForCity;
  }
};

export {getSortedOffers};
