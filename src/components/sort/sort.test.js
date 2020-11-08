import renderer from 'react-test-renderer';
import Sort from './sort';

const noop = () => {};

describe(`<Sort /> render`, () => {

  it(`correctly renders Sort`, () => {
    const tree = renderer
      .create(
          <Sort
            sortType={`Popular`}
            onSortTypeClick={noop}
            resetHoveredOffer={noop}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

