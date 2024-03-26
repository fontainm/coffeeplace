import header from '/header.jpg';
import logoWhite from '/logo_white.png';

const Header = () => {
  return (
    <div
      className="section header"
      style={{ backgroundImage: `url(${header})` }}
    >
      <img src={logoWhite} alt="Coffe Place Logo" className="header__logo" />
      <h1 style={{ display: 'none' }}>Coffee Place</h1>
      <p className="header__subtitle">
        Dein bester Platz für den besten Kaffee
      </p>
    </div>
  );
};

export default Header;
