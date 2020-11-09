import Navigation from '@components/navigation/navigation.connect';
import {Redirect} from 'react-router-dom';
import {AppRoute} from '@constants';

class SignInScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(evt) {
    const {onSubmit} = this.props;
    const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    evt.preventDefault();

    if (EMAIL_REGEXP.test(this.emailRef.current.value) && this.passwordRef.current.value) {
      onSubmit({
        email: this.emailRef.current.value,
        password: this.passwordRef.current.value,
      });
    }
  }

  render() {
    const {isAuthorized, city, onNavigationClick} = this.props;

    if (isAuthorized) {
      return (
        <Redirect to={AppRoute.ROOT} />
      );
    }

    return (
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="#">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>

              <Navigation onNavigationClick={onNavigationClick} />

            </div>
          </div>
        </header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form
                className="login__form form"
                action="#"
                method="post"
                onSubmit={this._handleSubmit}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input ref={this.emailRef} className="login__input form__input" type="email" name="email" placeholder="Email" required={true}/>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input ref={this.passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required={true}/>
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

SignInScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  onNavigationClick: PropTypes.func.isRequired,
};

export default SignInScreen;
