import {Switch, Route, BrowserRouter, Link} from 'react-router-dom';

import MainScreen from '@components/main-screen/main-screen.connect';
import FavoritesScreen from '@components/favorites-screen/favorites-screen.connect';
import OfferScreen from '@components/offer-screen/offer-screen.connect';
import SignInScreen from '@components/sign-in-screen/sign-in-screen';

const App = () => {
  const [activeOffer, setActiveOffer] = React.useState(null);

  const getActiveOffer = (offer) => {
    setActiveOffer(offer);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <MainScreen
              onOfferClick={(offer) => {
                getActiveOffer(offer);
                history.push(`/offer/${offer.id}`);
              }}
            />
          )}
        />
        <Route exact path="/favorites">
          <FavoritesScreen />
        </Route>
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/offer/:id">
          <OfferScreen offer={activeOffer}/>
        </Route>
        <Route
          render={() => (
            <>
              <h1 style={{textAlign: `center`}}>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link style={{display: `block`, color: `blue`, width: `100%`, textAlign: `center`}} to="/">Go to main</Link>
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
