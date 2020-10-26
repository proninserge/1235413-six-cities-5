import OfferList from '@components/offer-list/offer-list';
import {getSortedOffers} from '@components/offer-list/selectors/get-sorted-offers';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  offers: getSortedOffers(state),
});

export default connect(mapStateToProps)(OfferList);
