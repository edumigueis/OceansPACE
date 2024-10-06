import React, { useState } from 'react';
import SingleQuestionStage from './SingleQuestionStage';

function MultipleQuestionsStage({ questionStages }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Índice da pergunta atual

  // Função para avançar para a próxima pergunta com base no `nextQuestionId`
  const handleNextQuestion = (answer) => {
    const nextQuestionId = answer.nextQuestionId;
    if (nextQuestionId !== null && nextQuestionId < questionStages.length) {
      setCurrentQuestionIndex(nextQuestionId); // Atualiza para a próxima pergunta
    } else {
      console.log("Fim do fluxo ou próxima pergunta indefinida.");
    }
  };

  return (
    <div className="multiple-questions-container">
      <SingleQuestionStage
        setStageIndex={handleNextQuestion} // Passa a função de navegação para a próxima pergunta
        question={questionStages[currentQuestionIndex]} // Passa a pergunta atual para o SingleQuestionStage
      />
    </div>
  );
}

export default MultipleQuestionsStage;
