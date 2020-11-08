import renderer from 'react-test-renderer';
import OfferScreen from './offer-screen';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from '@store/reducers/root-reducer';
import {Router, Route} from 'react-router-dom';
import browserHistory from '@/browser-history';
import leaflet from 'leaflet';

leaflet.map = () => ({
  setView: () => {},
  addLayer: () => {},
});

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

describe(`<OfferScreen /> render`, () => {

  it(`correctly renders Offer Screen w/ the offer & reviews if authorized`, () => {

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={browserHistory}>
              <Route exact
                path="/offer/1"
                render={() => (
                  <OfferScreen
                    offer={offers[0]}
                    nearbyHotels={offers}
                    reviews={reviews}
                    isAuthorized={true}
                    resetActiveOffer={noop}
                    onNavigationClick={noop}
                    getNearbyHotels={noop}
                    getCurrentOffer={noop}
                    onOfferClick={noop}
                    getReviewsForHotel={noop}
                  />
                )}
              />
            </Router>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`correctly renders Offer Screen w/ the offer & reviews if not authorized`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={browserHistory}>
              <Route exact
                path="/offer/1"
                render={() => (
                  <OfferScreen
                    offer={offers[1]}
                    nearbyHotels={offers}
                    reviews={reviews}
                    isAuthorized={false}
                    resetActiveOffer={noop}
                    onNavigationClick={noop}
                    getNearbyHotels={noop}
                    getCurrentOffer={noop}
                    onOfferClick={noop}
                    getReviewsForHotel={noop}
                  />
                )}
              />
            </Router>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`correctly renders Offer Screen w/ the offer & no reviews if authorized`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={browserHistory}>
              <Route exact
                path="/offer/1"
                render={() => (
                  <OfferScreen
                    offer={offers[0]}
                    nearbyHotels={offers}
                    reviews={[]}
                    isAuthorized={true}
                    resetActiveOffer={noop}
                    onNavigationClick={noop}
                    getNearbyHotels={noop}
                    getCurrentOffer={noop}
                    onOfferClick={noop}
                    getReviewsForHotel={noop}
                  />
                )}
              />
            </Router>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`correctly renders Offer Screen w/ the offer & no reviews if not authorized`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={browserHistory}>
              <Route exact
                path="/offer/1"
                render={() => (
                  <OfferScreen
                    offer={offers[0]}
                    nearbyHotels={offers}
                    reviews={[]}
                    isAuthorized={false}
                    resetActiveOffer={noop}
                    onNavigationClick={noop}
                    getNearbyHotels={noop}
                    getCurrentOffer={noop}
                    onOfferClick={noop}
                    getReviewsForHotel={noop}
                  />
                )}
              />
            </Router>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`correctly renders Offer Screen w/o the offer`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={browserHistory}>
              <Route exact
                path="/offer/1"
                render={() => (
                  <OfferScreen
                    offer={null}
                    nearbyHotels={offers}
                    reviews={reviews}
                    isAuthorized={false}
                    resetActiveOffer={noop}
                    onNavigationClick={noop}
                    getNearbyHotels={noop}
                    getCurrentOffer={noop}
                    onOfferClick={noop}
                    getReviewsForHotel={noop}
                  />
                )}
              />
            </Router>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`correctly renders Offer Screen w/o the nearby offers`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={browserHistory}>
              <Route exact
                path="/offer/1"
                render={() => (
                  <OfferScreen
                    offer={offers[0]}
                    nearbyHotels={[]}
                    reviews={reviews}
                    isAuthorized={false}
                    resetActiveOffer={noop}
                    onNavigationClick={noop}
                    getNearbyHotels={noop}
                    getCurrentOffer={noop}
                    onOfferClick={noop}
                    getReviewsForHotel={noop}
                  />
                )}
              />
            </Router>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });


});
