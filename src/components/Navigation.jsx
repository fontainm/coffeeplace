import { useEffect, useState } from 'react';
import logo from '/logo.png';
import { HashLink as Link } from 'react-router-hash-link';

const Navigation = ({ className }) => {
  const [navClass, setNavClass] = useState('top');

  useEffect(() => {
    window.onscroll = () => {
      setNavClass(window.scrollY === 0 ? 'top' : 'down');
    };
  }, []);

  return (
    <nav className={`navigation ${navClass} ${className}`}>
      <div className={`navigation__wrapper`}>
        <Link to="/" className="navigation__logo order-1 order-md-4">
          <img src={logo} alt="Coffee Place Logo" />
        </Link>
        <Link
          to="/#products"
          href="#products"
          className="navigation__item order-2"
        >
          Produkte
        </Link>
        <Link to="/#openinghours" className="navigation__item order-3">
          Öffnungszeiten
        </Link>
        <Link to="/#newsletter" className="navigation__item order-4">
          Newsletter
        </Link>
        <Link to="/#about" className="navigation__item order-5">
          Über uns
        </Link>
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
