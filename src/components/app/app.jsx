import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';


const App = (props) => {
  const {offersCount} = props;

  return (
    <MainScreen offersCount={offersCount} />
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default App;
