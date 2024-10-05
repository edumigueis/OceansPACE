import React, { useState, Children, cloneElement } from 'react';
import { motion } from 'framer-motion';  // Import Framer Motion
import '../styles/MissionCards.css';  // Import the CSS file

function MissionCard({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenHeight = window.innerHeight;  // Get the screen height

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Children.count(children));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Children.count(children)) % Children.count(children));
  };

  const currentChild = Children.toArray(children)[currentIndex];

  return (
    <div className="mission-card">
      <motion.div 
        key={currentIndex} // Use currentIndex for the key
        initial={{ y: screenHeight }}  // Use screen height for initial position
        animate={{ y: 0 }}
        exit={{ y: -screenHeight }}    // Use screen height for exit position
        transition={{ duration: 0.3 }}   // Animation duration
      >
        {cloneElement(currentChild)} {/* Clone the current child to retain its props */}
      </motion.div>

      <div className="mission-card-navigation">
        <button onClick={handlePrev} aria-label="Previous Mission">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6">
            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
          </svg>
        </button>
        <button onClick={handleNext} aria-label="Next Mission">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6">
            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default MissionCard;
