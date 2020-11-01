import CityChange from '@components/city-change/city-change';
import {connect} from 'react-redux';

const mapStateToProps = ({OFFERS}) => ({
  currentCity: OFFERS.currentCity,
  cities: OFFERS.cities,
});

export default connect(mapStateToProps)(CityChange);
