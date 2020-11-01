import ReactDOM from 'react-dom';
import App from '@app';
import reviews from '@/mocks/reviews';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from '@services/api';
import {Provider} from 'react-redux';
import rootReducer from '@store/reducers/root-reducer';

import {ActionCreator} from '@store/action';
import {ApiActionCreator} from '@store/api-action';
import {AuthorizationStatus} from '@constants';

const api = createAPI(
    () => store.dispatch(ActionCreator.getAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

Promise.all([
  store.dispatch(ApiActionCreator.fetchOffers()),
  // store.dispatch(ApiActionCreator.checkAuth()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          reviews={reviews}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
});
