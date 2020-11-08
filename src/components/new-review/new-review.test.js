import renderer from 'react-test-renderer';
import NewReview from './new-review';

const noop = () => {};

describe(`<NewReview /> render`, () => {

  it(`correctly renders NewReview`, () => {
    const tree = renderer
      .create(
          <NewReview
            id={`1`}
            pushReviewForHotel={noop}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

