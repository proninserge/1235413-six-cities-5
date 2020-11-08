import Bookmark from './bookmark';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Router} from 'react-router-dom';
import history from '@/browser-history';

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

describe(`<Bookmark /> e2e testing`, () => {
  it(`Click on Bookmark when authorized calls callback`, () => {
    const onBookmarkClick = jest.fn();
    const wrapper = mount(<Bookmark
      className={`main`}
      onBookmarkClick={onBookmarkClick}
      offer={offers[0]}
      favoriteOffers={offers}
      isAuthorized={true}
    />);

    const container = wrapper.find(`button.button`);

    container.simulate(`click`);
    expect(onBookmarkClick).toHaveBeenCalledTimes(1);
  });

  it(`Click on Bookmark when not authorized does not call callback`, () => {
    const onBookmarkClick = jest.fn();
    const wrapper = mount(
        <Router history={history}>
          <Bookmark
            className={`main`}
            onBookmarkClick={onBookmarkClick}
            offer={offers[0]}
            favoriteOffers={offers}
            isAuthorized={false}
          />
        </Router>);

    const container = wrapper.find(`a`);

    container.simulate(`click`);
    expect(onBookmarkClick).toHaveBeenCalledTimes(0);
  });
});
