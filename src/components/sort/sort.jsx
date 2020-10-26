import {Sorting} from '@constants';
import {connect} from 'react-redux';

const Sort = (props) => {
  const {sortType, onSortTypeClick} = props;
  const [stateOpened, setState] = React.useState(false);

  const handleSortClick = (evt) => {
    evt.preventDefault();
    setState(!stateOpened);
  };

  const handleSortTypeClick = (evt) => {
    evt.preventDefault();
    setState(!stateOpened);
    onSortTypeClick(evt.target.textContent);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={handleSortClick} className="places__sorting-type" tabIndex="0">
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {stateOpened &&
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(Sorting).map((sort) => (
            <li key={sort} onClick={handleSortTypeClick} className={`places__option ${sortType === sort ? `places__option--active` : ``}`} tabIndex="0">{sort}</li>
          ))}
        </ul>}
    </form>
  );
};

Sort.propTypes = {
  onSortTypeClick: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  sortType: state.sortType,
});

const MemoizedSort = React.memo(Sort);

export {MemoizedSort};
export default connect(mapStateToProps)(MemoizedSort);
