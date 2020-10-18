import ReviewItem from './components/review-item/review-item';
import {REVIEWS_PROP_TYPE} from '@constants';

const ReviewList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review, index) => (
        <ReviewItem
          key={`${review.id}-${index}`}
          review={review}
        />
      ))}
    </ul>
  );

};

ReviewList.propTypes = {
  reviews: REVIEWS_PROP_TYPE,
};

export default ReviewList;
