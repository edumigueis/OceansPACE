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
      Welcome to the world of remote sensing, explorer! Before we begin, pick your difficulty level and let the adventure begin! Will you be a Satellite Scout (EASY), a Data Detective (MEDIUM), or rise to the challenge as a Geo-Wizard (HARD)? The choice is yours!
<br></br><br></br>
      YOU WILL BE ABLE TO COMPREHEND <b>PACE SATELLITE</b> DATA THROUGH DIGESTIVE CONTENT.
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
