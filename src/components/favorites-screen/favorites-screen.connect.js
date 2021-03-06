import FavoritesScreen from '@components/favorites-screen/favorites-screen';

import {connect} from 'react-redux';

const mapStateToProps = ({OFFERS}) => ({
  offers: OFFERS.favoriteOffers,
  cities: OFFERS.cities,
});

export default connect(mapStateToProps)(FavoritesScreen);
