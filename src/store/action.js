const ActionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  GET_OFFERS: `GET_OFFERS`,
  GET_HOVERED_OFFER: `GET_HOVERED_OFFER`,
  SORT_OFFERS: `SORT_OFFERS`,
  RESET_SORT_TYPE: `RESET_SORT_TYPE`,
  RESET_HOVERED_OFFER: `RESET_HOVERED_OFFER`,
  RESET_SORTED_OFFERS: `RESET_SORTED_OFFERS`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CITY_CHANGE,
    city,
  }),
  getOffers: () => ({
    type: ActionType.GET_OFFERS,
  }),
  getHoveredOffer: (offer) => ({
    type: ActionType.GET_HOVERED_OFFER,
    offer,
  }),
  sortOffers: (sort) => ({
    type: ActionType.SORT_OFFERS,
    sort,
    sortType: sort,
  }),
  resetSortType: () => ({
    type: ActionType.RESET_SORT_TYPE,
  }),
  resetHoveredOffer: () => ({
    type: ActionType.RESET_HOVERED_OFFER,
  }),
  resetSortedOffers: () => ({
    type: ActionType.RESET_SORTED_OFFERS,
  }),
};

export {ActionType, ActionCreator};
