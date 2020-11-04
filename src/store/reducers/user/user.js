import {AuthorizationStatus} from '@constants';
import {ActionType} from '@store/action';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_AUTHORIZATION_STATUS:
      return Object.assign({}, state, {
        authorizationStatus: action.status,
      });
    case ActionType.GET_CREDENTIALS:
      return Object.assign({}, state, {
        userData: action.data,
      });
  }

  return state;
};

export {user};
