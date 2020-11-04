const checkFavorite = (offer, offers) => offers.map((favorite) => favorite.id).includes(offer.id);

export {checkFavorite};
