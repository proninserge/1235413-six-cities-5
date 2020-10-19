const CityChange = (props) => {
  const {currentCity, cities, onCityChange} = props;
  const cityRef = React.createRef();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, index) => (
          <li key={`${city}-${index}`} className="locations__item">
            <a
              ref={cityRef}
              onClick={(evt) => {
                evt.preventDefault();
                document.querySelector(`.tabs__item--active`).classList.remove(`tabs__item--active`);
                evt.target.closest(`.tabs__item`).classList.add(`tabs__item--active`);
                onCityChange(city);
              }}
              className={`locations__item-link tabs__item ${city === currentCity && `tabs__item--active`}`}
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

export default CityChange;
