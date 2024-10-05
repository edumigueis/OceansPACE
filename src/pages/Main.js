import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import CardWithAnimatedText from '../components/CardWithAnimatedText';
import MissionBriefing from '../components/MissionBriefing';
import '../styles/App.css';
import lowResEarth from '../assets/earth-min-1.jpg';

const gData = [
  {
    lat: 24.618875,
    lng: 57.455609,
    maxR: 10,
    propagationSpeed: 4,
    repeatPeriod: 1000,
    color: 'red'
  },
  {
    lat: 17.112546,
    lng: -16.917884,
    maxR: 10,
    propagationSpeed: 4,
    repeatPeriod: 1000,
    color: 'red'
  },
  {
    lat: 29.953204744601763,
    lng: -90.08925929478903,
    maxR: 10,
    propagationSpeed: 4,
    repeatPeriod: 1000,
    color: 'red'
  }
];

function Main() {
  const globeEl = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setSelectedPoint] = useState(null);

  // Map the gData coordinates into the format required by CardWithAnimatedText
  const coordinates = gData.map(
    ({ lat, lng }) => `Lat: ${lat.toFixed(4)}, Long: ${lng.toFixed(4)}`
  );

  const handleClick = (e) => {
    const { lat, lng } = e;

    for (const ring of gData) {
      const distance = Math.sqrt(
        Math.pow(lat - ring.lat, 2) + Math.pow(lng - ring.lng, 2)
      );

      if (distance < ring.maxR) {
        globeEl.current.pointOfView({ lat: ring.lat, lng: ring.lng, altitude: 0.3 }, 2000);

        setTimeout(() => {
          setSelectedPoint(ring);
          setIsModalOpen(true);
        }, 2000);

        return;
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPoint(null);
  };

  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: '50px', top: 'calc(50% - 55px)', zIndex: 10, pointerEvents: 'none' }}>
        <CardWithAnimatedText coordinates={coordinates} />
      </div>
      <div style={{ position: 'relative', zIndex: 9, pointerEvents: 'all' }}>
        <Globe
          ref={globeEl}
          globeImageUrl={lowResEarth}
          ringsData={gData}
          ringColor="color"
          ringMaxRadius="maxR"
          ringPropagationSpeed="propagationSpeed"
          ringRepeatPeriod="repeatPeriod"
          onGlobeClick={handleClick}
          pointsData={gData.map((e) => ({ lat: e.lat, lng: e.lng, color: e.color, altitude: 0.0001 }))}
          pointAltitude="altitude"
          pointColor={(point) => point.color}
          pointRadius={0.3}
        />
      </div>

      <MissionBriefing isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default Main;
