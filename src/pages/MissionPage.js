import React, { useState, useRef } from 'react';
import FlatMap from '../components/FlatMap';
import SingleQuestionStage from '../components/stages/SingleQuestionStage';
import InformativeSectionStage from '../components/stages/InformativeSectionStage';
import MapFocusStage from '../components/stages/MapFocusStage';
import csv from '../assets/data/cloro.csv';

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

function MissionPage() {
  const [stage, setStage] = useState(0);
  const mapRef = useRef(null);

  const handleZoomIn = () => {
    if (mapRef.current) {
      mapRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapRef.current) {
      mapRef.current.zoomOut();
    }
  };

  const handleCenterMap = (latitude, longitude) => {
    if (mapRef.current) {
      mapRef.current.setView([latitude, longitude]);
    }
  };

  const renderStage = () => {
    switch (stage) {
      case 0:
        return <SingleQuestionStage setStage={setStage} handleCenterMap={handleCenterMap} />;
      case 1:
        return <InformativeSectionStage handleCenterMap={handleCenterMap} />;
      case 2:
        return <MapFocusStage handleCenterMap={handleCenterMap} />;
      default:
        return <SingleQuestionStage setStage={setStage} handleCenterMap={handleCenterMap} />;
    }
  };

  return (
    <div style={{ position: 'relative', display: 'flex', height: '100vh', width: '100vw' }}>
      {renderStage()}
      <div style={{ flex: 1, zIndex: 0 }}>
        <FlatMap
          ref={mapRef} // Attach the ref to the map component
          csvUrl={csv}
          initialViewState={initialViewState}
          heatmapConfig={heatmapConfig}
          tileLayerConfig={tileLayerConfig} />
      </div>
      <div style={{ padding: '10px' }}>
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
        <button onClick={() => setStage((prev) => (prev > 0 ? prev - 1 : 0))}>Previous</button>
        <button onClick={() => setStage((prev) => (prev < 2 ? prev + 1 : 2))}>Next</button>
      </div>
    </div>
  );
}

export default MissionPage;
