import React, { useState } from 'react';
import '../../styles/MapReadingGuide.css';

function MapReadingGuide({ setStageIndex }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [animate, setAnimate] = useState(false);

  const steps = [
    {
      title: "What is PACE?",
      content: "The PACE satellite is designed to monitor and study various aspects of Earth's environment from space. Its primary goal is to provide valuable data about the health of the oceans and their broader impacts on global climate.",
    },
    {
      title: "Reading the Data",
      content: "The images captured by PACE help us understand critical phenomena, such as water quality and marine biodiversity. By analyzing these images, scientists like you, can observe changes in the environment, track ecological shifts, and identify patterns that affect climate conditions. This information is essential for managing natural resources and addressing environmental challenges.",
    },
    // {
    //   title: "Step 3: Orienting the Map",
    //   content: "Make sure the map is oriented correctly. Usually, north is at the top of the map.",
    // },
    // {
    //   title: "Step 4: Using the Legend",
    //   content: "The legend explains the symbols used on the map. Always refer to it for clarification.",
    // },
  ];

  const handleNextStep = () => {
    setAnimate(true); 
    setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        
        setStageIndex((prev) => prev + 1);
      }
      setAnimate(false); 
    }, 600); 
  };

  return (
    <div
      className={`map-reading-guide ${animate ? 'animate' : ''}`} 
    >
      <h2 style={{ margin: '0 0 10px 0' }}>{steps[currentStep].title}</h2>
      <p>{steps[currentStep].content}</p>
      <button
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        onClick={handleNextStep}
      >
        {currentStep < steps.length - 1 ? 'Next' : 'Finish'}
      </button>
    </div>
  );
}

export default MapReadingGuide;
