import header from '/header.jpg';

const Header = () => {
  return (
    <div
      className="section header"
      style={{ backgroundImage: `url(${header})` }}
    >
      <h1 className="header__title">Coffee Place</h1>
      <p className="header__subtitle">Your Coffee Place for coffee needs</p>
    </div>
  );
};

export default Header;
