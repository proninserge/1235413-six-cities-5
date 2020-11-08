import renderer from 'react-test-renderer';
import ReviewSection from './review-section';

const reviews = [{
  id: 1,
  rating: 1,
  comment: `qwerty`,
  date: `October 2077`,
  localUser: {
    id: 1,
    name: `Mark Goldberg`,
    isPro: true,
    avatarUrl: `url`,
  }
}];

const noop = () => {};

describe(`<ReviewSection /> render`, () => {

  it(`correctly renders Review Section w/o reviews if authorized`, () => {
    const tree = renderer
      .create(
          <ReviewSection
            reviews={[]}
            isAuthorized={true}
            id={`1`}
            pushReviewForHotel={noop}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`correctly renders Review Section w/o reviews if not authorized`, () => {
    const tree = renderer
      .create(
          <ReviewSection
            reviews={[]}
            isAuthorized={false}
            id={`1`}
            pushReviewForHotel={noop}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`correctly renders Review Section w/ reviews if authorized`, () => {
    const tree = renderer
      .create(
          <ReviewSection
            reviews={reviews}
            isAuthorized={true}
            id={`1`}
            pushReviewForHotel={noop}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`correctly renders Review Section w/ reviews if not authorized`, () => {
    const tree = renderer
      .create(
          <ReviewSection
            reviews={reviews}
            isAuthorized={false}
            id={`1`}
            pushReviewForHotel={noop}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

