import CityChange from '@components/city-change/city-change';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  cities: state.cities,
});

export default connect(mapStateToProps)(CityChange);
