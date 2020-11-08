import renderer from 'react-test-renderer';
import Preloader from './preloader';

describe(`<Preloader /> render`, () => {

  it(`correctly renders Offer List`, () => {
    const tree = renderer
      .create(<Preloader />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

