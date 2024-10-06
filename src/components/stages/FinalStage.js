import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PopupReport from '../PopupReport'; // Importa o Popup
import '../../styles/FinalStage.css';

function FinalStage({ onArrival, briefing, badge }) {
  const navigate = useNavigate();
  const [displayedReport, setDisplayedReport] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Estado para controlar o popup

  useEffect(() => {
    if (onArrival) {
      onArrival();
    }

    // Atualiza o relatório imediatamente sem simulação
    if (briefing.report) {
      setDisplayedReport(briefing.report);
    }
  }, [onArrival, briefing.report]);

  const handleClaimBadge = () => {
    navigate('/'); 
  };

  const handleReportClick = () => {
    setIsPopupOpen(true); // Abre o popup ao clicar no relatório
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Fecha o popup
  };

  return (
    <div className="final-stage-container">
      <h1 className="title">Congratulations, Scientist!</h1>
      <h2 className="subtitle">Mission Completed: {briefing.title}</h2>

      <img className="mission-image" src={briefing.image} alt="Mission Briefing" />
      <p className="mission-location">{briefing.location}</p>

      <div className="mission-report" onClick={handleReportClick}> {/* Adiciona onClick aqui */}
        <h3>Mission Report</h3>
        <p>{displayedReport}</p> {/* Exibe o texto do relatório diretamente */}
      </div>

      <div className="badge-and-button">
        <div className="badge-section">
          <h3>Badge</h3>
          <div className="badge-wrapper">
            <img className="badge-image" src={badge.image} alt="Badge" />
            <p className="badge-name">{badge.name}</p>
          </div>
        </div>

        <button className="claim-badge-btn" onClick={handleClaimBadge}>
          Claim Badge
        </button>
      </div>

      {/* Renderiza o Popup se isPopupOpen for true */}
      {isPopupOpen && (
        <PopupReport 
          reportDetails={briefing.reportAll} 
          onClose={handleClosePopup} 
        />
      )}
    </div>
  );
}

export default FinalStage;
