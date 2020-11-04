import {CommentSymbolCount} from '@constants';

const NewReview = (props) => {
  const {id, pushReviewForHotel} = props;

  const [isSubmitting, setSubmissionState] = React.useState(false);
  const [rating, setRating] = React.useState(null);
  const [comment, setComment] = React.useState(``);
  const [isError, setError] = React.useState(false);

  React.useEffect(() => {
    setError(false);
    setActiveButton();
  }, [rating, comment]);

  const setReviewToDefault = () => {
    setRating(null);
    setComment(``);
    setSubmissionState(false);
  };

  const setActiveButton = () => {
    setSubmissionState(false);
    if (rating && (comment.length >= CommentSymbolCount.MIN && comment.length <= CommentSymbolCount.MAX)) {
      setSubmissionState(true);
    }
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
        const form = evt.target;
        setSubmissionState(false);
        pushReviewForHotel(id, {rating, comment})
          .then(()=> {
            setReviewToDefault();
            form.reset();
          })
          .catch(()=>{
            setActiveButton();
            setError(true);
          });
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div onChange={(evt)=>{
        setRating(evt.target.value);
      }} className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(evt)=>{
          setComment(evt.target.value);
        }}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitting ? false : true}>{isError ? `Error sending` : `Submit`}</button>
      </div>
    </form>
  );
};

NewReview.propTypes = {
  id: PropTypes.string.isRequired,
  pushReviewForHotel: PropTypes.func.isRequired,
};

export default NewReview;
