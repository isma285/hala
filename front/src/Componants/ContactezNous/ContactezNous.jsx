import React, { useState } from 'react';
import "./ContactezNous.css"
const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (<>
    <div>
      <button onClick={togglePopup}>Contactez-nous</button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Numéro de téléphone : +123456789</h2>
            <button onClick={togglePopup}>Fermer</button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Popup;
