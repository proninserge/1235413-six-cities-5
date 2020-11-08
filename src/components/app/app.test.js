import renderer from 'react-test-renderer';
import App from './app';
import {ActionCreator} from '@store/action';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from '@store/reducers/root-reducer';
import {Router} from 'react-router-dom';
import browserHistory from '@/browser-history';
import leaflet from 'leaflet';

leaflet.map = () => ({
  setView: () => {},
  addLayer: () => {},
});

const store = createStore(reducer);
store.dispatch(ActionCreator.changeCity(`Lafayette`));
const noop = () => {};


describe(`<App /> render`, () => {
  it(`correctly renders App`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={browserHistory}>
              <App
                makeInitialLoad={noop}
              />
            </Router>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
