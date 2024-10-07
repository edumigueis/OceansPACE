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
  const [selectedPoint, setSelectedPoint] = useState(null); // Armazena a missão selecionada
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(backgroundMusic));

  const gData = missions.map(
    (mission) => ({
      lat: mission.lat,
      lng: mission.lng,
      title: mission.title,
      location: mission.location,
      image: mission.image,
      text: mission.text,
      maxR: 10,
      propagationSpeed: 4,
      repeatPeriod: 1000,
      color: 'red',
      mission,
    })
  );

  const coordinates = gData.map(
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
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    audioRef.current.volume = 3 / 20; // Set the fixed volume at 3 on load
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRingsData(gData.filter(mission => !mission.concluded));
      setPointsData(gData.map(e => ({
        lat: e.lat,
        lng: e.lng,
        color: e.concluded ? "green" : e.color,
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
      const distance = Math.sqrt(
        Math.pow(lat - ring.lat, 2) + Math.pow(lng - ring.lng, 2)
      );

      if (distance < ring.maxR * 1.2) {
        globeEl.current.pointOfView({ lat: ring.lat, lng: ring.lng, altitude: 0.4 }, 1000);

        setTimeout(() => {
          setSelectedPoint(ring); // Armazena a missão correspondente
          setIsModalOpen(true);   // Abre o modal
        }, 1500);

        return;
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPoint(null); // Limpa a missão selecionada
    globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 1.4 }, 1000);
  };

  // State to hold the difficulty level
  const [difficulty, setDifficulty] = useState('MEDIUM'); // Default value

  useEffect(() => {
    // Get the selected difficulty from localStorage
    const savedDifficulty = localStorage.getItem('selectedDifficulty') || 'MEDIUM';
    setDifficulty(savedDifficulty); // Update the state with the saved difficulty
  }, []);

  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: '50px', top: 'calc(50% - 80px)', zIndex: 10, pointerEvents: 'none' }}>
        <CardWithAnimatedText coordinates={coordinates} />
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
      {selectedPoint && (
        <MissionBriefing
          isOpen={isModalOpen}
          onClose={closeModal}
          missionData={selectedPoint}
          pauseMainAudio={pauseMainAudio}
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

      {/* Display the selected difficulty at the bottom-left */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        zIndex: 11,
        color: 'white',
        fontSize: '18px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '10px',
        borderRadius: '5px'
      }}>
        Difficulty: {difficulty}
      </div>
    </div>
  );
}

export default Main;
