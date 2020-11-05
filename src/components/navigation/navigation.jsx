const Navigation = (props) => {
  const {email, isAuthorized, onNavigationClick} = props;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#"
            onClick={(evt) => {
              evt.preventDefault();
              onNavigationClick(isAuthorized);
            }}
          >
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {isAuthorized
              ? <span className="header__user-name user__name">{email}</span>
              : <span className="header__login">Sign in</span>
            }
          </a>
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  email: PropTypes.string.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  onNavigationClick: PropTypes.func.isRequired,
};

export default Navigation;
