import React, { useState } from 'react';
import Question from '../Question';

function SingleQuestionStage({ setStageIndex, question, answeredOptions = [] }) {
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Função chamada ao clicar em uma resposta
  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);  // Define a resposta selecionada
    setQuestionAnswered(true);  // Marca como respondido
  };

  // Verifica se question.options está definido e é um array
  const filteredOptions = Array.isArray(question.options)
    ? question.options.filter(
        (option) => !answeredOptions.includes(option.id)
      )
    : [];

  return (
    <div className="question-stage-container">
      {/* Exibe a explicação, se disponível, acima da pergunta */}
      {questionAnswered && selectedAnswer?.explanation && (
        <div className="explanation">
          <p>{selectedAnswer.explanation}</p> {/* Exibe a explicação da resposta */}
        </div>
      )}

      <Question
        question={{ ...question, options: filteredOptions }} // Passa a pergunta atual com as opções filtradas
        onAnswerClick={(answer) => {
          handleAnswerClick(answer);
          setStageIndex(answer); // Avança para a próxima pergunta
        }} // Define a função a ser chamada ao clicar na resposta
      />
    </div>
  );
}

export default SingleQuestionStage;
