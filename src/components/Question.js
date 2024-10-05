import React from 'react';

function Question({ question, onAnswerClick }) {
  return (
    <div>
      <h2 className="question-title">PACE Mission: Scientific Research</h2>
      <p>{question.text}</p>
      <div className="question-options">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onAnswerClick(option)}
            className="question-button"
            disabled={option === null} 
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
