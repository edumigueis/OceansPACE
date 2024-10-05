import React, { useState, useRef } from 'react';
import FlatMap from '../components/FlatMap';

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

function MissionPage({ stages, csvPath }) {
  const [stageIndex, setStageIndex] = useState(0);
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

  // Pass handleCenterMap and setStageIndex to the current stage
  const currentStage = React.cloneElement(stages[stageIndex], { 
    handleCenterMap, 
    setStageIndex 
  });

  return (
    <div style={{ position: 'relative', display: 'flex', height: '100vh', width: '100vw' }}>
      {currentStage}
      <div style={{ flex: 1, zIndex: 0 }}>
        <FlatMap
          ref={mapRef}
          csvUrl={csvPath}
          initialViewState={initialViewState}
          heatmapConfig={heatmapConfig}
          tileLayerConfig={tileLayerConfig} 
        />
      </div>
      <div style={{ padding: '10px' }}>
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
        <button onClick={() => setStageIndex((prev) => (prev > 0 ? prev - 1 : 0))}>Previous</button>
        <button onClick={() => setStageIndex((prev) => (prev < stages.length - 1 ? prev + 1 : stages.length - 1))}>
          Next
        </button>
      </div>
    </div>
  );
}

export default MissionPage;
