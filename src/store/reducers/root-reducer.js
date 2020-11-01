import {combineReducers} from 'redux';
import {offerData} from '@store/reducers/offer-data/offer-data';
import {reviewData} from '@store/reducers/review-data/review-data';
import {user} from '@store/reducers/user/user';

export const NameSpace = {
  OFFERS: `OFFERS`,
  REVIEWS: `REVIEWS`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.OFFERS]: offerData,
  [NameSpace.REVIEWS]: reviewData,
  [NameSpace.USER]: user,
});
