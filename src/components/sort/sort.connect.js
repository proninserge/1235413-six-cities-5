import Sort from '@components/sort/sort';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  sortType: state.sortType,
});

const MemoizedSort = React.memo(Sort);

export default connect(mapStateToProps)(MemoizedSort);
