import renderer from 'react-test-renderer';
import Navigation from './navigation';

const noop = () => {};

describe(`<Navigation /> render`, () => {

  it(`correctly renders Navigation if authorized`, () => {
    const tree = renderer
      .create(
          <Navigation
            email={`johndoe@yahoo.com`}
            isAuthorized={true}
            onNavigationClick={noop}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`correctly renders Navigation if not authorized`, () => {
    const tree = renderer
      .create(
          <Navigation
            email={`johndoe@yahoo.com`}
            isAuthorized={false}
            onNavigationClick={noop}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

