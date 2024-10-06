import React, { useState } from 'react';
import Question from '../Question';

function SingleQuestionStage({ setStageIndex, question }) {
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Função chamada ao clicar em uma resposta
  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);  // Define a resposta selecionada
    setQuestionAnswered(true);  // Marca como respondido
  };

  return (
    <div className="question-stage-container">
      {/* Exibe a explicação, se disponível, acima da pergunta */}
      {questionAnswered && selectedAnswer?.explanation && (
        <div className="explanation">
          <p>{selectedAnswer.explanation}</p> {/* Exibe a explicação da resposta */}
        </div>
      )}

      <Question
        question={question} // Passa a pergunta atual recebida de MultipleQuestionsStage
        onAnswerClick={(answer) => {
          handleAnswerClick(answer);
          setStageIndex(answer); // Avança para a próxima pergunta apenas após clicar em "Next"
        }} // Define a função a ser chamada ao clicar na resposta
      />
    </div>
  );
}

export default SingleQuestionStage;
