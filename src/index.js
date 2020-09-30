import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  OFFERS_COUNT: 312
};

ReactDOM.render(
    <App
      offersCount={Settings.OFFERS_COUNT}
    />,
    document.querySelector(`#root`)
);
