const getFavoritesForCity = (offers, city) => offers.filter((offer) => offer.isBookmarked && offer.city === city);

export {getFavoritesForCity};
