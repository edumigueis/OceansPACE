import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CardWithAnimatedText = ({ coordinates }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [showCoordinates, setShowCoordinates] = useState(false);

  useEffect(() => {
    const texts = [
      "Receiving mission data...",
      "GPS updated and waypoints active",
      "Select a mission to start your journey",
    ];

    if (lineIndex < texts.length) {
      if (!isErasing) {
        if (charIndex < texts[lineIndex].length) {
          const timeout = setTimeout(() => {
            setDisplayedText((prev) => prev + texts[lineIndex][charIndex]);
            setCharIndex(charIndex + 1);
          }, 30);
          return () => clearTimeout(timeout);
        } else {
          if (lineIndex === 0) {
            const eraseTimeout = setTimeout(() => {
              setIsErasing(true);
            }, 600);
            return () => clearTimeout(eraseTimeout);
          } else if (lineIndex === 1) {
            const showCoordsTimeout = setTimeout(() => {
              setShowCoordinates(true);
              setIsErasing(true);
            }, 600);
            return () => clearTimeout(showCoordsTimeout);
          }
        }
      } else {
        const eraseTimeout = setTimeout(() => {
          setDisplayedText("");
          setIsErasing(false);
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
        }, 600);
        return () => clearTimeout(eraseTimeout);
      }
    }
  }, [lineIndex, charIndex, isErasing]);

  return (
    <div className="card" style={{ position: 'relative', pointerEvents: 'none' }}>
      <p
        style={{
          color: 'white',
          fontSize: '12px',
          whiteSpace: 'nowrap',
          fontWeight: 'bold',
        }}
      >
        TOOL STATUS
      </p>
      <motion.p
        key={lineIndex}
        style={{
          color: 'white',
          fontSize: '30px',
          whiteSpace: 'nowrap',
          fontWeight: 'bold',
          lineHeight: 0.1,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayedText}
      </motion.p>

      {showCoordinates && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {coordinates.map((coord, index) => (
            <motion.p
              key={index}
              style={{
                color: 'red',
                fontSize: '18px',
                whiteSpace: 'nowrap',
                fontFamily: 'monospace',
                margin: '3px 0',
              }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.25 }}
            >
              {coord}
            </motion.p>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default CardWithAnimatedText;
