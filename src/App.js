import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import MissionPage from './pages/MissionPage';
import DifficultyPage from './pages/DifficultyPage';
import './styles/App.css';
import missions from './missions'; // Import the missions dataset

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main missions={missions} />} />
        <Route path="/difficulty-selection" element={<DifficultyPage />} />
        {missions.map((mission) => (
          <Route
            key={mission.index}
            path={`/mission-${mission.index + 1}`}
            element={
              <MissionPage
                stages={mission.stages}
                csvPath={mission.csvPath}
                initialViewState={mission.initialViewState}
                heatmapConfig={mission.heatmapConfig}
                tileLayerConfig={mission.tileLayerConfig}
              />
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
