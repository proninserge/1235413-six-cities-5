const getFavoritesForCity = (offers, city) => offers.filter((offer) => offer.isFavorite && offer.hotelCity.name === city);

export {getFavoritesForCity};
