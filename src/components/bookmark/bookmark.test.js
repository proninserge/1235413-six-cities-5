import renderer from 'react-test-renderer';
import Bookmark from './bookmark';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import browserHistory from '@/browser-history';
import {createStore} from 'redux';
import reducer from '@store/reducers/root-reducer';

const store = createStore(reducer);

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

describe(`<Bookmark /> render`, () => {

  it(`correctly renders Bookmark if authorized`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={browserHistory}>
              <Bookmark
                className={`main`}
                onBookmarkClick={noop}
                offer={offers[0]}
                favoriteOffers={offers}
                isAuthorized={true}
              />
            </Router>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`correctly renders Bookmark if not authorized`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={browserHistory}>
              <Bookmark
                className={`main`}
                onBookmarkClick={noop}
                offer={offers[0]}
                favoriteOffers={offers}
                isAuthorized={false}
              />
            </Router>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

