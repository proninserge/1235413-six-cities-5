import OfferList from '@components/offer-list/offer-list';
import Map from '@components/map/map';
import Sort from '@components/sort/sort';
import CityChange from '@components/city-change/city-change';
import {OFFERS_PROP_TYPE} from '@constants';

import {connect} from 'react-redux';
import {ActionCreator} from '@store/action';

const MainScreen = (props) => {
  const {offers, city, onOfferClick, onCityChange, onSortTypeClick, onOfferHover} = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">

          <CityChange onCityChange={onCityChange} />

        </div>
        <div className="cities">
          {offers.length === 0
            ?
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in {city}</p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
            :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{`${offers.length} ${offers.length > 1 ? `places` : `place`}`} to stay in {city}</b>

                <Sort onSortTypeClick={onSortTypeClick}/>

                <OfferList onOfferClick={onOfferClick} onOfferHover={onOfferHover}/>

              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={offers} />
                </section>
              </div>
            </div>
          }

        </div>
      </main>
    </div>
  );
};

MainScreen.propTypes = {
  offers: OFFERS_PROP_TYPE,
  city: PropTypes.string.isRequired,
  onOfferClick: PropTypes.func.isRequired,
  onCityChange: PropTypes.func.isRequired,
  onSortTypeClick: PropTypes.func.isRequired,
  onOfferHover: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.currentCity,
  offers: state.offersForCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(city) {
    dispatch(ActionCreator.resetSortType());
    dispatch(ActionCreator.resetHoveredOffer());
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.resetSortedOffers());
    dispatch(ActionCreator.getOffers());
  },
  onOfferHover(offer) {
    dispatch(ActionCreator.getHoveredOffer(offer));
  },
  onSortTypeClick(sort) {
    dispatch(ActionCreator.resetHoveredOffer());
    dispatch(ActionCreator.sortOffers(sort));
  },
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
