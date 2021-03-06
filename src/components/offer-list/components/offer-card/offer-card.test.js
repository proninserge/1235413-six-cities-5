import renderer from 'react-test-renderer';
import OfferCard from './offer-card';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import browserHistory from '@/browser-history';
import {createStore} from 'redux';
import reducer from '@store/reducers/root-reducer';

const store = createStore(reducer);

const noop = () => {};

const offer = {
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
};

describe(`<OfferCard /> render`, () => {

  it(`correctly renders Offer Card`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={browserHistory}>
              <OfferCard
                onOfferClick={noop}
                onOfferHover={noop}
                offer={offer}
                className={`main`}
              />
            </Router>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

