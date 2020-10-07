import ReviewList from 'reviewList';
import NewReview from 'newReview';

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
  reviews: PropTypes.array.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReviewSection;
