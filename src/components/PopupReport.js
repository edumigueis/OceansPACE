// src/components/PopupReport.js

import React from 'react';
import '../styles/PopupReport.css'; // Estilos do Popup

function PopupReport({ reportDetails, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h3>Detalhes do Relatório</h3>
        <p>{reportDetails}</p>
        <button className="close-popup-btn" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

export default PopupReport;
