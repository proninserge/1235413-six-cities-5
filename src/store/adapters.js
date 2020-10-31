const adaptToClient = (offer) => {
  const adaptedOffer = Object.assign(
      {},
      offer,
      {
        hotelCity: {
          name: offer.city.name,
          location: {
            lat: offer.city.location.latitude,
            lng: offer.city.location.longitude,
            zoom: offer.city.location.zoom
          }
        },
        previewImage: offer.preview_image,
        isFavorite: offer.is_favorite,
        isPremium: offer.is_premium,
        maxAdults: offer.max_adults,
        hotelHost: {
          id: offer.host.id,
          name: offer.host.name,
          isPro: offer.host.is_pro,
          avatarUrl: offer.host.avatar_url
        },
        hotelLocation: {
          lat: offer.location.latitude,
          lng: offer.location.longitude,
          zoom: offer.location.zoom
        },

      }
  );

  delete adaptedOffer.city;
  delete adaptedOffer.preview_image;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.host;
  delete adaptedOffer.location;

  return adaptedOffer;
};

const adaptToServer = (offer) => {
  const adaptedOffer = Object.assign(
      {},
      offer,
      {}
  );

  return adaptedOffer;
};

export {adaptToClient, adaptToServer};
