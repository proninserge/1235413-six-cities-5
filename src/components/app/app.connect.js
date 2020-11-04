import App from '@components/app/app';
import {connect} from 'react-redux';
import {ApiActionCreator} from '@store/api-action';

const mapDispatchToProps = (dispatch) => ({
  makeInitialLoad() {
    return Promise.resolve(
        Promise.all([
          dispatch(ApiActionCreator.fetchOffers()),
          dispatch(ApiActionCreator.checkAuth()),
        ])
        .then(() => {
          dispatch(ApiActionCreator.fetchFavorites());
        })
    );
  },
});

export default connect(null, mapDispatchToProps)(App);
