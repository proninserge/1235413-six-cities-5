import {REVIEW_PROP_SHAPE} from '@/props-definition';
import {getStars} from '@/utils';
import moment from 'moment';

const getReadableDate = (date) => moment(date, `YYYY/MM/DD H:mm Z`).format(`MMMM YYYY`);

const ReviewItem = (props) => {
  const {review} = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.localUser.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {review.localUser.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getStars(review.rating)}`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{getReadableDate(review.date)}</time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  review: REVIEW_PROP_SHAPE,
};

export default ReviewItem;
