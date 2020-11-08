import {ApiActionCreator} from '@store/api-action';

const handleInitialLoad = (dispatch) => {
  return Promise.resolve(
      Promise.all([
        dispatch(ApiActionCreator.fetchOffers()),
        dispatch(ApiActionCreator.checkAuth()),
      ])
      .then(() => {
        dispatch(ApiActionCreator.fetchFavorites());
      })
  );
};

const handleCredentialsSubmit = (authData, dispatch) => {
  Promise.resolve(dispatch(ApiActionCreator.login(authData)))
      .then(() => dispatch(ApiActionCreator.fetchFavorites()));
};

const handleNewReviewForHotel = (id, data, dispatch) => Promise.resolve(dispatch(ApiActionCreator.pushReviewForHotel(id, data)));

export {handleInitialLoad, handleCredentialsSubmit, handleNewReviewForHotel};
