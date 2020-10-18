import {OFFERS_PROP_TYPE} from '@constants';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this._mapContainer = React.createRef();
    this._map = null;
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

  _renderMap() {
    const {offers} = this.props;
    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
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
      leaflet
        .marker(offer.coordinates, {icon})
        .addTo(this._map);
    });
  }

  componentDidMount() {
    this._renderMap();
  }

  componentDidUpdate() {
    this._map.remove();
    this._renderMap();
  }
}

Map.propTypes = {
  offers: OFFERS_PROP_TYPE,
};

export default Map;
