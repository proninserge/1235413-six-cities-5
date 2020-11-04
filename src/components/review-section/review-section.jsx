import ReviewList from '@components/review-list/review-list';
import NewReview from '@components/new-review/new-review';
import {REVIEWS_PROP_TYPE} from '@/props-definition';

const ReviewSection = (props) => {
  const {isAuthorized, id, reviews, pushReviewForHotel} = props;


  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

      <ReviewList reviews={reviews} />

      {isAuthorized && <NewReview id={id} pushReviewForHotel={pushReviewForHotel} />}

    </section>
  );
};

ReviewSection.propTypes = {
  id: PropTypes.string.isRequired,
  reviews: REVIEWS_PROP_TYPE,
  isAuthorized: PropTypes.bool.isRequired,
  pushReviewForHotel: PropTypes.func.isRequired,
};

export default ReviewSection;
