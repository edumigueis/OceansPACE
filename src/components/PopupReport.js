// src/components/PopupReport.js

import React from 'react';
import '../styles/PopupReport.css'; // Estilos do Popup

function PopupReport({ reportDetails, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h3>Report Details</h3>
        <p>{reportDetails}</p>
        <button className="close-popup-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PopupReport;
