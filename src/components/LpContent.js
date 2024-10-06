import React, { useState } from "react";
import "../styles/SelectionComponent.css"; // Ensure this file is properly linked
import easyImage from '../assets/Badge.png'; // Replace with your image paths
import mediumImage from '../assets/Badge.png';
import hardImage from '../assets/Badge.png';

const LpContent = ({ setDifficulty }) => {
  const options = [
    { label: "Satellite Scout", image: easyImage },
    { label: "Data Detective", image: mediumImage },
    { label: "Geo-Wizard", image: hardImage },
  ];
  const [currentIndex, setCurrentIndex] = useState(1); // Start at "MEDIUM"

  const handleSelection = (index) => {
    setCurrentIndex(index);
    setDifficulty(options[index].label); // Update difficulty in the parent component
  };

  return (
    <div className="selection-container">
      <img src="logooceanspace.png" alt="Ocean Logo" className="logo" />
      <h1>OCEANSPACE</h1>
      <p>
        Welcome to the world of remote sensing, explorer! You have been selected to work on the <strong>OceansPACE</strong> program, where you will take on missions all over the world to generate reports and learn about <strong>PACE</strong> monitored fenomena and remote sensoring.
        <br />
        <br />
        COMPREHEND <b>PACE SATELLITE</b> DATA THROUGH DIGESTIVE CONTENT.
      </p>

      <div className="image-selection">
        {options.map((option, index) => (
          <div
            key={option.label}
            className={`image-button ${index === currentIndex ? 'selected' : ''}`}
            onClick={() => handleSelection(index)}
          >
            <img src={option.image} alt={`${option.label} icon`} />
            <p>{option.label}</p>
          </div>
        ))}
      </div>

      <p className="footer-text">
        Difficulty level changes content complexity and tutorial mode.
      </p>
    </div>
  );
};

export default LpContent;
