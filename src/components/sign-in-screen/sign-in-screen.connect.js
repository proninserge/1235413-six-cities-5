import SignInScreen from '@components/sign-in-screen/sign-in-screen';
import {connect} from 'react-redux';
import {handleCredentialsSubmit} from '@store/service-actions';
import {getAuthorizedStatus} from '@components/navigation/selectors/get-authorized-status';

const mapStateToProps = ({OFFERS, USER}) => ({
  city: OFFERS.currentCity,
  isAuthorized: getAuthorizedStatus(USER),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (authData) => handleCredentialsSubmit(authData, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
