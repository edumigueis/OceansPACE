import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import CardWithAnimatedText from '../components/CardWithAnimatedText';
import MissionBriefing from '../components/MissionBriefing';
import '../styles/App.css';
import lowResEarth from '../assets/earth-min-1.jpg';
import backgroundMusic from '../assets/sounds/background_space.mp3';

function Main({ coordinates, briefings }) {
  const globeEl = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ringsData, setRingsData] = useState([]);
  const [pointsData, setPointsData] = useState([]);
  const [isInteractive, setIsInteractive] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(backgroundMusic));

  // Create globe data including index for each coordinate
  const gData = coordinates.map(({ index, latitude, longitude }) => ({
    index,
    lat: latitude,
    lng: longitude,
    maxR: 10,
    propagationSpeed: 4,
    repeatPeriod: 1000,
    color: 'red',
  }));

  const coordinatesText = gData.map(
    ({ lat, lng }) => `Lat: ${lat.toFixed(4)}, Long: ${lng.toFixed(4)}`
  );

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.loop = true;
      audio.play().catch(error => console.log('Audio play failed:', error));
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setRingsData(gData);
      setPointsData(gData.map(e => ({ lat: e.lat, lng: e.lng, color: e.color, altitude: 0.0001 })));
      setIsInteractive(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
      audioRef.current.pause();
    };
  }, []);

  const handleClick = (e) => {
    if (!isInteractive) return;

    const { lat, lng } = e;

    for (const ring of gData) {
      const distance = Math.sqrt(
        Math.pow(lat - ring.lat, 2) + Math.pow(lng - ring.lng, 2)
      );

      if (distance < ring.maxR * 1.2) {
        globeEl.current.pointOfView({ lat: ring.lat, lng: ring.lng, altitude: 0.4 }, 1000);

        // Immediately update the selected point and open modal
        setSelectedPoint(ring);
        setIsModalOpen(true);

        return;
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPoint(null);
    globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 1.4 }, 1000);
  };

  // Get the briefing corresponding to the selected point
  const selectedBriefing = selectedPoint ? briefings[selectedPoint.index] : null;

  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: '50px', top: 'calc(50% - 80px)', zIndex: 10, pointerEvents: 'none' }}>
        <CardWithAnimatedText coordinates={coordinatesText} />
      </div>
      <div style={{ position: 'relative', zIndex: 9, pointerEvents: 'all' }}>
        <Globe
          ref={globeEl}
          globeImageUrl={lowResEarth}
          ringsData={ringsData}
          ringColor="color"
          ringMaxRadius="maxR"
          ringPropagationSpeed="propagationSpeed"
          ringRepeatPeriod="repeatPeriod"
          onGlobeClick={handleClick}
          pointsData={pointsData}
          pointAltitude="altitude"
          pointColor={(point) => point.color}
          pointRadius={0.3}
        />
      </div>
      {selectedBriefing && (
        <MissionBriefing
          isOpen={isModalOpen}
          onClose={closeModal}
          missionData={selectedBriefing} // Pass the selected briefing
        />
      )}
      <button
        onClick={toggleAudio}
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          zIndex: 11,
          padding: '10px 20px',
          backgroundColor: isPlaying ? '#f44336' : '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {isPlaying ? 'Mute' : 'Unmute'}
      </button>
    </div>
  );
}

export default Main;
