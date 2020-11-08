import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '@services/api';
import {offerData} from './offer-data';
import {ActionType} from '@store/action';
import {ApiActionCreator} from '@store/api-action';

const api = createAPI(() => {});

const rawOffers = [
  {
    "city": {
      "name": `Lafayette`,
      "location": {
        "latitude": 30,
        "longitude": 19,
        "zoom": 16
      }
    },
    "preview_image": `mock`,
    "images": [`mock`, `mock`],
    "title": `mock`,
    "is_favorite": true,
    "is_premium": true,
    "rating": 5,
    "type": `hotel`,
    "bedrooms": 2,
    "max_adults": 2,
    "price": 22,
    "goods": [`mock`, `mock`],
    "host": {
      "id": 2,
      "name": `John Doe`,
      "is_pro": true,
      "avatar_url": `mock`
    },
    "description": `Mock. Mock.`,
    "location": {
      "latitude": 50,
      "longitude": 50,
      "zoom": 16
    },
    "id": 1
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
}];

describe(`Offer Reducer testing`, () => {
  it(`Reducer without additional parameters returns initial state`, () => {
    expect(offerData(void 0, {})).toEqual({
      currentOffer: null,
      offers: [],
      currentCity: null,
      cities: [],
      nearbyHotels: [],
      favoriteOffers: [],
      sortType: `Popular`,
    });
  });

  it(`Reducer updates offers, cities & city by load offers`, () => {
    expect(offerData({
      offers: [],
    }, {
      type: ActionType.GET_OFFERS,
      offers,
    })).toEqual({
      offers,
      cities: [`Lafayette`],
      currentCity: `Lafayette`
    });
  });

  it(`Reducer updates city by change city`, () => {
    expect(offerData({
      currentCity: `Lafayette`,
    }, {
      type: ActionType.CITY_CHANGE,
      city: `Berlin`,
    })).toEqual({
      currentCity: `Berlin`
    });
  });

  it(`Reducer updates sort type by change sort type`, () => {
    expect(offerData({
      sortType: `Mock`,
    }, {
      type: ActionType.SET_SORT_TYPE,
      sortType: `Kcom`,
    })).toEqual({
      sortType: `Kcom`
    });
  });

  it(`Reducer updates sort type by reset sort type`, () => {
    expect(offerData({
      sortType: `Kcom`,
    }, {
      type: ActionType.RESET_SORT_TYPE,
      sortType: `Popular`,
    })).toEqual({
      sortType: `Popular`
    });
  });

  it(`Reducer updates favorites by load favorites`, () => {
    expect(offerData({
      favoriteOffers: [],
    }, {
      type: ActionType.GET_FAVORITES,
      data: offers,
    })).toEqual({
      favoriteOffers: offers
    });
  });

  it(`Reducer updates favorites by push favorite`, () => {
    expect(offerData({
      favoriteOffers: [],
    }, {
      type: ActionType.PUSH_FAVORITE,
      data: offers[0],
    })).toEqual({
      favoriteOffers: [offers[0]]
    });
  });

  it(`Reducer updates favorites by delete favorite`, () => {
    expect(offerData({
      favoriteOffers: [offers[0]],
    }, {
      type: ActionType.DELETE_FAVORITE,
      data: offers[0],
    })).toEqual({
      favoriteOffers: []
    });
  });

  it(`Reducer updates current offer by load offer`, () => {
    expect(offerData({
      currentOffer: null,
    }, {
      type: ActionType.GET_OFFER,
      data: offers[0],
    })).toEqual({
      currentOffer: offers[0]
    });
  });

  it(`Reducer updates nearby offers by load offers`, () => {
    expect(offerData({
      nearbyHotels: [],
    }, {
      type: ActionType.GET_NEARBY,
      data: offers,
    })).toEqual({
      nearbyHotels: offers
    });
  });
});

describe(`Testing related to offers async operations`, () => {

  it(`makes a correct API call for offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerLoader = ApiActionCreator.fetchOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, rawOffers);

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_OFFERS,
          offers,
        });
      });
  });

  it(`makes a correct API call for nearby offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const nearbyOfferLoader = ApiActionCreator.getNearbyHotels(`1`);

    apiMock
      .onGet(`/hotels/1/nearby`)
      .reply(200, rawOffers);

    return nearbyOfferLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_NEARBY,
          data: offers,
        });
      });
  });

  it(`makes a correct API call for favorite offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteOfferLoader = ApiActionCreator.fetchFavorites();

    apiMock
      .onGet(`/favorite`)
      .reply(200, rawOffers);

    return favoriteOfferLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_FAVORITES,
          data: offers,
        });
      });
  });

  it(`makes a correct API call for handling favorite offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteOfferHandler = ApiActionCreator.handleFavorites(`1`, 0);

    apiMock
      .onPost(`/favorite/1/0`)
      .reply(200, rawOffers[0]);

    return favoriteOfferHandler(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.DELETE_FAVORITE,
          data: offers[0],
        });
      });
  });

  it(`makes a correct API call for an offer`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerLoader = ApiActionCreator.getCurrentOffer(1);

    apiMock
      .onGet(`/hotels/1`)
      .reply(200, rawOffers[0]);

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_OFFER,
          data: offers[0],
        });
      });
  });

});

