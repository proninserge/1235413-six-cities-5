import BookmarkButton from '@components/bookmark/components/bookmark-button/bookmark-button';
import {Link} from 'react-router-dom';
import {checkFavorite} from '@components/bookmark/selectors/check-favorite';
import {OFFERS_PROP_TYPE, OFFER_PROP_SHAPE} from '@/props-definition';

const Bookmark = (props) => {
  const {offer, favoriteOffers, isAuthorized, className, onBookmarkClick} = props;

  const isFavorite = checkFavorite(offer, favoriteOffers);

  if (!isAuthorized) {
    return (
      <Link to={`/login`}>
        <BookmarkButton onClick={()=>({})} isFavorite={isFavorite} className={className}/>
      </Link>
    );
  }

  return (
    <BookmarkButton isFavorite={isFavorite} className={className} onClick={(evt) => {
      evt.preventDefault();
      const mark = isFavorite ? 0 : 1;
      onBookmarkClick(offer.id, mark);
    }}/>
  );
};

Bookmark.propTypes = {
  offer: OFFER_PROP_SHAPE,
  favoriteOffers: OFFERS_PROP_TYPE,
  isAuthorized: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
};

export default Bookmark;
