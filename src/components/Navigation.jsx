import { useEffect, useState } from 'react';
import logo from '/logo.png';

const Navigation = () => {
  const [navClass, setNavClass] = useState('top');

  useEffect(() => {
    window.onscroll = () => {
      setNavClass(window.scrollY === 0 ? 'top' : 'down');
    };
  }, []);

  return (
    <nav className={`navigation ${navClass}`}>
      <div className={`navigation__wrapper`}>
        <a href="#" className="navigation__logo">
          <img src={logo} alt="Coffee Place Logo" />
        </a>
        <a href="#products" className="navigation__item">
          Produkte
        </a>
        <a href="#openinghours" className="navigation__item">
          Öffnungszeiten
        </a>
        <a href="#contact" className="navigation__item">
          Kontakt
        </a>
        <a href="#about" className="navigation__item">
          Über uns
        </a>
        <div
          className="navigation__burger"
          onClick={() => setNavClass('show')}
        >
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
