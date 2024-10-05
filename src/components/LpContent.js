import React, { useState } from "react";
import "../styles/SelectionComponent.css"; // Certifique-se de criar este arquivo CSS para estilos

const LpContent = () => {
  const options = ["EASY", "MEDIUM", "HARD"]; // As opções para mudar
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % options.length); // Avança na lista
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + options.length) % options.length); // Volta na lista
  };

  return (
    <div className="selection-container">
      <img src="logooceanspace.png" alt="Ocean Logo" className="logo" />
      <h1>OCEANSPACE</h1>
      <p>
        UNDERSTAND OCEAN CHARACTERISTICS THROUGH PACE SATELLITE DATA TO
        UNDERSTAND THE IMPACTS OF GLOBAL WARMING ON THE OCEAN
      </p>
      
      <div className="selection-box">
        <button className="arrow" onClick={handlePrev}>
          &#x3c;
        </button>
        <div className="option-display">{options[currentIndex]}</div>
        <button className="arrow" onClick={handleNext}>
          &#x3e;
        </button>
      </div>
      
      <p className="footer-text">
        DIFFICULTY LEVEL CHANGES THE OCEANS PACE
      </p>
    </div>
  );
};

export default LpContent;
