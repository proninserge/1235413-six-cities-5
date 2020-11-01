const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
  CITY_CHANGE: `CITY_CHANGE`,
  SET_SORT_TYPE: `SET_SORT_TYPE`,
  RESET_SORT_TYPE: `RESET_SORT_TYPE`,
  GET_AUTHORIZATION_STATUS: `GET_AUTHORIZATION_STATUS`,
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
};

export {ActionType, ActionCreator};
