import React, { useState } from 'react';
import '../../styles/OnlyOneQuestion.css';

const OnlyOneQuestion = ({ questionText, options, correctAnswerId, nextStage, setStageIndex }) => {
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [selectedExplanation, setSelectedExplanation] = useState('');

  const handleAnswer = (id, text, explanation) => {
    setIsAnswered(true);
    setSelectedAnswer(text);
    setSelectedExplanation(explanation);

    if (correctAnswerId === null) {
      // If correctAnswerId is null, treat the answer as correct
      setIsCorrect(true);
    } else if (id === correctAnswerId) {
      // If the selected answer is correct
      setIsCorrect(true);
      setStageIndex(nextStage);
    } else {
      // If the selected answer is wrong
      setIsCorrect(false);
    }
  };

  const handleNext = () => {
    setStageIndex(nextStage);
  };

  return (
    <div className="only-one-question-container">
      <div className="only-one-question">
        <h1>{questionText}</h1>
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleAnswer(option.id, option.text, option.explanation)}
            disabled={isAnswered}
          >
            {option.text}
          </button>
        ))}

        {isAnswered && (
          <div className={isCorrect ? "correct-answer" : "incorrect-answer"}>
            <p>
              <strong>{'Option: '}</strong>
              {selectedAnswer}
            </p>
            {selectedExplanation && <p>{selectedExplanation}</p>}
            <button className="continue-btn" onClick={handleNext}>Continuar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnlyOneQuestion;
