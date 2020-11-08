import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '@services/api';
import {user} from './user';
import {ActionType} from '@store/action';
import {ApiActionCreator} from '@store/api-action';

const api = createAPI(() => {});

describe(`User Reducer testing`, () => {
  it(`Reducer without additional parameters returns initial state`, () => {
    expect(user(void 0, {})).toEqual({
      authorizationStatus: `NO_AUTH`,
      userData: null,
    });
  });

  it(`Reducer updates authorization status by server response`, () => {
    expect(user({
      authorizationStatus: `NO_AUTH`,
    }, {
      type: ActionType.GET_AUTHORIZATION_STATUS,
      status: `AUTH`,
    })).toEqual({
      authorizationStatus: `AUTH`,
    });
  });

  it(`Reducer updates credentials by server response`, () => {
    expect(user({
      userData: null,
    }, {
      type: ActionType.GET_CREDENTIALS,
      data: {mock: `Mock`},
    })).toEqual({
      userData: {mock: `Mock`},
    });
  });

});

describe(`Testing related to user cookies async operations`, () => {

  it(`makes a correct API call for checking authorization`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authLoader = ApiActionCreator.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, {fake: true});

    return authLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_AUTHORIZATION_STATUS,
          status: `AUTH`,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.GET_CREDENTIALS,
          data: {fake: true},
        });
      });
  });

  it(`makes a correct API call for logging in`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginLoader = ApiActionCreator.login({email: `me@you.he`, password: `qwerty`});

    apiMock
      .onPost(`/login`)
      .reply(200, {fake: true});

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_AUTHORIZATION_STATUS,
          status: `AUTH`,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.GET_CREDENTIALS,
          data: {fake: true},
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `/`,
        });
      });
  });

});

