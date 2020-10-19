import OfferCard from './components/offer-card/offer-card';
import {OFFERS_PROP_TYPE} from '@constants';

class OfferList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offerActive: null,
    };
  }

  render() {
    const {offers, onOfferClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            onOfferHover={() => {
              this.setState(() => ({
                offerActive: offer,
              }));
            }}
            onOfferClick={onOfferClick}
            className={`cities`}
          />
        ))}
      </div>
    );
  }
}

OfferList.propTypes = {
  offers: OFFERS_PROP_TYPE,
  onOfferClick: PropTypes.func.isRequired,
};

export default OfferList;
