import ReviewSection from '@components/review-section/review-section';
import {connect} from 'react-redux';
import {ApiActionCreator} from '@store/api-action';

const mapDispatchToProps = (dispatch) => ({
  pushReviewForHotel(id, data) {
    return Promise.resolve(dispatch(ApiActionCreator.pushReviewForHotel(id, data)));
  }
});

export default connect(null, mapDispatchToProps)(ReviewSection);
