import Bookmark from '@components/bookmark/bookmark';
import {OFFER_PROP_SHAPE} from '@/props-definition';

const OfferCard = (props) => {
  const {onOfferClick, onOfferHover, offer, className} = props;

  return (
    <article
      className={`place-card ${className === `cities` ? `${className}__place-card` : `${className}__card`}`}
      onMouseOver={(evt) => {
        evt.preventDefault();
        onOfferHover(offer);
      }}>
      {offer.isPremium
        &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`place-card__image-wrapper ${className}__image-wrapper`}>
        <a
          href="#"
          onClick={(evt) => {
            evt.preventDefault();
            onOfferClick(offer);
          }}>
          <img className="place-card__image" src={offer.previewImage} width={className === `favorites` ? `150` : `260`} height={className === `favorites` ? `110` : `200`} alt="Place image"/>
        </a>
      </div>
      <div className={`place-card__info ${className === `favorites` ? `${className}__card-info` : ``}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <Bookmark className={`place-card__bookmark`} isFavorite={offer.isFavorite} />

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a
            href="#"
            onClick={(evt) => {
              evt.preventDefault();
              onOfferClick();
            }}>
            {offer.title}
          </a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};


OfferCard.propTypes = {
  onOfferClick: PropTypes.func.isRequired,
  onOfferHover: PropTypes.func.isRequired,
  offer: OFFER_PROP_SHAPE,
  className: PropTypes.string.isRequired,
};

export default OfferCard;
