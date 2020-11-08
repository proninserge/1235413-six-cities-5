import renderer from 'react-test-renderer';
import BookmarkButton from './bookmark-button';

const noop = () => {};

describe(`<BookmarkButton /> render`, () => {

  it(`correctly renders Bookmark button if favorite`, () => {
    const tree = renderer
      .create(
          <BookmarkButton
            className={`main`}
            onClick={noop}
            isFavorite={true}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`correctly renders Bookmark button if not favorite`, () => {
    const tree = renderer
      .create(
          <BookmarkButton
            className={`main`}
            onClick={noop}
            isFavorite={false}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

