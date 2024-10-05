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

const initialViewStateMission1 = {
  latitude: 22.8,
  longitude: 60.5,
  zoom: 5,
};

const initialViewStateMission2 = {
  latitude: -16.83678,
  longitude: -174.25968,
  zoom: 8,
};

const heatmapConfig = {
  intensity: 1,
  colorRange: [
    [255, 0, 0, 255],
    [255, 255, 0, 255],
    [0, 255, 0, 255],
    [0, 255, 255, 255],
    [0, 0, 255, 255],
  ],
  threshold: 0.9,
};

const tileLayerConfig = {
  data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
  minZoom: 0,
  maxZoom: 19,
  tileSize: 256,
};

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
    <InformativeSectionStage 
      info={{ title: "Mission 2", content: "Explore New Areas" }}
    />,
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
      info={{ title: "Mission 2", content: "Discover Marine Life" }}
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
          element={
            <MissionPage 
              stages={missionOneStages} 
              csvPath={cloroData} 
              initialViewState={initialViewStateMission1} 
              heatmapConfig={heatmapConfig} 
              tileLayerConfig={tileLayerConfig}
            />
          } 
        />
        <Route 
          path="/mission-2" 
          element={
            <MissionPage 
              stages={missionTwoStages} 
              csvPath={aeroData} 
              initialViewState={initialViewStateMission2} 
              heatmapConfig={heatmapConfig} 
              tileLayerConfig={tileLayerConfig}
            />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
