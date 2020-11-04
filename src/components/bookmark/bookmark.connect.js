import Bookmark from '@components/bookmark/bookmark';
import {getAuthorizedStatus} from '@components/navigation/selectors/get-authorized-status';
import {connect} from 'react-redux';
import {ApiActionCreator} from '@store/api-action';

const mapStateToProps = ({OFFERS, USER}) => ({
  favoriteOffers: OFFERS.favoriteOffers,
  isAuthorized: getAuthorizedStatus(USER),
});

const mapDispatchToProps = (dispatch) => ({
  onBookmarkClick(id, mark) {
    return Promise.resolve(dispatch(ApiActionCreator.handleFavorites(id, mark)));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);
