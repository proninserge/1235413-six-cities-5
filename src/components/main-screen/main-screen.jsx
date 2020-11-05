import OfferList from '@components/offer-list/offer-list.connect';
import Navigation from '@components/navigation/navigation.connect';
import EmptyMainScreen from '@components/main-screen/components/empty-main-screen/empty-main-screen';
import Map from '@components/map/map';
import Sort from '@components/sort/sort.connect';
import CityChange from '@components/city-change/city-change.connect';
import {OFFERS_PROP_TYPE} from '@/props-definition';

const MainScreen = (props) => {
  const {offers, city, onOfferClick, onCityChange, onSortTypeClick, onNavigationClick} = props;
  const [hoveredOffer, setHoveredOffer] = React.useState(null);

  const getHoveredOffer = (offer) => {
    setHoveredOffer(offer);
  };

  const resetHoveredOffer = () => {
    setHoveredOffer(null);
  };

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

            <Navigation onNavigationClick={onNavigationClick} />

          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">

          <CityChange onCityChange={onCityChange} resetHoveredOffer={resetHoveredOffer}/>

        </div>
        <div className="cities">
          {offers.length === 0
            ?
            <EmptyMainScreen city={city}/>
            :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{`${offers.length} ${offers.length > 1 ? `places` : `place`}`} to stay in {city}</b>

                <Sort onSortTypeClick={onSortTypeClick} resetHoveredOffer={resetHoveredOffer}/>

                <OfferList onOfferClick={onOfferClick} onOfferHover={getHoveredOffer}/>

              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={offers} offer={hoveredOffer}/>
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
  onNavigationClick: PropTypes.func.isRequired,
};

export default MainScreen;
