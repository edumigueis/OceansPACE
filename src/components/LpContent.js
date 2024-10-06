import React, { useState } from "react";
import "../styles/SelectionComponent.css"; // Certifique-se de criar este arquivo CSS para estilos

const LpContent = ({ setDifficulty }) => {
  const options = ["EASY", "MEDIUM", "HARD"]; // As opções para mudar
  const [currentIndex, setCurrentIndex] = useState(1); // Start at "MEDIUM"

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % options.length;
      setDifficulty(options[newIndex]); // Update difficulty in the parent component
      return newIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + options.length) % options.length;
      setDifficulty(options[newIndex]); // Update difficulty in the parent component
      return newIndex;
    });
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
        DIFFICULTY LEVEL CHANGES THE OCEAN'S PACE
      </p>
    </div>
  );
};

export default LpContent;
