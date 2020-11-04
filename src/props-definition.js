const LOCATION_PROP_SHAPE = PropTypes.shape({
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
}).isRequired;

const CITY_PROP_SHAPE = PropTypes.shape({
  name: PropTypes.string.isRequired,
  location: LOCATION_PROP_SHAPE,
}).isRequired;

const PERSON_PROP_SHAPE = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isPro: PropTypes.bool.isRequired,
  avatarUrl: PropTypes.string.isRequired,
}).isRequired;

const OFFER_PROP_SHAPE = PropTypes.shape({
  hotelCity: CITY_PROP_SHAPE,
  previewImage: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  title: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  hotelHost: PERSON_PROP_SHAPE,
  description: PropTypes.string.isRequired,
  hotelLocation: LOCATION_PROP_SHAPE,
  id: PropTypes.number.isRequired,
});


const REVIEW_PROP_SHAPE = PropTypes.shape({
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  localUser: PERSON_PROP_SHAPE,
});

const OFFERS_PROP_TYPE = PropTypes.arrayOf(OFFER_PROP_SHAPE).isRequired;
const REVIEWS_PROP_TYPE = PropTypes.arrayOf(REVIEW_PROP_SHAPE).isRequired;

export {
  OFFER_PROP_SHAPE,
  REVIEW_PROP_SHAPE,
  OFFERS_PROP_TYPE,
  REVIEWS_PROP_TYPE,
};
