import ReviewSection from '@components/review-section/review-section';
import Bookmark from '@components/bookmark/bookmark';
import OfferCard from '@components/offer-list/components/offer-card/offer-card';
import Map from '@components/map/map';
import {OFFERS_PROP_TYPE, REVIEWS_PROP_TYPE, PROPERTY_AROUND_NUMBER} from '@constants';

import {connect} from 'react-redux';

const OfferScreen = (props) => {
  const {offers, reviews} = props;
  const offer = offers[offers.length - 1];
  const propertyReviews = reviews.filter((review) => review.id === offer.id);

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

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <div className="property__image-wrapper">
                <img className="property__image" src="img/room.jpg" alt="Photo studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-02.jpg" alt="Photo studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-03.jpg" alt="Photo studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/studio-01.jpg" alt="Photo studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio"/>
              </div>
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">

              {offer.isPremium
                &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>

                <Bookmark className={`property__bookmark`} isBookmarked={offer.isBookmarked} />

              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `80%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rate}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>

              {offer.facilities.length !== 0
                &&
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {offer.facilities.map((facility, index) =>(
                      <li key={`${facility}-${index}`} className="property__inside-item">
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>
              }

              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  {offer.isProUser
                    ?
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={offer.avatar} width="74" height="74" alt="Host avatar"/>
                    </div>
                    :
                    <div className="property__avatar-wrapper user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={offer.avatar} width="74" height="74" alt="Host avatar"/>
                    </div>}

                  <span className="property__user-name">
                    {offer.host}
                  </span>
                </div>

                {offer.description.length !== 0
                  &&
                  <div className="property__description">
                    {offer.description.map((text, index) => (
                      <p key={`0-${index}`} className="property__text">
                        {text}
                      </p>
                    ))}
                  </div>
                }

              </div>

              <ReviewSection reviews={propertyReviews} offer={offer} />

            </div>
          </div>
          <section className="property__map map">
            <Map offers={offers.slice(0, PROPERTY_AROUND_NUMBER)} />
          </section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">

              {offers.slice(0, PROPERTY_AROUND_NUMBER).map((otherOffer) => (
                <OfferCard key={otherOffer.id} onOfferHover={()=>({})} onOfferClick={()=>({})} offer={otherOffer} className={`near-places`}/>
              ))}

            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

OfferScreen.propTypes = {
  offers: OFFERS_PROP_TYPE,
  reviews: REVIEWS_PROP_TYPE,
};

const mapStateToProps = (state) => ({
  offers: state.offersForCity,
  reviews: state.reviews,
});

export {OfferScreen};
export default connect(mapStateToProps)(OfferScreen);
