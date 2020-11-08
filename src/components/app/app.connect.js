import App from '@components/app/app';
import {connect} from 'react-redux';
import {handleInitialLoad} from '@store/service-actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  makeInitialLoad: () => handleInitialLoad(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
