import Sort from '@components/sort/sort';
import {connect} from 'react-redux';

const mapStateToProps = ({OFFERS}) => ({
  sortType: OFFERS.sortType,
});

const MemoizedSort = React.memo(Sort);

export default connect(mapStateToProps)(MemoizedSort);
