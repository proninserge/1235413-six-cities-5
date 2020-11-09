import ReactDOM from 'react-dom';
import App from '@components/app/app.connect';
import 'leaflet/dist/leaflet.css';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from '@services/api';
import {Provider} from 'react-redux';
import rootReducer from '@store/reducers/root-reducer';

import {ActionCreator} from '@store/action';
import {AuthorizationStatus} from '@constants';
import {redirect} from '@store/middlewares/redirect';

const api = createAPI(
    () => store.dispatch(ActionCreator.getAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect)
));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
