import {AuthorizationStatus} from '@constants';
import {ActionType} from '@store/action';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_AUTHORIZATION_STATUS:
      return Object.assign({}, state, {
        authorizationStatus: action.status,
      });
  }

  return state;
};

export {user};
