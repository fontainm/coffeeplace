import { Link } from 'react-router-dom';
import footer from '/images/footer.jpg';

const Footer = () => {
  return (
    <div
      className="section footer dark"
      id="about"
      style={{ backgroundImage: `url(${footer})` }}
    >
      <h2>Coffee Place</h2>
      <p>Wir stehen für Qualität, Gemeinschaft und nachhaltigen Genuss</p>
      <p>
        Adresse 10
        <br />
        1010 Wien
        <br />
        Österreich
      </p>
      <div className="footer__socials">
        <i className="bi bi-facebook"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-twitter"></i>
        <i className="bi bi-youtube"></i>
      </div>
      <div className="footer__links">
        <Link to="/datenschutz">Datenschutz</Link>
        <Link to="/impressum">Impressum</Link>
        <Link to="/cookies">Cookies</Link>
      </div>
      <p className="footer__copyright">
        © 2024 Mathias Fontain, All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
