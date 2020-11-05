import {connect} from 'react-redux';
import Navigation from '@components/navigation/navigation';
import {getAuthorizedStatus} from '@components/navigation/selectors/get-authorized-status';
import {getEmail} from '@components/navigation/selectors/get-email';

const mapStateToProps = ({USER}) => ({
  isAuthorized: getAuthorizedStatus(USER),
  email: getEmail(USER),
});


export default connect(mapStateToProps)(Navigation);
