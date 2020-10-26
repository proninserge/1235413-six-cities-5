import {connect} from 'react-redux';

const CityChange = (props) => {
  const {currentCity, cities, onCityChange} = props;

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, index) => (
          <li key={`${city}-${index}`} className="locations__item">
            <a
              onClick={(evt) => {
                evt.preventDefault();
                onCityChange(city);
              }}
              className={`locations__item-link tabs__item ${city === currentCity ? `tabs__item--active` : ``}`}
              href="#">
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

CityChange.propTypes = {
  onCityChange: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  cities: state.cities,
});

export {CityChange};
export default connect(mapStateToProps)(CityChange);
