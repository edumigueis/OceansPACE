import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function FinalStage({ onArrival, briefing }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (onArrival) {
      onArrival();
    }
  }, [onArrival]);


  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <div
      style={{
        position: 'absolute', 
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff', 
        zIndex: 1000, 
      }}
    >
      <h1>Final Stage Completed!</h1>
      <h2>{briefing.title}</h2>
      <img src={briefing.image} alt="Mission Briefing" style={{ width: '200px', marginBottom: '20px' }} />
      <p>{briefing.location}</p>
      <button
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        onClick={handleRedirect} // Chama a função para redirecionar
      >
        Claim Badge
      </button>
    </div>
  );
}

export default FinalStage;
