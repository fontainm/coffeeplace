import header from '/images/header.jpg';
import logoWhite from '/images/logo_white.png';

const Header = () => {
  return (
    <div
      className="section header"
      style={{ backgroundImage: `url(${header})` }}
    >
      <img src={logoWhite} alt="Coffe Place Logo" className="header__logo" />
      <h1 style={{ display: 'none' }}>Coffee Place</h1>
      <p className="header__subtitle">
        Genieße den Geschmack des Lebens.
      </p>
    </div>
  );
};

export default Header;
