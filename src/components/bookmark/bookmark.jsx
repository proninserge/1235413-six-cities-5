import BookmarkButton from '@components/bookmark/components/bookmark-button/bookmark-button';
import {Link} from 'react-router-dom';
import {checkFavorite} from '@components/bookmark/selectors/check-favorite';
import {OFFERS_PROP_TYPE, OFFER_PROP_SHAPE} from '@/props-definition';
import {AppRoute, FavoriteStatus} from '@constants';

const Bookmark = (props) => {
  const {offer, favoriteOffers, isAuthorized, className, onBookmarkClick} = props;

  const isFavorite = checkFavorite(offer, favoriteOffers);

  if (!isAuthorized) {
    return (
      <Link to={AppRoute.LOGIN}>
        <BookmarkButton isFavorite={isFavorite} className={className}/>
      </Link>
    );
  }

  return (
    <BookmarkButton isFavorite={isFavorite} className={className} onClick={(evt) => {
      evt.preventDefault();
      const mark = isFavorite ? FavoriteStatus.NOT_FAVORITE : FavoriteStatus.FAVORITE;
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
