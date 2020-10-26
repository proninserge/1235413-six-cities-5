import OfferScreen from '@components/offer-screen/offer-screen';
import {getOffersForCity} from '@components/main-screen/selectors/get-offers-for-city';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  offers: getOffersForCity(state),
  reviews: state.reviews,
});

export default connect(mapStateToProps)(OfferScreen);
