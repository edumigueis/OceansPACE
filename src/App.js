import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import MissionPage from './pages/MissionPage';
import DifficultyPage from './pages/DifficultyPage';
import './styles/App.css';
import getMissionsByDifficulty from './missions'; // Caminho correto para importar

function App() {
  const missionPageRef = useRef(); // Create a ref for the MissionPage
  const [difficulty, setDifficulty] = useState('MEDIUM'); // Default difficulty

  // UseEffect to get the selected difficulty from localStorage
  useEffect(() => {
    const savedDifficulty = localStorage.getItem('selectedDifficulty') || 'MEDIUM';
    setDifficulty(savedDifficulty);
  }, []);

  // Get missions based on the selected difficulty
  const missions = getMissionsByDifficulty(difficulty);

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
                ref={missionPageRef} // Pass the ref to MissionPage
                stages={mission.stages.map((stage) => ({
                  ...stage,
                  component: React.cloneElement(stage.component, {
                    setMissionStageIndex: () => missionPageRef.current.setStageIndex(stage.next), // Use the ref to call setStageIndex
                  }),
                }))}
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
