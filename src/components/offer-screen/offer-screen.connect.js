import OfferScreen from '@components/offer-screen/offer-screen';
import {getOffersForCity} from '@components/main-screen/selectors/get-offers-for-city';
import {connect} from 'react-redux';

const mapStateToProps = ({OFFERS, REVIEWS}) => ({
  offers: getOffersForCity(OFFERS),
  reviews: REVIEWS.reviews,
});

export default connect(mapStateToProps)(OfferScreen);
