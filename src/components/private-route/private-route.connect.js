import {connect} from 'react-redux';
import PrivateRoute from '@components/private-route/private-route';

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});


export default connect(mapStateToProps)(PrivateRoute);
