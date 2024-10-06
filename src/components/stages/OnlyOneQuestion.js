import React, { useState } from 'react';
import '../../styles/OnlyOneQuestion.css'

const OnlyOneQuestion = ({ questionText, options, correctAnswerId, nextStage, setStageIndex }) => {
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleAnswer = (id) => {
    setIsAnswered(true);
    if (id === correctAnswerId) {
      setIsCorrect(true);
      setStageIndex(nextStage);
    } else {
      setIsCorrect(false);
      const correctOption = options.find(option => option.id === correctAnswerId);
      setCorrectAnswer(correctOption.text);
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
          <button key={option.id} onClick={() => handleAnswer(option.id)} disabled={isAnswered}>
            {option.text}
          </button>
        ))}

        {isAnswered && !isCorrect && (
          <div className="correct-answer">
            <p>Resposta incorreta. A resposta correta é: <strong>{correctAnswer}</strong></p>
            <button className="continue-btn" onClick={handleNext}>Continuar</button>
          </div>
        )}
      </div>
    </div>

  );
};

export default OnlyOneQuestion;
