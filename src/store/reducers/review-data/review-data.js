import {ActionType} from '@store/action';

const initialState = {
  reviews: [],
};

const reviewData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_REVIEWS:
      return Object.assign({}, state, {
        reviews: action.data,
      });
    default: return state;
  }
};


export {reviewData};
