import renderer from 'react-test-renderer';
import CityChange from './city-change';

const noop = () => {};

describe(`<CityChange /> render`, () => {

  it(`correctly renders City Change component`, () => {
    const tree = renderer
      .create(
          <CityChange
            currentCity={`Lafayette`}
            cities={[`Lafayette`, `Berlin`]}
            onCityChange={noop}
            resetHoveredOffer={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

