import footer from '/footer.jpg';

const Footer = () => {
  return (
    <div
      className="section footer"
      id="about"
      style={{ backgroundImage: `url(${footer})` }}
    >
      <h2>Coffee Place</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Adresse 10
        <br />
        1010 Wien
        <br />
      </p>
      <h2>Newsletter</h2>
      <input />
      <p>© 2024 Mathias Fontain, All Rights Reserved</p>
      <div>socials</div>
      <div>
        <a>Datenschutz</a>
        <a>Impressum</a>
        <a>Cookies</a>
      </div>
    </div>
  );
};

export default Footer;
