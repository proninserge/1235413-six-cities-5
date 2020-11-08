import CityChange from './city-change';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
const noop = () => {};

const mock = [`Mock`, `Kcom`];

describe(`<CityChange /> e2e testing`, () => {
  it(`Click on City tab calls callback`, () => {
    const onCityChange = jest.fn();
    const wrapper = mount(<CityChange
      currentCity={`Mock`}
      cities={mock}
      onCityChange={onCityChange}
      resetHoveredOffer={noop}
    />);

    const container = wrapper.find(`.tabs__item:not(.tabs__item--active)`);

    container.simulate(`click`);
    expect(onCityChange).toHaveBeenCalledWith(mock[1]);
    expect(onCityChange).toHaveBeenCalledTimes(1);
  });

});
