import React from "react";
import "../styles/WaveAnimation.css"; // Certifique-se de ter o arquivo CSS no local correto

function WaveAnimation({ difficulty }) {
  let waveClass = "normal"; // Começa com a classe normal

  if (difficulty === "easy") {
    waveClass = "slow";
  } else if (difficulty === "hard") {
    waveClass = "fast";
  }

  return (
    <div className="ocean">
      <div className={`wave ${waveClass}`}></div>
      <div className={`wave wave2 ${waveClass}`}></div>
    </div>
  );
}

export default WaveAnimation;
