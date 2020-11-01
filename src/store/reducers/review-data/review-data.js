import reviews from '@/mocks/reviews';
import {ActionType} from '@store/action';

const initialState = {
  reviews,
};

const reviewData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return Object.assign({}, state, {
        reviews,
      });
    default: return state;
  }
};


export {reviewData};
