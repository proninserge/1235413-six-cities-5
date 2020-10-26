import FavoritesScreen from '@components/favorites-screen/favorites-screen';

import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  offers: state.offers,
  cities: state.cities,
});

export default connect(mapStateToProps)(FavoritesScreen);
