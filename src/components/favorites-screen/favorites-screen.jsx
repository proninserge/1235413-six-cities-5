import Navigation from '@components/navigation/navigation.connect';
import OfferCard from '@components/offer-list/components/offer-card/offer-card';
import {getFavoritesForCity} from '@components/favorites-screen/selectors/get-favorites-for-city';
import {OFFERS_PROP_TYPE} from '@/props-definition';

const FavoritesScreen = (props) => {
  const {offers, cities, onNavigationClick, onOfferClick} = props;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="#">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>

            <Navigation onNavigationClick={onNavigationClick}/>

          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">

          {offers.length === 0
            ?
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
              </div>
            </section>
            :
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {cities.map((city, index) => (
                  getFavoritesForCity(offers, city).length > 0
                &&
                <li key={`${city}-${index}`} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">

                    {getFavoritesForCity(offers, city).map((offer) => (
                      <OfferCard key={offer.id} onOfferHover={()=>({})} onOfferClick={onOfferClick} offer={offer} className={`favorites`}/>
                    ))}

                  </div>
                </li>
                ))}
              </ul>
            </section>
          }

        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
};

FavoritesScreen.propTypes = {
  offers: OFFERS_PROP_TYPE,
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onNavigationClick: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func.isRequired,
};

export default FavoritesScreen;
