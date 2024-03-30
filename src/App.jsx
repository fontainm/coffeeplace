import { Routes, Route, useLocation } from 'react-router-dom';

import Imprint from './pages/Imprint';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import Home from './pages/Home';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import { useEffect } from 'react';

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navigation className={pathname === '/' ? '' : 'static'} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Imprint />} />
        <Route path="/datenschutz" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
