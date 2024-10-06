import React, { useState } from 'react';
import SingleQuestionStage from './SingleQuestionStage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../styles/QuestionAnimations.css'; // Arquivo CSS com as animações

function MultipleQuestionsStage({ questionStages }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Índice da pergunta atual
  const [answeredQuestions, setAnsweredQuestions] = useState({}); // Armazena respostas já dadas

  // Função para avançar para a próxima pergunta com base no `nextQuestionId`
  const handleNextQuestion = (answer) => {
    const nextQuestionId = answer.nextQuestionId;
    // Armazena a resposta dada para a pergunta atual
    setAnsweredQuestions((prev) => ({
      ...prev,
      [currentQuestionIndex]: [...(prev[currentQuestionIndex] || []), answer.id],
    }));

    if (nextQuestionId !== null && nextQuestionId < questionStages.length) {
      setCurrentQuestionIndex(nextQuestionId); // Atualiza para a próxima pergunta
    } else {
      console.log("Fim do fluxo ou próxima pergunta indefinida.");
    }
  };

  return (
    <div className="multiple-questions-container">
      <TransitionGroup>
        <CSSTransition
          key={currentQuestionIndex} // chave única para cada transição de pergunta
          timeout={500} // Duração da animação
          classNames="fade" // Nome da classe de animação
        >
          <SingleQuestionStage
            setStageIndex={handleNextQuestion} // Passa a função de navegação para a próxima pergunta
            question={questionStages[currentQuestionIndex]} // Passa a pergunta atual para o SingleQuestionStage
            answeredOptions={answeredQuestions[currentQuestionIndex] || []} // Passa as respostas já dadas
          />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default MultipleQuestionsStage;
