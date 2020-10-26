import ReviewList from '@components/review-list/review-list';
import NewReview from '@components/new-review/new-review';
import {REVIEWS_PROP_TYPE, OFFER_PROP_SHAPE} from '@/props-definition';

const ReviewSection = (props) => {
  const {reviews, offer} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

      <ReviewList reviews={reviews} />

      <NewReview offer={offer} />

    </section>
  );
};

ReviewSection.propTypes = {
  reviews: REVIEWS_PROP_TYPE,
  offer: OFFER_PROP_SHAPE,
};

export default ReviewSection;
