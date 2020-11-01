import OfferList from '@components/offer-list/offer-list';
import {getSortedOffers} from '@components/offer-list/selectors/get-sorted-offers';
import {connect} from 'react-redux';

const mapStateToProps = ({OFFERS}) => ({
  offers: getSortedOffers(OFFERS),
});

export default connect(mapStateToProps)(OfferList);
