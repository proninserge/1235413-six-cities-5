const OFFER_PROP_SHAPE = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  rate: PropTypes.number.isRequired,
  adults: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  host: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  isProUser: PropTypes.bool.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
});

const REVIEW_PROP_SHAPE = PropTypes.shape({
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
});

const OFFERS_PROP_TYPE = PropTypes.arrayOf(OFFER_PROP_SHAPE).isRequired;
const REVIEWS_PROP_TYPE = PropTypes.arrayOf(REVIEW_PROP_SHAPE).isRequired;

const PROPERTY_AROUND_NUMBER = 3;

export {
  OFFERS_PROP_TYPE,
  REVIEWS_PROP_TYPE,
  OFFER_PROP_SHAPE,
  REVIEW_PROP_SHAPE,
  PROPERTY_AROUND_NUMBER,
};
