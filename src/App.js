import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import MissionPage from './pages/MissionPage';
import DifficultyPage from './pages/DifficultyPage';
import SingleQuestionStage from './components/stages/SingleQuestionStage';
import InformativeSectionStage from './components/stages/InformativeSectionStage';
import MapFocusStage from './components/stages/MapFocusStage';
import './styles/App.css';
import cloroData from './assets/data/cloro.csv';
import aeroData from './assets/data/aero.csv';
import oman from './assets/missions/oman.jpg';
import FinalStage from './components/stages/FinalStage';

const missions = [
  {
    index: 0,
    concluded: true,
    title: "The Omani Bloom",
    lat: 24.618875,
    lng: 57.455609,
    location: "The Omani Sea",
    image: oman,
    text: "Oman, located at the southeastern tip of the Arabian Peninsula, is a country of stunning landscapes and warm climate, characterized by arid summers and mild winters. Its coastline, extending over 3,000 kilometers along the Sea of Oman and the Arabian Sea, boasts crystal-clear waters that are home to a rich marine biodiversity, including turtles and dolphins. The proliferation of phytoplankton in the coastal waters plays a crucial role in this ecosystem, serving as the foundation of the food chain and contributing to the health of the oceans. This connection between nature and culture highlights how Oman is a fascinating destination, where the sea and its marine life are integral parts of the national identity.",
    stages: [
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
      <InformativeSectionStage handleCenterMap={() => { }}>
        <div className="mission-card-header">
          <h2>Mission 1</h2>
          <h4>The Role of Phytoplankton</h4>
        </div>
        <div className="interactive-infographic">
          <h5>Interactive Infographic: The Life Cycle of Phytoplankton</h5>
        </div>
        <div className="animated-diagram">
          <h5>How Phytoplankton Contribute to Oxygen Production</h5>
        </div>
        <h5>Fun Facts About Phytoplankton</h5>
        <ul>
          <li>Phytoplankton are responsible for producing about 50% of the Earth's oxygen!</li>
          <li>They are the foundation of the aquatic food web, supporting a vast array of marine life.</li>
        </ul>
      </InformativeSectionStage>,
      <MapFocusStage
        focusData={{ title: "Mission 3", content: "Complete Your Goals" }}
      />,
      <FinalStage 
        onArrival={() => console.log('Final stage reached!')} 
        briefing={{}} 
      />
    ],
    csvPath: cloroData,
    initialViewState: {
      latitude: 22.87161,
      longitude: 60.58191,
      zoom: 5,
    },
    heatmapConfig: {
      intensity: 1,
      colorRange: [
        [255, 0, 0, 255],
        [255, 255, 0, 255],
        [0, 255, 0, 255],
        [0, 255, 255, 255],
        [0, 0, 255, 255],
      ],
      threshold: 0.9,
    },
    tileLayerConfig: {
      data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
      minZoom: 0,
      maxZoom: 19,
      tileSize: 256,
    },
  },
  {
    index: 1,
    concluded: false,
    title: "The Arabian Peninsula",
    lat: -16.83678,
    lng: -174.25968,
    location: "Middle East",
    image: oman,
    question: "What is the capital of Oman?",
    stages: [
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
      <InformativeSectionStage handleCenterMap={() => { }}>
        <div className="mission-card-header">
          <h2>Mission 2</h2>
          <h4>The Arabian Peninsula's Unique Ecosystem</h4>
        </div>
        <div className="interactive-infographic">
          <h5>Interactive Infographic: The Life Cycle of Phytoplankton</h5>
        </div>
        <div className="animated-diagram">
          <h5>How Phytoplankton Contribute to Oxygen Production</h5>
        </div>
        <h5>Fun Facts About Phytoplankton</h5>
        <ul>
          <li>Phytoplankton are responsible for producing about 50% of the Earth's oxygen!</li>
          <li>They are the foundation of the aquatic food web, supporting a vast array of marine life.</li>
        </ul>
      </InformativeSectionStage>,
      <MapFocusStage
        focusData={{ title: "Mission 3", content: "Analyze Data" }}
      />,
      <FinalStage 
        onArrival={() => console.log('Final stage reached!')} 
        briefing={{}} 
      />
    ],
    csvPath: aeroData,
    initialViewState: {
      latitude: -16.83678,
      longitude: -174.25968,
      zoom: 7,
    },
    heatmapConfig: {
      intensity: 1,
      colorRange: [
        [255, 0, 0, 255],
        [255, 255, 0, 255],
        [0, 255, 0, 255],
        [0, 255, 255, 255],
        [0, 0, 255, 255],
      ],
      threshold: 0.9,
    },
    tileLayerConfig: {
      data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
      minZoom: 0,
      maxZoom: 19,
      tileSize: 256,
    },
  },
];


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
