import SignInScreen from './sign-in-screen';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from '@store/reducers/root-reducer';
import {Router} from 'react-router-dom';
import browserHistory from '@/browser-history';

const noop = () => {};
configure({adapter: new Adapter()});
const store = createStore(reducer);

describe(`<SignInScreen /> e2e testing`, () => {

  it(`Submitting form with all relevant data calls callback`, () => {
    const onSubmit = jest.fn();
    const wrapper = mount(
        <Provider store={store}>
          <Router history={browserHistory}>
            <SignInScreen
              isAuthorized={false}
              city={`Lafayette`}
              onSubmit={onSubmit}
              onNavigationClick={noop}
            />
          </Router>
        </Provider>);


    wrapper.find(`input[type="email"]`).instance().value = `me@you.he`;
    wrapper.find(`input[type="password"]`).instance().value = `123`;

    const container = wrapper.find(`form`);

    container.simulate(`submit`, {preventDefault: () => {}});
    expect(onSubmit).toHaveBeenCalledWith({
      email: `me@you.he`,
      password: `123`,
    });
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it(`Submitting form with no data does not call callback`, () => {
    const onSubmit = jest.fn();
    const wrapper = mount(
        <Provider store={store}>
          <Router history={browserHistory}>
            <SignInScreen
              isAuthorized={false}
              city={`Lafayette`}
              onSubmit={onSubmit}
              onNavigationClick={noop}
            />
          </Router>
        </Provider>);


    wrapper.find(`input[type="email"]`).instance().value = ``;
    wrapper.find(`input[type="password"]`).instance().value = ``;

    const container = wrapper.find(`form`);

    container.simulate(`submit`, {preventDefault: () => {}});
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });

  it(`Submitting form with no pass does not call callback`, () => {
    const onSubmit = jest.fn();
    const wrapper = mount(
        <Provider store={store}>
          <Router history={browserHistory}>
            <SignInScreen
              isAuthorized={false}
              city={`Lafayette`}
              onSubmit={onSubmit}
              onNavigationClick={noop}
            />
          </Router>
        </Provider>);


    wrapper.find(`input[type="email"]`).instance().value = `me@you.he`;
    wrapper.find(`input[type="password"]`).instance().value = ``;

    const container = wrapper.find(`form`);

    container.simulate(`submit`, {preventDefault: () => {}});
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });

  it(`Submitting form with no email does not call callback`, () => {
    const onSubmit = jest.fn();
    const wrapper = mount(
        <Provider store={store}>
          <Router history={browserHistory}>
            <SignInScreen
              isAuthorized={false}
              city={`Lafayette`}
              onSubmit={onSubmit}
              onNavigationClick={noop}
            />
          </Router>
        </Provider>);


    wrapper.find(`input[type="email"]`).instance().value = ``;
    wrapper.find(`input[type="password"]`).instance().value = `qwerty`;

    const container = wrapper.find(`form`);

    container.simulate(`submit`, {preventDefault: () => {}});
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });

  it(`Submitting form with irrelevant email does not call callback`, () => {
    const onSubmit = jest.fn();
    const wrapper = mount(
        <Provider store={store}>
          <Router history={browserHistory}>
            <SignInScreen
              isAuthorized={false}
              city={`Lafayette`}
              onSubmit={onSubmit}
              onNavigationClick={noop}
            />
          </Router>
        </Provider>);

    wrapper.find(`input[type="email"]`).instance().value = `meyou`;
    wrapper.find(`input[type="password"]`).instance().value = `123`;

    const container = wrapper.find(`form`);

    container.simulate(`submit`, {preventDefault: () => {}});
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });

});

