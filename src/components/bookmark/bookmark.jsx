const Bookmark = (props) => {
  const {isFavorite, className} = props;

  return (
    <button className={`${className}-button button ${isFavorite && `${className}-button--active`}`} type="button">
      <svg className={`${className}-icon`} width={className === `property__bookmark` ? `31` : `18`} height={className === `property__bookmark` ? `33` : `19`}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
    </button>
  );
};


Bookmark.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

export default Bookmark;
