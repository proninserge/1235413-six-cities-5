import ReviewSection from '@components/review-section/review-section';
import {connect} from 'react-redux';
import {handleNewReviewForHotel} from '@store/service-actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  pushReviewForHotel: (id, data) => handleNewReviewForHotel(id, data, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewSection);
