import React from "react";

function DifficultyButtons({ difficulty, onSelect }) {
  return (
    <div className="difficulty-buttons">
      <button
        className={`button ${difficulty === "easy" ? "selected" : ""}`}
        onClick={() => onSelect("easy")}
      >
        EASY
      </button>
      <button
        className={`button ${difficulty === "hard" ? "selected" : ""}`}
        onClick={() => onSelect("hard")}
      >
        HARD
      </button>
    </div>
  );
}

export default DifficultyButtons;
