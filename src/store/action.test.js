import {ActionType, ActionCreator} from './action';

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

describe(`Action creators work correctly`, () => {

  it(`Action creator for get offers returns correct action`, () => {
    expect(ActionCreator.getOffers(offers)).toEqual({
      type: ActionType.GET_OFFERS,
      offers,
    });
  });

  it(`Action creator for change city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Lafayette`)).toEqual({
      type: ActionType.CITY_CHANGE,
      city: `Lafayette`,
    });
  });

  it(`Action creator for set sort type returns correct action`, () => {
    expect(ActionCreator.setSortType(`Popular`)).toEqual({
      type: ActionType.SET_SORT_TYPE,
      sortType: `Popular`,
    });
  });

  it(`Action creator for reset sort type returns correct action`, () => {
    expect(ActionCreator.resetSortType()).toEqual({
      type: ActionType.RESET_SORT_TYPE
    });
  });

  it(`Action creator for get authorization returns correct action`, () => {
    expect(ActionCreator.getAuthorization(`AUTH`)).toEqual({
      type: ActionType.GET_AUTHORIZATION_STATUS,
      status: `AUTH`
    });
  });

  it(`Action creator for get credentials returns correct action`, () => {
    expect(ActionCreator.getCredentials({name: `My name`})).toEqual({
      type: ActionType.GET_CREDENTIALS,
      data: {name: `My name`},
    });
  });

  it(`Action creator for get nearby hotels returns correct action`, () => {
    expect(ActionCreator.getNearbyHotels(offers)).toEqual({
      type: ActionType.GET_NEARBY,
      data: offers,
    });
  });

  it(`Action creator for get favorites returns correct action`, () => {
    expect(ActionCreator.getFavorites(offers)).toEqual({
      type: ActionType.GET_FAVORITES,
      data: offers,
    });
  });

  it(`Action creator for push favorite returns correct action`, () => {
    expect(ActionCreator.pushFavorite(offers[0])).toEqual({
      type: ActionType.PUSH_FAVORITE,
      data: offers[0],
    });
  });

  it(`Action creator for delete favorite returns correct action`, () => {
    expect(ActionCreator.deleteFavorite(offers[0])).toEqual({
      type: ActionType.DELETE_FAVORITE,
      data: offers[0],
    });
  });

  it(`Action creator for get offer returns correct action`, () => {
    expect(ActionCreator.getOffer(offers[0])).toEqual({
      type: ActionType.GET_OFFER,
      data: offers[0],
    });
  });

  it(`Action creator for get reviews returns correct action`, () => {
    expect(ActionCreator.getReviews(reviews)).toEqual({
      type: ActionType.GET_REVIEWS,
      data: reviews,
    });
  });

  it(`Action creator for redirect to route returns correct action`, () => {
    expect(ActionCreator.redirectToRoute(`/away`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/away`,
    });
  });

});
