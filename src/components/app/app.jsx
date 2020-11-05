import {Switch, Route, Router as BrowserRouter, Link} from 'react-router-dom';

import Preloader from '@components/preloader/preloader';
import MainScreen from '@components/main-screen/main-screen.connect';
import FavoritesScreen from '@components/favorites-screen/favorites-screen.connect';
import OfferScreen from '@components/offer-screen/offer-screen.connect';
import SignInScreen from '@components/sign-in-screen/sign-in-screen.connect';
import PrivateRoute from '@components/private-route/private-route.connect';
import {handleNavigationClick} from '@/utils';

import browserHistory from '@/browser-history';

const App = (props) => {
  const {makeInitialLoad} = props;

  const [dataLoaded, setDataStatus] = React.useState(false);

  React.useEffect(() => {
    makeInitialLoad().then(() => {
      setDataStatus(true);
    });
  }, []);

  if (!dataLoaded) {
    return (
      <Preloader />
    );
  }
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>

        <Route exact
          path="/"
          render={({history}) => (
            <MainScreen
              onOfferClick={(offer) => {
                history.push(`/offer/${offer.id}`);
              }}
              onNavigationClick={(authorizationStatus) => {
                handleNavigationClick(history, authorizationStatus);
              }}
            />
          )}
        />

        <PrivateRoute exact
          path={`/favorites`}
          render={({history}) => {
            return (
              <FavoritesScreen
                onOfferClick={(offer) => {
                  history.push(`/offer/${offer.id}`);
                }}
                onNavigationClick={() => ({})} />
            );
          }}
        />

        <Route exact
          path="/login"
          render={() => (
            <SignInScreen onNavigationClick={() => ({})} />
          )}
        />

        <Route exact
          path="/offer/:id"
          render={({history}) => (
            <OfferScreen
              onOfferClick={(offer) => {
                history.push(`/offer/${offer.id}`);
              }}
              onNavigationClick={(authorizationStatus) => {
                handleNavigationClick(history, authorizationStatus);
              }}/>
          )}
        />

        <Route exact
          path="/error"
          render={() => (
            <>
              <h1 style={{textAlign: `center`}}>
                4- or 5- something. Whatever.
                <br />
                <small>Something wrong has happened. Hold on, we are fixing the issue. Please, refresh the page a bit later.</small>
              </h1>
            </>
          )}
        />

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

App.propTypes = {
  makeInitialLoad: PropTypes.func.isRequired,
};

export default App;
