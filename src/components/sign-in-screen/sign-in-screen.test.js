import renderer from 'react-test-renderer';
import SignInScreen from './sign-in-screen';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from '@store/reducers/root-reducer';
import {Router} from 'react-router-dom';
import browserHistory from '@/browser-history';

const noop = () => {};
const store = createStore(reducer);

describe(`<SignInScreen /> render`, () => {

  it(`correctly renders SignInScreen if not authorized`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={browserHistory}>
              <SignInScreen
                isAuthorized={false}
                city={`Lafayette`}
                onSubmit={noop}
                onNavigationClick={noop}
              />
            </Router>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });


});

