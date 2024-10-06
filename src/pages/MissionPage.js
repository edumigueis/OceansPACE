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
    [255, 0, 0, 255],   // Vermelho - Baixa intensidade
    [255, 255, 0, 255], // Amarelo - Média-baixa intensidade
    [0, 255, 0, 255],   // Verde - Média intensidade
    [0, 255, 255, 255], // Ciano - Média-alta intensidade
    [0, 0, 255, 255],   // Azul - Alta intensidade
  ],
  threshold: 0.9,
};

const tileLayerConfig = {
  data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
  minZoom: 0,
  maxZoom: 19,
  tileSize: 256,
};

// Função que gera a legenda baseada nos valores fornecidos
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
      <div style={{
        width: '200px',
        height: '20px',
        background: 'linear-gradient(to right, red, yellow, green, cyan, blue)',
        border: '1px solid #ccc',
      }}>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '5px' }}>
        <span>Baixa</span>
        <span>Alta</span>
      </div>
    </div>
  );
}

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
        {stages[stageIndex].displayMap ? (
          <div></div>
        ) : <span></span>
        }
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
          <HeatmapGradientLegend />
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
