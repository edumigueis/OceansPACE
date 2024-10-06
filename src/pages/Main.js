import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import CardWithAnimatedText from '../components/CardWithAnimatedText';
import MissionBriefing from '../components/MissionBriefing';
import '../styles/App.css';
import lowResEarth from '../assets/earth-min-1.jpg';
import backgroundMusic from '../assets/sounds/background_space.mp3';

function Main({ missions }) {
  const globeEl = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ringsData, setRingsData] = useState([]);
  const [pointsData, setPointsData] = useState([]);
  const [isInteractive, setIsInteractive] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const maxR = 16;
  const propagationSpeed = 6;
  
  const repeatPeriod = (maxR / propagationSpeed) * 0.3 * 1000;

  const gData = missions.map((mission, index) => ({
    index,
    lat: mission.lat,
    lng: mission.lng,
    maxR: maxR,
    propagationSpeed: propagationSpeed,
    repeatPeriod: repeatPeriod,
    color: 'red',
    concluded: mission.concluded,
  }));

  const coordinatesText = gData.map(
    ({ lat, lng }) => `Lat: ${lat.toFixed(4)}, Long: ${lng.toFixed(4)}`
  );

  // Function to pause the audio in Main
  const pauseMainAudio = () => {
    const audio = audioRef.current;
    audio.pause();
    setIsPlaying(false); // Update the state to reflect that the audio has been paused
  };

  const toggleAudio = () => {
    const audio = audioRef.current;
    audio.volume = 3 / 20; // Set the volume fixed at 3
    if (isPlaying) {
      audio.pause();
      console.log('Audio paused');
    } else {
      audio.loop = true;
      audio.play().then(() => {
        console.log('Audio is playing at volume:', audio.volume);
      }).catch(error => console.log('Audio play failed:', error));
    }
  };

  useEffect(() => {
    audioRef.current.volume = 3 / 20; // Set the fixed volume at 3 on load
  }, []);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRingsData(gData.filter(mission => !mission.concluded));
      setPointsData(gData.map(e => ({
        lat: e.lat,
        lng: e.lng,
        color: e.concluded ? "green": e.color,
        altitude: 0.0001,
      })));
      setIsInteractive(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, [gData]);

  const handleClick = (e) => {
    if (!isInteractive) return;

    const { lat, lng } = e;
    for (const ring of gData) {
      const distance = Math.sqrt(Math.pow(lat - ring.lat, 2) + Math.pow(lng - ring.lng, 2));
      if (distance < ring.maxR * 1.2) {
        globeEl.current.pointOfView({ lat: ring.lat, lng: ring.lng, altitude: 0.4 }, 1000);
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

  const selectedBriefing = selectedPoint ? missions[selectedPoint.index] : null;

  return (
    <div className="main-container">
      <div className="coordinates-card">
        <CardWithAnimatedText coordinates={coordinatesText} />
      </div>
      <div className="globe-container">
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
          missionData={selectedBriefing}
        />
      )}
      <button className="audio-toggle-button" onClick={toggleAudio}>
        {isPlaying ? 'Mute' : 'Unmute'}
      </button>
      <div style={{
        position: 'absolute',
        bottom: '160px',
        right: '20px',
        zIndex: 11,
        color: 'white'
      }}>
        
      </div>
    </div>
  );
}

export default Main;
