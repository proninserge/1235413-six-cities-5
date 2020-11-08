const BookmarkButton = (props) => {
  const {onClick, className, isFavorite} = props;

  return (
    <button onClick={onClick}
      className={`${className}-button button ${isFavorite ? `${className}-button--active` : ``}`} type="button">
      <svg className={`${className}-icon`} width={className === `property__bookmark` ? `31` : `18`} height={className === `property__bookmark` ? `33` : `19`}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
    </button>
  );
};

BookmarkButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string.isRequired,
};

export default BookmarkButton;
