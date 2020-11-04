import SignInScreen from '@components/sign-in-screen/sign-in-screen';
import {connect} from 'react-redux';
import {ApiActionCreator} from '@store/api-action';
import {getAuthorizedStatus} from '@components/navigation/selectors/get-authorized-status';

const mapStateToProps = ({OFFERS, USER}) => ({
  city: OFFERS.currentCity,
  isAuthorized: getAuthorizedStatus(USER),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    Promise.resolve(dispatch(ApiActionCreator.login(authData)))
      .then(() => dispatch(ApiActionCreator.fetchFavorites()));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
