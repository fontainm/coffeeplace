const OpeningHours = () => {
  return (
    <div className="section openinghours" id="openinghours">
      <h2>Öffnungszeiten</h2>
      <p>Lorem ipsum</p>
      <div className="openinghours__details">
        <div className="openinghours__store">
          <h3>Store #1</h3>
          <ul>
            <li>Mo geschlossen</li>
            <li>Di - Fr: 07:00 - 16:30</li>
            <li>Sa - So: 12:00 - 17:30</li>
          </ul>
        </div>
        <div className="openinghours__store">
          <h3>Store #2</h3>
          <ul>
            <li>Mo - Do: 06:30 - 18:00</li>
            <li>Fr geschlossen</li>
            <li>Sa: 13:00 - 18:00</li>
            <li>So: 13:00 - 18:00</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;
