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
import oman from './assets/missions/oman.jpg';

const initialViewState = [
  {
    index: 0,
    latitude: 22.87161,
    longitude: 60.58191,
    zoom: 5,
  },
  {
    index: 1,
    latitude: -16.83678,
    longitude: -174.25968,
    zoom: 7,
  },
];

const briefings = [
  {
    index: 0,
    title: "The Omani Bloom",
    lat: 24.618875,
    lng: 57.455609,
    location: "The Omani Sea",
    image: oman,
    question: "What is the capital of France?",
  },
  {
    index: 1,
    title: "The Arabian Peninsula",
    lat: 25.0,
    lng: 55.0,
    location: "Middle East",
    image: oman,
    question: "What is the capital of Oman?",
  },
];

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
      info={{ title: "Mission 1", content: "Explore New Areas" }}
    />,
    <MapFocusStage
      focusData={{ title: "Mission 1", content: "Complete Your Goals" }}
    />,
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
      focusData={{ title: "Mission 2", content: "Analyze Data" }}
    />,
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main coordinates={initialViewState} briefings={briefings} />} />
        <Route
          path="/mission-1"
          element={
            <MissionPage
              stages={missionOneStages}
              csvPath={cloroData}
              initialViewState={initialViewState[0]}
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
              initialViewState={initialViewState[1]}
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