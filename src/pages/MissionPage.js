import React, { useState, useRef } from 'react';
import FlatMap from '../components/FlatMap';
import { MapProvider } from '../components/stages/MapProvider';

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

  const focusOnCoordinates = (latitude, longitude, zoomLevel) => {
    if (mapRef.current && mapRef.current.focusOnCoordinates) {
      mapRef.current.focusOnCoordinates(latitude, longitude, zoomLevel);
    }
    console.log("Focused on coordinates");
  };

  const currentStage = React.cloneElement(stages[stageIndex].component, {
    setStageIndex,
  });

  return (
    <MapProvider focusOnCoordinates={focusOnCoordinates}>
      <div style={{ position: 'relative', display: 'flex', height: '100vh', width: '100vw' }}>
        {currentStage}
        <div style={{ flex: 1, zIndex: 0 }}>
          {stages[stageIndex].displayMap ? (
            <FlatMap
              ref={mapRef}
              csvUrl={csvPath}
              initialViewState={initialViewState}
              heatmapConfig={heatmapConfig}
              tileLayerConfig={tileLayerConfig}
            />
          ) : (
            <img
              style={{ height: '100vh', width: '100vw', objectFit: 'cover' }}
              src={stages[stageIndex].fallbackImage}
              alt="mission-location"
            />
          )}
        </div>
      </div>
      <div style={{ padding: '10px' }}>
        <button onClick={() => setStageIndex((prev) => Math.max(prev - 1, 0))}>Previous</button>
        <button onClick={() => setStageIndex((prev) => Math.min(prev + 1, stages.length - 1))}>Next</button>
      </div>
    </MapProvider>
  );
}

export default MissionPage;