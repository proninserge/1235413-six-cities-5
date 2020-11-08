import renderer from 'react-test-renderer';
import MainScreen from './main-screen';
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

const offers = [{
  hotelCity: {
    name: `Lafayette`,
    location: {
      lat: 30,
      lng: 19,
      zoom: 16,
    },
  },
  previewImage: `mock`,
  images: [`mock`, `mock`],
  title: `mock`,
  isFavorite: true,
  isPremium: true,
  rating: 5,
  type: `hotel`,
  bedrooms: 2,
  maxAdults: 2,
  price: 22,
  goods: [`mock`, `mock`],
  hotelHost: {
    id: 2,
    name: `John Doe`,
    isPro: true,
    avatarUrl: `mock`,
  },
  description: `Mock. Mock.`,
  hotelLocation: {
    lat: 50,
    lng: 50,
    zoom: 16,
  },
  id: 1,
},
{
  hotelCity: {
    name: `Lafayette`,
    location: {
      lat: 30,
      lng: 19,
      zoom: 16,
    },
  },
  previewImage: `mock`,
  images: [`mock`, `mock`],
  title: `mock`,
  isFavorite: true,
  isPremium: true,
  rating: 5,
  type: `hotel`,
  bedrooms: 2,
  maxAdults: 2,
  price: 22,
  goods: [`mock`, `mock`],
  hotelHost: {
    id: 2,
    name: `John Doe`,
    isPro: true,
    avatarUrl: `mock`,
  },
  description: `Mock. Mock.`,
  hotelLocation: {
    lat: 50,
    lng: 50,
    zoom: 16,
  },
  id: 2,
}];
const noop = () => {};
const store = createStore(reducer);
store.dispatch(ActionCreator.changeCity(`Lafayette`));

describe(`<MainScreen /> render`, () => {

  it(`correctly renders Main Screen w/ offers`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={browserHistory}>
              <MainScreen
                offers={offers}
                city={`Lafayette`}
                onOfferClick={noop}
                onCityChange={noop}
                onSortTypeClick={noop}
                onNavigationClick={noop}
              />
            </Router>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`correctly renders Main Screen w/o offers`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={browserHistory}>
              <MainScreen
                offers={[]}
                city={`Lafayette`}
                onOfferClick={noop}
                onCityChange={noop}
                onSortTypeClick={noop}
                onNavigationClick={noop}
              />
            </Router>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
