import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import MissionPage from './pages/MissionPage';
import SingleQuestionStage from './components/stages/SingleQuestionStage';
import InformativeSectionStage from './components/stages/InformativeSectionStage';
import MapFocusStage from './components/stages/MapFocusStage';
import './styles/App.css';
import cloroData from './assets/data/cloro.csv';
import aeroData from './assets/data/aero.csv';

function App() {
  const missionOneStages = [
    <SingleQuestionStage 
      question={{
        text: "How do phytoplankton contribute to the Earth's oxygen production and carbon cycling in the ocean?",
        options: [
          { id: 1, text: "By releasing carbon dioxide and consuming oxygen.", isCorrect: false },
          { id: 2, text: "By producing oxygen through photosynthesis and absorbing carbon dioxide.", isCorrect: true },
          { id: 3, text: "By feeding on marine animals and increasing oxygen levels.", isCorrect: false },
          { id: 4, text: "By reducing sunlight and increasing carbon dioxide in the atmosphere.", isCorrect: false },
        ],
      }}
    />,
    <InformativeSectionStage handleCenterMap={() => {}}>
  <div className="mission-card-header">
    <h2>Mission 1</h2>
    <h4>The Role of Phytoplankton</h4>
  </div>
  
  <div className="interactive-infographic">
    <h5>Interactive Infographic: The Life Cycle of Phytoplankton</h5>
    {/* Insert interactive infographic here */}
  </div>

  <div className="animated-diagram">
    <h5>How Phytoplankton Contribute to Oxygen Production</h5>
    {/* Insert animated diagram here */}
  </div>

  <h5>Fun Facts About Phytoplankton</h5>
  <ul>
    <li>Phytoplankton are responsible for producing about 50% of the Earth's oxygen!</li>
    <li>They are the foundation of the aquatic food web, supporting a vast array of marine life.</li>
  </ul>


</InformativeSectionStage>,
    <MapFocusStage 
      focusData={{ title: "Mission 3", content: "Complete Your Goals" }}
    />
  ];

  const missionTwoStages = [
    <SingleQuestionStage 
      question={{
        text: "What is the primary source of energy for photosynthesis in phytoplankton?",
        options: [
          { id: 1, text: "The Sun", isCorrect: true },
          { id: 2, text: "Volcanic heat", isCorrect: false },
          { id: 3, text: "Geothermal vents", isCorrect: false },
          { id: 4, text: "The Moon", isCorrect: false },
        ],
      }}
    />,
    <InformativeSectionStage 
      handleCenterMap={() => {}} 
      title="Mission 2"
      subtitle="Discover Marine Life"
      tasks={["Collect samples", "Analyze results", "Report findings"]}
      description="Explore the marine ecosystem and its inhabitants."
    />,
    <MapFocusStage 
      focusData={{ title: "Mission 3", content: "Analyze Data" }}
    />
  ];

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route 
          path="/mission-1" 
          element={<MissionPage stages={missionOneStages} csvPath={cloroData} />} 
        />
        <Route 
          path="/mission-2" 
          element={<MissionPage stages={missionTwoStages} csvPath={aeroData} />} 
        />
      </Routes>
    </Router>
  );
}


export default App;
