import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Corrigido: useNavigate em vez de useHistory
import DifficultyButtons from "../components/DifficultyButtons";
import ConfirmButton from "../components/ConfirmButton";
import WaveAnimation from "../components/WaveAnimation";
import "../styles/Difficulty.css"; // Mantém o estilo principal no App.css
import logoOceanSpace from "../assets/logooceanspace.png";


function HomePage() {
  const [difficulty, setDifficulty] = useState(null);
  const [showConfirmButton, setShowConfirmButton] = useState(false);
  const navigate = useNavigate(); // Corrigido: useNavigate em vez de useHistory

  const handleDifficultySelect = (level) => {
    setDifficulty(level);
    setShowConfirmButton(true);
  };

  const handleConfirm = () => {
    setTimeout(() => {
      navigate("/"); // Corrigido: useNavigate para redirecionar
    }, 2000);
  };

  return (
    <div className="container">
      <div className="content">
        <img src={logoOceanSpace} alt="Ocean Logo" className="logo" />
        <div class="title-text">        
            <h1>OCEANSPACE</h1>
            <p>UNDERSTAND OCEAN CHARACTERISTICS THROUGH PACE SATELLITE DATA TO UNDERSTAND THE IMPACTS OF GLOBAL WARMING ON THE OCEAN</p>
        </div>

        <DifficultyButtons difficulty={difficulty} onSelect={handleDifficultySelect} />

        {showConfirmButton && <ConfirmButton onConfirm={handleConfirm} />}
      </div>

      {/* Animação das Ondas */}
      <WaveAnimation difficulty={difficulty} />

      <p className="footer-text">DIFFICULTY LEVEL CHANGES THE OCEANS PACE</p>
    </div>
  );
}

export default HomePage;
