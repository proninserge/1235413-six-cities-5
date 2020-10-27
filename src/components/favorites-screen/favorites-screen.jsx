import OfferCard from '@components/offer-list/components/offer-card/offer-card';
import {getFavoritesForCity} from '@components/favorites-screen/selectors/get-favorites-for-city';
import {OFFERS_PROP_TYPE} from '@/props-definition';

const FavoritesScreen = (props) => {
  const {offers, cities} = props;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
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
                      <OfferCard key={offer.id} onOfferHover={()=>({})} onOfferClick={()=>({})} offer={offer} className={`favorites`}/>
                    ))}

                  </div>
                </li>
              ))}
            </ul>
          </section>
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
};

export default FavoritesScreen;
