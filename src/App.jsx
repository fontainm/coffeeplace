import { Routes, Route, useLocation } from 'react-router-dom';

import Imprint from './pages/Imprint';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import Home from './pages/Home';

import LoadingScreen from './components/LoadingScreen.jsx';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import { useEffect, useState } from 'react';

const App = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
  }, []);

  return (
    <>
      <LoadingScreen loading={loading} />
      {loading ? null : (
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
      )}
    </>
  );
};

export default App;
