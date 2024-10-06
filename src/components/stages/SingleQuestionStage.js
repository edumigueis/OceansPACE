// src/components/SingleQuestionStage.js
import React, { useState } from 'react';
import Question from '../Question';

function SingleQuestionStage({ setStageIndex, question, answeredOptions = [], nextStage }) {
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

  // Verifica se todas as opções foram respondidas
  const allAnswered = filteredOptions.length === 0;

  return (
    <div className="question-stage-container">
      {/* Exibe a explicação, se disponível, acima da pergunta */}
      {questionAnswered && selectedAnswer?.explanation && (
        <div className="explanation">
          <p>{selectedAnswer.explanation}</p> {/* Exibe a explicação da resposta */}
        </div>
      )}

      {/* Verifica se ainda há opções disponíveis */}
      {filteredOptions.length > 0 ? (
        <Question
          question={{ ...question, options: filteredOptions }} // Passa a pergunta atual com as opções filtradas
          onAnswerClick={(answer) => {
            handleAnswerClick(answer);
            setStageIndex(nextStage); // Avança para a próxima pergunta definida por nextStage
          }} // Define a função a ser chamada ao clicar na resposta
        />
      ) : (
        <div className="no-options-container">
          <p>Todas as opções foram respondidas!</p>
          <button onClick={() => setStageIndex(nextStage || null)}>Seguir em frente</button> {/* Botão para seguir em frente */}
        </div>
      )}
    </div>
  );
}

export default SingleQuestionStage;
