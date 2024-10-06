import * as THREE from 'three';
import React, { Suspense, useRef, useMemo, useState } from 'react';
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Water } from 'three-stdlib';
import '../styles/Difficulty.css';
import LpContent from '../components/LpContent.js';
import backgroundMusic from '../assets/sounds/background_water.mp3';

extend({ Water });

function Ocean({ speed }) {
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.jpeg');
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), []);

  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x003249,
      distortionScale: 0,
      fog: false,
      format: gl.encoding
    }),
    [waterNormals]
  );

  // Use the speed passed in props to control the water movement speed
  useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta * speed));
  
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />;
}

export default function App() {
  const [difficulty, setDifficulty] = useState('MEDIUM'); // Default difficulty
  const [isPlaying, setIsPlaying] = useState(false); // Controls if audio is playing
  const audioRef = useRef(new Audio(backgroundMusic)); // Creates a reference to the audio

  // Function to toggle audio playback
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

  // Function to change speed based on difficulty
  const getSpeed = () => {
    switch (difficulty) {
      case 'EASY':
        return 0.5; // Slow speed
      case 'MEDIUM':
        return 1; // Normal speed
      case 'HARD':
        return 2; // Fast speed
      default:
        return 1; // Default to normal speed
    }
  };

  // Function to change speed based on difficulty and save the choice
const setDifficultyAndSave = (level) => {
  setDifficulty(level);
  localStorage.setItem('selectedDifficulty', level); // Save the chosen difficulty in localStorage
};
  // Function to navigate to the next page
  const goToNextPage = () => {
    window.location.href = '/'; // Adjust this to your desired route or URL
  };

  return (
    <>
      <Canvas camera={{ position: [0, 5, 100], fov: 55, near: 1, far: 20000 }}>
        <pointLight position={[100, 100, 100]} />
        <pointLight position={[-100, -100, -100]} />
        <Suspense fallback={null}>
          <Ocean speed={getSpeed()} /> {/* Pass the calculated speed */}
        </Suspense>
        <Sky 
  scale={1000} 
  sunPosition={[0, 0, 50]}  // Ajuste a posição do sol para mais próximo do horizonte
  sunColor="yellow"          
  turbidity={6}              // Aumenta o turbidity para um efeito mais difuso
  rayleigh={2}               // Aumenta o Rayleigh para uma atmosfera mais clara
/>
      </Canvas>
      
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
      <LpContent setDifficulty={setDifficultyAndSave} /> {/* Use the updated setDifficultyAndSave */}
    </div>

      <button
        onClick={toggleAudio}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 11,
          padding: '10px 20px',
          backgroundColor: isPlaying ? '#ECAA01' : '#1CAAD9',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {isPlaying ? 'Mute' : 'Unmute'}
      </button>

      {/* Button to go to the next page */}
      <button 
        onClick={goToNextPage} 
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          padding: '15px 30px',
          backgroundColor: '#1CAAD9',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          fontSize: '18px'
        }}
      >
        START MISSION
      </button>
    </>
  );
}

