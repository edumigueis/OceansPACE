import React from 'react';

function Question({ question, onAnswerClick }) {
  return (
    <div style={{ width: '100%', height: '100%', padding: '2rem', color: '#fff' }}>
      <h1>PACE Mission</h1>
      <h2>Scientific Research: Middle East Region</h2>
      <p>{question.text}</p>
      <div>
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onAnswerClick(option)}
            style={{
              display: 'block',
              width: '100%',
              padding: '1rem',
              margin: '1rem 0',
              backgroundColor: '#005', // You can adjust this for selected option styling if needed
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
