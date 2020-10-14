import {Fragment} from 'react';
import {Switch, Route, BrowserRouter, Link} from 'react-router-dom';

import MainScreen from '@mainScreen';
import FavoritesScreen from '@favoritesScreen';
import OfferScreen from '@offerScreen';
import SignInScreen from '@signInScreen';

import {OFFERS_PROP_TYPE, REVIEWS_PROP_TYPE} from '@constants';


const App = (props) => {
  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <MainScreen
              offers={offers}
              onOfferClick={() => history.push(`/offer/666`)}
            />
          )}
        />
        <Route exact path="/favorites">
          <FavoritesScreen offers={offers} />
        </Route>
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/offer/:id">
          <OfferScreen
            offers={offers}
            reviews={reviews}
          />
        </Route>
        <Route
          render={() => (
            <Fragment>
              <h1 style={{textAlign: `center`}}>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link style={{display: `block`, color: `blue`, width: `100%`, textAlign: `center`}} to="/">Go to main</Link>
            </Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: OFFERS_PROP_TYPE,
  reviews: REVIEWS_PROP_TYPE,
};

export default App;
