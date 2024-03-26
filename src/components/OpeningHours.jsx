import store1 from '/stores/store1.jpg';
import store2 from '/stores/store2.jpg';

const OpeningHours = () => {
  return (
    <div className="section openinghours dark" id="openinghours">
      <h2>Öffnungszeiten</h2>
      <p>Wir freuen uns auf deinen Besuch!</p>
      <div className="openinghours__details">
        <div className="openinghours__wrapper">
          <div className="openinghours__store">
            <img src={store1} alt="Store 1" className="openinghours__image" />
            <p className="openinghours__place">Coffee Place #1</p>
            <ul>
              <li>Mo geschlossen</li>
              <li>Di - Fr: 07:00 - 16:30</li>
              <li>Sa - So: 12:00 - 17:30</li>
            </ul>
          </div>
        </div>
        <div className="openinghours__wrapper">
          <div className="openinghours__store">
            <img src={store2} alt="Store 2" className="openinghours__image" />
            <p className="openinghours__place">Coffee Place #2</p>
            <ul>
              <li>Mo - Do: 06:30 - 18:00</li>
              <li>Fr geschlossen</li>
              <li>Sa - So: 13:00 - 18:00</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;
