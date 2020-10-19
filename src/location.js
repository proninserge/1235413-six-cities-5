const getOffers = (offers, city) => offers.filter((offer) => offer.city === city);

export {getOffers};
