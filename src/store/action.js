const ActionType = {
  GET_OFFER: `GET_OFFER`,
  GET_OFFERS: `GET_OFFERS`,
  CITY_CHANGE: `CITY_CHANGE`,
  SET_SORT_TYPE: `SET_SORT_TYPE`,
  RESET_SORT_TYPE: `RESET_SORT_TYPE`,
  GET_AUTHORIZATION_STATUS: `GET_AUTHORIZATION_STATUS`,
  GET_CREDENTIALS: `GET_CREDENTIALS`,
  GET_NEARBY: `GET_NEARBY`,
  GET_FAVORITES: `GET_FAVORITES`,
  PUSH_FAVORITE: `PUSH_FAVORITE`,
  DELETE_FAVORITE: `DELETE_FAVORITE`,
  GET_REVIEWS: `GET_REVIEWS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

const ActionCreator = {
  getOffers: (offers) => ({
    type: ActionType.GET_OFFERS,
    offers,
  }),
  changeCity: (city) => ({
    type: ActionType.CITY_CHANGE,
    city,
  }),
  setSortType: (sortType) => ({
    type: ActionType.SET_SORT_TYPE,
    sortType,
  }),
  resetSortType: () => ({
    type: ActionType.RESET_SORT_TYPE,
  }),
  getAuthorization: (status) => ({
    type: ActionType.GET_AUTHORIZATION_STATUS,
    status
  }),
  getCredentials: (data) => ({
    type: ActionType.GET_CREDENTIALS,
    data,
  }),
  getNearbyHotels: (data) => ({
    type: ActionType.GET_NEARBY,
    data,
  }),
  getFavorites: (data) => ({
    type: ActionType.GET_FAVORITES,
    data,
  }),
  pushFavorite: (data) => ({
    type: ActionType.PUSH_FAVORITE,
    data,
  }),
  deleteFavorite: (data) => ({
    type: ActionType.DELETE_FAVORITE,
    data,
  }),
  getOffer: (data) => ({
    type: ActionType.GET_OFFER,
    data,
  }),
  getReviews: (data) => ({
    type: ActionType.GET_REVIEWS,
    data,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};

export {ActionType, ActionCreator};
