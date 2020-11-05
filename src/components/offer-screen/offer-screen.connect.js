import OfferScreen from '@components/offer-screen/offer-screen';
import {getAuthorizedStatus} from '@components/navigation/selectors/get-authorized-status';
import {connect} from 'react-redux';
import {ApiActionCreator} from '@store/api-action';


const mapStateToProps = ({OFFERS, REVIEWS, USER}) => ({
  reviews: REVIEWS.reviews,
  favoriteOffers: OFFERS.favoriteOffers,
  isAuthorized: getAuthorizedStatus(USER),
});

const mapDispatchToProps = (dispatch) => ({
  getNearbyHotels(id) {
    return Promise.resolve(dispatch(ApiActionCreator.getNearbyHotels(id)));
  },
  getCurrentOffer(id) {
    return Promise.resolve(dispatch(ApiActionCreator.getCurrentOffer(id)));
  },
  getReviewsForHotel(id) {
    dispatch(ApiActionCreator.getReviewsForHotel(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferScreen);
