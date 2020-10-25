import {OFFERS_PROP_TYPE, OFFER_PROP_SHAPE} from '@constants';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';

import {connect} from 'react-redux';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this._mapContainer = React.createRef();
    this._map = null;
  }

  componentDidMount() {
    this._renderMap();
  }

  componentDidUpdate() {
    this._map.remove();
    this._renderMap();
  }

  _renderMap() {
    const {offers, hoveredOffer} = this.props;
    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const hoveredIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [27, 39]
    });

    const zoom = 12;
    this._map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    this._map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    offers.forEach((offer) => {
      if (offer === hoveredOffer) {
        leaflet
          .marker(offer.coordinates, {icon: hoveredIcon})
          .addTo(this._map);

        return;
      }
      leaflet
        .marker(offer.coordinates, {icon})
        .addTo(this._map);
    });
  }

  render() {
    return (
      <div
        style={{height: `100%`}}
        ref={this._mapContainer}
        id="map">
      </div>
    );
  }
}

Map.propTypes = {
  hoveredOffer: OFFER_PROP_SHAPE,
  offers: OFFERS_PROP_TYPE,
};

const mapStateToProps = (state) => ({
  hoveredOffer: state.hoveredOffer,
});

export {Map};
export default connect(mapStateToProps)(Map);
