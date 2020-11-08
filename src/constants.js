const HotelType = {
  APARTMENT: `apartment`,
  PRIVATE_ROOM: `room`,
  HOUSE: `house`,
  HOTEL: `hotel`
};

const AppRoute = {
  ROOT: `/`,
  OFFER: `/offer/:id`,
  FAVORITES: `/favorites`,
  LOGIN: `/login`,
  ERROR: `/error`
};

const FavoriteStatus = {
  NOT_FAVORITE: 0,
  FAVORITE: 1
};

const PROPERTY_AROUND_NUMBER = 3;
const MAX_IMAGES_COUNT = 6;
const MAX_REVIEWS_NUMBER = 10;
const CommentSymbolCount = {
  MIN: 50,
  MAX: 300,
};

const Sorting = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`,
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const ResponseCode = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

export {
  AppRoute,
  HotelType,
  CommentSymbolCount,
  MAX_REVIEWS_NUMBER,
  PROPERTY_AROUND_NUMBER,
  MAX_IMAGES_COUNT,
  Sorting,
  AuthorizationStatus,
  ResponseCode,
  FavoriteStatus,
};
