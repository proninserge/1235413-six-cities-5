import OfferCard from './offer-card';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import browserHistory from '@/browser-history';
import {createStore} from 'redux';
import reducer from '@store/reducers/root-reducer';

const store = createStore(reducer);

configure({adapter: new Adapter()});


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

describe(`<OfferCard /> e2e testing`, () => {
  it(`Click on offer picture calls callback`, () => {
    const onOfferClick = jest.fn();
    const onOfferHover = jest.fn();
    const wrapper = mount(
        <Provider store={store}>
          <Router history={browserHistory}>
            <OfferCard
              onOfferClick={onOfferClick}
              onOfferHover={onOfferHover}
              offer={offers[0]}
              className={`mail`}
            />
          </Router>
        </Provider>);

    const container = wrapper.find(`.place-card__image-wrapper a`);

    container.simulate(`click`);
    expect(onOfferClick).toHaveBeenCalledWith(offers[0]);
    expect(onOfferClick).toHaveBeenCalledTimes(1);
  });

  it(`Click on offer picture calls callback`, () => {
    const onOfferClick = jest.fn();
    const onOfferHover = jest.fn();
    const wrapper = mount(
        <Provider store={store}>
          <Router history={browserHistory}>
            <OfferCard
              onOfferClick={onOfferClick}
              onOfferHover={onOfferHover}
              offer={offers[0]}
              className={`mail`}
            />
          </Router>
        </Provider>);

    const container = wrapper.find(`.place-card__name a`);

    container.simulate(`click`);
    expect(onOfferClick).toHaveBeenCalledWith(offers[0]);
    expect(onOfferClick).toHaveBeenCalledTimes(1);
  });

  it(`Hover on offer article calls callback`, () => {
    const onOfferClick = jest.fn();
    const onOfferHover = jest.fn();
    const wrapper = mount(
        <Provider store={store}>
          <Router history={browserHistory}>
            <OfferCard
              onOfferClick={onOfferClick}
              onOfferHover={onOfferHover}
              offer={offers[0]}
              className={`mail`}
            />
          </Router>
        </Provider>);

    const container = wrapper.find(`article`);

    container.simulate(`mouseover`);
    expect(onOfferHover).toHaveBeenCalledWith(offers[0]);
    expect(onOfferHover).toHaveBeenCalledTimes(1);
  });

});
