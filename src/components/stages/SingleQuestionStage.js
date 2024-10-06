import React, { useState } from 'react';
import Question from '../Question';

function SingleQuestionStage({ setStageIndex, question, answeredOptions = [] }) {
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setQuestionAnswered(true);
  };

  const filteredOptions = Array.isArray(question.options)
    ? question.options.filter((option) => !answeredOptions.includes(option.id))
    : [];

  return (
    <div className="question-stage-container">
      {questionAnswered && selectedAnswer?.explanation && (
        <div className="explanation">
          <p>{selectedAnswer.explanation}</p>
        </div>
      )}

      {filteredOptions.length > 0 ? (
        <Question
          question={{ ...question, options: filteredOptions }}
          onAnswerClick={handleAnswerClick} // Pass the handleAnswerClick directly
        />
      ) : (
        <div className="no-options-container">
          <p>Todas as opções foram respondidas!</p>
          <button onClick={() => setStageIndex(null)}>Seguir em frente</button>
        </div>
      )}
    </div>
  );
}

export default SingleQuestionStage;