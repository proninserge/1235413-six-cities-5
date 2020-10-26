import {Sorting} from '@constants';

const Sort = (props) => {
  const {sortType, onSortTypeClick, resetHoveredOffer} = props;
  const [stateOpened, setStateOpened] = React.useState(false);

  const handleSortClick = () => {
    setStateOpened(!stateOpened);
  };

  const handleSortTypeClick = (sort) => {
    setStateOpened(!stateOpened);
    onSortTypeClick(sort);
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
            <li key={sort}
              onClick={() => {
                handleSortTypeClick(sort);
                resetHoveredOffer();
              }}
              className={`places__option ${sortType === sort ? `places__option--active` : ``}`}
              tabIndex="0">
              {sort}
            </li>
          ))}
        </ul>}
    </form>
  );
};

Sort.propTypes = {
  sortType: PropTypes.string.isRequired,
  onSortTypeClick: PropTypes.func.isRequired,
  resetHoveredOffer: PropTypes.func.isRequired,
};

export default Sort;
