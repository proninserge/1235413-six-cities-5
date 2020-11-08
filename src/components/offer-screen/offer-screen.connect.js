import OfferScreen from '@components/offer-screen/offer-screen';
import {getAuthorizedStatus} from '@components/navigation/selectors/get-authorized-status';
import {connect} from 'react-redux';
import {ApiActionCreator} from '@store/api-action';
import {ActionCreator} from '@store/action';

const mapStateToProps = ({OFFERS, REVIEWS, USER}) => ({
  offer: OFFERS.currentOffer,
  nearbyHotels: OFFERS.nearbyHotels,
  reviews: REVIEWS.reviews,
  isAuthorized: getAuthorizedStatus(USER),
});

const mapDispatchToProps = (dispatch) => ({
  resetActiveOffer: () => dispatch(ActionCreator.getOffer(null)),
  getNearbyHotels: (id) => dispatch(ApiActionCreator.getNearbyHotels(id)),
  getCurrentOffer: (id) => dispatch(ApiActionCreator.getCurrentOffer(id)),
  getReviewsForHotel: (id) => dispatch(ApiActionCreator.getReviewsForHotel(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferScreen);
