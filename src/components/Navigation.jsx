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
        <a href="#" className="navigation__logo order-1 order-md-4">
          <img src={logo} alt="Coffee Place Logo" />
        </a>
        <a href="#products" className="navigation__item order-2">
          Produkte
        </a>
        <a href="#openinghours" className="navigation__item order-3">
          Öffnungszeiten
        </a>
        <a href="#newsletter" className="navigation__item order-4">
          Newsletter
        </a>
        <a href="#about" className="navigation__item order-5">
          Über uns
        </a>
        <div
          className="navigation__burger"
          onClick={() =>
            navClass === 'show' ? setNavClass('down') : setNavClass('show')
          }
        >
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
