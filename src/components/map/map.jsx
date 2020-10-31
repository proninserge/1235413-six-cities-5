import {OFFERS_PROP_TYPE, OFFER_PROP_SHAPE} from '@/props-definition';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';

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
    const {offers, offer} = this.props;
    const city = [offers[0].hotelCity.location.lat, offers[0].hotelCity.location.lng];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const hoveredIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [27, 39]
    });

    const zoom = offers[0].hotelCity.location.zoom;
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

    offers.forEach((propertyOffer) => {
      if (propertyOffer === offer) {
        leaflet
          .marker(offer.hotelLocation, {icon: hoveredIcon})
          .addTo(this._map);

        return;
      }
      leaflet
        .marker(propertyOffer.hotelLocation, {icon})
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
  offer: OFFER_PROP_SHAPE,
  offers: OFFERS_PROP_TYPE,
};

export default Map;
