import OfferCard from './components/offer-card/offer-card';
import {OFFERS_PROP_TYPE} from '@/props-definition';

const OfferList = (props) => {
  const {offers, onOfferClick, onOfferHover} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onOfferHover={onOfferHover}
          onOfferClick={onOfferClick}
          className={`cities`}
        />
      ))}
    </div>
  );
};

OfferList.propTypes = {
  offers: OFFERS_PROP_TYPE,
  onOfferClick: PropTypes.func.isRequired,
  onOfferHover: PropTypes.func.isRequired,
};

export default OfferList;
