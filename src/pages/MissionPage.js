import React, { useState, useRef } from 'react';
import FlatMap from '../components/FlatMap';
import { MapProvider } from '../components/stages/MapProvider';

function HeatmapGradientLegend() {
  const valueRange = ['0.01', '0.02', '0.05', '0.1', '0.2', '0.5', '1', '2', '5', '10', '20'];

  return (
    <div style={{
      position: 'absolute',
      bottom: 10,
      right: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: '10px',
      borderRadius: '5px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 1,
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: '5px',
      }}>
        {valueRange.map((value, index) => (
          <span key={index} style={{ fontSize: '8px' }}>{value}</span>
        ))}
      </div>
      <div
        style={{
          width: '200px',
          height: '20px',
          background: `linear-gradient(
      to right,
      rgb(128, 0, 0),      /* Wine */
      rgb(128, 0, 128),    /* Purple */
      rgb(147, 112, 219),   /* Lilac */
      rgb(0, 0, 255),      /* Blue */
      rgb(0, 255, 255),    /* Cyan */
      rgb(0, 255, 0),      /* Green */
      rgb(173, 255, 47),   /* GreenYellow */
      rgb(255, 255, 0),    /* Yellow */
      rgb(255, 165, 0),    /* Orange */
      rgb(255, 0, 0),      /* Red */
      rgb(178, 34, 34)     /* Brick */
    )`,
          border: '1px solid #ccc',
        }}
      >
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '5px' }}>
        <span>Low</span>
        <span>High</span>
      </div>
    </div>
  );
}

function MissionPage({
  stages,
  csvPath,
  initialViewState,
  heatmapConfig,
  tileLayerConfig,
}) {
  const [stageIndex, setStageIndex] = useState(0);
  const mapRef = useRef(null);

  const focusOnCoordinates = (latitude, longitude, zoomLevel) => {
    if (mapRef.current && mapRef.current.focusOnCoordinates) {
      mapRef.current.focusOnCoordinates(latitude, longitude, zoomLevel);
    }
  };

  const currentStage = React.cloneElement(stages[stageIndex].component, {
    setStageIndex,
  });

  return (
    <MapProvider focusOnCoordinates={focusOnCoordinates}>
      <div style={{ position: 'relative', display: 'flex', height: '100vh', width: '100vw' }}>
        {currentStage}
        {stages[stageIndex].displayMap ? (
          <div></div>
        ) : <span></span>
        }
        <div style={{ flex: 1, zIndex: 0 }}>
          {stages[stageIndex].displayMap ? (
            <>
              <FlatMap
                ref={mapRef}
                csvUrl={csvPath}
                initialViewState={initialViewState}
                heatmapConfig={heatmapConfig}
                tileLayerConfig={tileLayerConfig}
              />
              <HeatmapGradientLegend />
            </>
          ) : (
            <img
              style={{ height: '100vh', width: '100vw', objectFit: 'cover' }}
              src={stages[stageIndex].fallbackImage}
              alt="mission-location"
            />
          )}
        </div>
      </div>
    </MapProvider>
  );
}

export default MissionPage;
