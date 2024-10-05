import React, { useState, useRef } from 'react';
import FlatMap from '../components/FlatMap';

function MissionPage({ stages, csvPath, initialViewState, heatmapConfig, tileLayerConfig }) {
  const [stageIndex, setStageIndex] = useState(0); // Use setStageIndex to control stage changes
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

  return (
    <div style={{ position: 'relative', display: 'flex', height: '100vh', width: '100vw' }}>
      {stages[stageIndex]}
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
