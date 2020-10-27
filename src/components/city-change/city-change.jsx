const CityChange = (props) => {
  const {currentCity, cities, onCityChange, resetHoveredOffer} = props;

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, index) => (
          <li key={`${city}-${index}`} className="locations__item">
            <a
              onClick={(evt) => {
                evt.preventDefault();
                onCityChange(city);
                resetHoveredOffer();
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
  resetHoveredOffer: PropTypes.func.isRequired,
};

export default CityChange;
