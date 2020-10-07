import {PureComponent} from 'react';
import OfferCard from 'offerCard';

class OfferList extends PureComponent {
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
            onHover={() => {
              this.setState(() => ({
                offerActive: offer,
              }));
            }}
            onOfferClick={onOfferClick}
          />
        ))}
      </div>
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
  onOfferClick: PropTypes.func.isRequired,
};

export default OfferList;
