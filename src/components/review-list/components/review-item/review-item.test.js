import renderer from 'react-test-renderer';
import ReviewItem from './review-item';

const review = {
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
};

describe(`<ReviewItem /> render`, () => {

  it(`correctly renders Review Item`, () => {
    const tree = renderer
      .create(
          <ReviewItem
            review={review}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

