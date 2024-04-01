import logoWhite from '/images/logo_white.png';

const LoadingScreen = ({ loading }) => {
  return (
    <div className={`loadingscreen ${loading ? 'loading' : 'done'}`}>
      <img
        src={logoWhite}
        alt="Coffe Place Logo"
        className="loadingscreen__logo"
      />
    </div>
  );
};

export default LoadingScreen;
