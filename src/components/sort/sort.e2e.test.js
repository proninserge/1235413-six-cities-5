import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sort from './sort';

configure({adapter: new Adapter()});

const noop = () => {};

describe(`<Sort /> e2e testing`, () => {

  it(`Click on sort type data calls callback`, () => {
    const onSortTypeClick = jest.fn();
    const wrapper = mount(
        <Sort
          sortType={`Popular`}
          onSortTypeClick={onSortTypeClick}
          resetHoveredOffer={noop}
        />);

    wrapper.find(`.places__sorting-type`).simulate(`click`);
    const container = wrapper.find(`.places__option--active`);

    container.simulate(`click`);
    expect(onSortTypeClick).toHaveBeenCalledTimes(1);
  });


});

