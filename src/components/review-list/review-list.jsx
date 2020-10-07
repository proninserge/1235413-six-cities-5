import ReviewItem from 'reviewItem';

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
  reviews: PropTypes.array.isRequired,
};

export default ReviewList;
