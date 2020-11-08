import NewReview from './new-review';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});


describe(`<NewReview /> e2e testing`, () => {

  it(`Submitting form with all relevant data calls callback`, () => {
    const pushReviewForHotel = jest.fn().mockImplementation(() => Promise.resolve());
    const wrapper = mount(
        <NewReview
          id={`1`}
          pushReviewForHotel={pushReviewForHotel}
        />);

    const container = wrapper.find(`form`);
    container.simulate(`submit`, {preventDefault: () => {}});
    expect(pushReviewForHotel).toHaveBeenCalledTimes(1);
  });

});
