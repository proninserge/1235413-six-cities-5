const Bookmark = (props) => {
  const {isBookmarked, className} = props;

  return (
    <button className={`${className}-button button ${isBookmarked && `${className}-button--active`}`} type="button">
      <svg className={`${className}-icon`} width={className === `property__bookmark` ? `31` : `18`} height={className === `property__bookmark` ? `33` : `19`}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isBookmarked ? `In bookmarks` : `To bookmarks`}</span>
    </button>
  );
};


Bookmark.propTypes = {
  isBookmarked: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

export default Bookmark;
