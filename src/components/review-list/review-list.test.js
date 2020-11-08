import renderer from 'react-test-renderer';
import ReviewList from './review-list';

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

describe(`<ReviewList /> render`, () => {

  it(`correctly renders Review List w/ reviews`, () => {
    const tree = renderer
      .create(
          <ReviewList
            reviews={reviews}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`correctly renders Review List w/o reviews`, () => {
    const tree = renderer
      .create(
          <ReviewList
            reviews={[]}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

