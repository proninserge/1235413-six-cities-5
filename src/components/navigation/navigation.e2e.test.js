import Navigation from './navigation';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe(`<Navigation /> e2e testing`, () => {
  it(`Click on Navigation link calls callback`, () => {
    const onNavigationClick = jest.fn();
    const wrapper = mount(<Navigation
      email={`me@you.he`}
      isAuthorized={false}
      onNavigationClick={onNavigationClick}
    />);

    const container = wrapper.find(`.header__nav-link`);

    container.simulate(`click`);
    expect(onNavigationClick).toHaveBeenCalledWith(false);
    expect(onNavigationClick).toHaveBeenCalledTimes(1);
  });

});
