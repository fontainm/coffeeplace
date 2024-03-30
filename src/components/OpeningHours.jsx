import stores from '../data/stores.json';

const OpeningHours = () => {
  return (
    <div className="section openinghours dark" id="openinghours">
      <h2>Öffnungszeiten</h2>
      <p>Wir freuen uns auf deinen Besuch!</p>
      <div className="openinghours__details">
        {stores.map((store) => (
          <div key={store.id} className="openinghours__wrapper">
            <div className="openinghours__store">
              <img
                src={`images/stores/${store.image}`}
                alt="Store 1"
                className="openinghours__image"
              />
              <p className="openinghours__place">{store.name}</p>
              <ul>
                {store.openinghours.map((openinghour, index) => (
                  <li key={index}>{openinghour}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpeningHours;
