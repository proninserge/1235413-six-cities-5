import {OFFERS_PROP_TYPE} from '@constants';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();
    this.map = null;
  }

  render() {
    return (
      <div
        style={{height: `100%`}}
        ref={this.mapContainer}
        id="map">
      </div>
    );
  }

  componentDidMount() {
    const {offers} = this.props;
    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    this.map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    offers.forEach((offer) => {
      leaflet
        .marker(offer.coordinates, {icon})
        .addTo(this.map);
    });
  }
}

Map.propTypes = {
  offers: OFFERS_PROP_TYPE,
};

export default Map;
