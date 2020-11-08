import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '@services/api';
import {reviewData} from './review-data';
import {ActionType} from '@store/action';
import {ApiActionCreator} from '@store/api-action';

const api = createAPI(() => {});

const rawReviews = [
  {
    "id": 1,
    "user": {
      "id": 1,
      "is_pro": true,
      "name": `Mark Goldberg`,
      "avatar_url": `url`
    },
    "rating": 1,
    "comment": `qwerty`,
    "date": `October 2077`
  }
];

const reviews = [{
  id: 1,
  rating: 1,
  comment: `qwerty`,
  date: `October 2077`,
  localUser: {
    id: 1,
    name: `Mark Goldberg`,
    isPro: true,
    avatarUrl: `url`,
  }
}];


describe(`Review Reducer testing`, () => {
  it(`Reducer without additional parameters returns initial state`, () => {
    expect(reviewData(void 0, {})).toEqual({
      reviews: [],
    });
  });

  it(`Reducer updates reviews by load reviews`, () => {
    expect(reviewData({
      reviews: [],
    }, {
      type: ActionType.GET_REVIEWS,
      data: reviews,
    })).toEqual({
      reviews,
    });
  });

});

describe(`Testing related to reviews async operations`, () => {

  it(`makes a correct API call for reviews`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewLoader = ApiActionCreator.getReviewsForHotel(`1`);

    apiMock
      .onGet(`/comments/1`)
      .reply(200, rawReviews);

    return reviewLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_REVIEWS,
          data: reviews,
        });
      });
  });

  it(`makes a correct API call for adding a review`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const newReviewLoader = ApiActionCreator.pushReviewForHotel(`1`, {comment: `lol`, rating: 2});

    apiMock
      .onPost(`/comments/1`)
      .reply(200, [...rawReviews, rawReviews[0]]);

    return newReviewLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_REVIEWS,
          data: [...reviews, reviews[0]],
        });
      });
  });

});

