const getOffersForCity = (state) => state.offers.filter((offer) => offer.city === state.currentCity);

export {getOffersForCity};
