import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import MissionPage from './pages/MissionPage';
import DifficultyPage from './pages/DifficultyPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/mission-1" element={<MissionPage />} />
        <Route path="/difficulty-selection" element={<DifficultyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
