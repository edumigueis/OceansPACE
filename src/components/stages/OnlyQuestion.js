import React from 'react';

const OnlyQuestion = ({ questionText, options, correctAnswerId, nextStage, setStageIndex }) => {
  const handleAnswer = (id) => {
    if (id === correctAnswerId) {
      setStageIndex(nextStage); // Aqui é onde chamamos setStageIndex
    } else {
      alert('Resposta incorreta');
    }
  };

  return (
    <div>
      <h1>{questionText}</h1>
      {options.map((option) => (
        <button key={option.id} onClick={() => handleAnswer(option.id)}>
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default OnlyQuestion;
