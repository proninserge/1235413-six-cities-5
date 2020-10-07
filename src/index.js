import ReactDOM from 'react-dom';
import App from 'app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';

ReactDOM.render(
    <App
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
