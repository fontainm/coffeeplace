const Newsletter = () => {
  return (
    <div className="section newsletter light" id="newsletter">
      <h2>Newsletter</h2>
      <p>
        Bleib auf dem Laufenden mit unserem Newsletter und verpasse keine
        Neuigkeiten, Sonderangebote oder Events!
      </p>
      <div className="newsletter__wrapper">
        <input type="text" className="newsletter__input form-control" />
        <button type="button" className="btn newsletter__button">
          Abonnieren
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
