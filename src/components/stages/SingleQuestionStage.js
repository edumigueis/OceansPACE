import React, { useState } from 'react';
import Question from '../Question';

function SingleQuestionStage({ setStage, handleCenterMap }) {
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setQuestionAnswered(true);

    // Center the map on a specific coordinate (example: latitude, longitude)
    handleCenterMap(22.8, 60.5); // Example coordinates for centering

    // Redirect if the answer is correct
    if (answer.isCorrect) {
      setTimeout(() => {
        setStage((prev) => (prev < 2 ? prev + 1 : 2)); // Change stage to next one
      }, 1500);
    }
  };

  return (
    <div style={{ position: 'absolute', left: 0, top: 0, width: '300px', height: '200px', backgroundColor: '#f0f0f0', zIndex: 1 }}>
      <Question 
        question={{
          text: "How do phytoplankton contribute to the Earth's oxygen production and carbon cycling in the ocean?",
          options: [
            { id: 1, text: "By releasing carbon dioxide and consuming oxygen.", isCorrect: false },
            { id: 2, text: "By producing oxygen through photosynthesis and absorbing carbon dioxide.", isCorrect: true },
            { id: 3, text: "By feeding on marine animals and increasing oxygen levels.", isCorrect: false },
            { id: 4, text: "By reducing sunlight and increasing carbon dioxide in the atmosphere.", isCorrect: false },
          ],
        }} 
        onAnswerClick={handleAnswerClick}
      />
    </div>
  );
}

export default SingleQuestionStage;
