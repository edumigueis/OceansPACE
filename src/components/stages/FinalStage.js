import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/FinalStage.css';

function FinalStage({ onArrival, briefing, badge }) {
  const navigate = useNavigate();
  const [displayedReport, setDisplayedReport] = useState('');

  useEffect(() => {
    if (onArrival) {
      onArrival();
    }

    // Define o relatório diretamente sem animação
    if (briefing.report) {
      setDisplayedReport(briefing.report); // Define o texto do relatório diretamente
    }
  }, [onArrival, briefing.report]);

  const handleClaimBadge = () => {
    navigate('/'); // Redireciona imediatamente após clicar no botão
  };

  return (
    <div className="final-stage-container">
      <h1 className="title">Congratulations, Scientist!</h1>
      <h2 className="subtitle">Mission Completed: {briefing.title}</h2>

      <img className="mission-image" src={briefing.image} alt="Mission Briefing" />
      <p className="mission-location">{briefing.location}</p>

      <div className="mission-report">
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
    </div>
  );
}

export default FinalStage;
