import logo from '/logo.png';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__wrapper">
        <a href="#products" className="navigation__item">
          Produkte
        </a>
        <a href="#openinghours" className="navigation__item">
          Öffnungszeiten
        </a>
        <a href="#">
          <img src={logo} alt="Coffe Place Logo" className="navigation__logo" />
        </a>
        <a href="#contact" className="navigation__item">
          Kontakt
        </a>
        <a href="#about" className="navigation__item">
          Über uns
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
