// Dropdown.js
import React, { useState } from 'react';
import "./Navbar.css"; // Fichier CSS pour styliser le dropdown

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropbtn">
        Contactez-Nous
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#">+033435658</a>
          <a href="#">hala@gmail.com</a>
          
        </div>
      )}
    </div>
  );
};

export default Dropdown;
