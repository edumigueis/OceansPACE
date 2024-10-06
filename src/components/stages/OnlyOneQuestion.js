import React, { useState, useEffect } from 'react';
import '../../styles/OnlyOneQuestion.css';

const OnlyOneQuestion = ({ questionText, options, correctAnswerId, nextStage, setStageIndex }) => {
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [selectedExplanation, setSelectedExplanation] = useState('');

  useEffect(() => {
    setIsAnswered(false);
    setIsCorrect(null);
    setSelectedAnswer('');
    setSelectedExplanation('');
  }, [questionText, nextStage]);

  const handleAnswer = (id, text, explanation) => {
    setIsAnswered(true);
    setSelectedAnswer(text);
    setSelectedExplanation(explanation);

    if (correctAnswerId === null) {
      setIsCorrect(true);
    } else if (id === correctAnswerId) {
      setIsCorrect(true);
      setStageIndex(nextStage);
    } else {
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
