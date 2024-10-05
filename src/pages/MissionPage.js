import React from 'react';
import FlatMap from '../components/FlatMap';
import MissionCards from '../components/MissionCards';
import csv from '../assets/data/cloro.csv';

function MissionPage() {
  const initialViewState = {
    latitude: 22.8,
    longitude: 60.5,
    zoom: 5,
    pitch: 0,
    bearing: 0,
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

  const cardsData = [
    {
      number: 50,
      title: "Mission 1",
      bulletPoints: ["Point 1", "Point 2", "Point 3"],
      text: "This is some rich text for mission 1."
    },
    {
      number: 51,
      title: "Mission 2",
      bulletPoints: ["Point A", "Point B", "Point C"],
      text: "This is some rich text for mission 2."
    },
    {
      number: 52,
      title: "Mission 3",
      bulletPoints: ["Bullet X", "Bullet Y", "Bullet Z"],
      text: "This is some rich text for mission 3."
    },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <div style={{ width: '500px', backgroundColor: '#f0f0f0' }}>
        <MissionCards >
        {cardsData.map((card) => (
        <div key={card.number} className="mission-card-content">
          <div className="mission-card-header">
            <h2>{card.number}</h2>
            <h4>{card.title}</h4>
          </div>
          <ul>
            {card.bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <p>{card.text}</p>
        </div>
      ))}
        </MissionCards>
      </div>
      <div style={{ flex: 1 }}>
      <FlatMap
        csvUrl={csv}
        initialViewState={initialViewState}
        heatmapConfig={heatmapConfig}
        tileLayerConfig={tileLayerConfig}
      />
      </div>
    </div>
  );
}

export default MissionPage;