import MainScreen from '@components/main-screen/main-screen';
import {getOffersForCity} from '@components/main-screen/selectors/get-offers-for-city';
import {connect} from 'react-redux';
import {ActionCreator} from '@store/action';

const mapStateToProps = ({OFFERS}) => ({
  city: OFFERS.currentCity,
  offers: getOffersForCity(OFFERS),
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange: (city) => {
    dispatch(ActionCreator.resetSortType());
    dispatch(ActionCreator.changeCity(city));
  },
  onSortTypeClick: (sortType) => dispatch(ActionCreator.setSortType(sortType)),
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
