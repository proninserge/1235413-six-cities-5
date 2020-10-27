const ActionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  SET_SORT_TYPE: `SET_SORT_TYPE`,
  RESET_SORT_TYPE: `RESET_SORT_TYPE`,
};

const ActionCreator = {
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
};

export {ActionType, ActionCreator};
